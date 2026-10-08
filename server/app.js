import bcrypt from "bcryptjs";
import express from "express";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import { createHash, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pool } from "./database.js";
import { buildChallenge, buildReviewChallenge, evaluateChallenge } from "./challenges.js";
import { shapeLearnerCurriculum } from "./curriculum.js";
import { normalizeRegistrationInput, validDisplayName, validPassword, validUsername } from "./registration.js";
import { calculateExperienceReward } from "../src/progress.js";
import { callClaude, reserveTutorQuota, tutorSettings, validateTutorInput, TutorError } from "./tutor.js";
import { validateCurriculum } from "../src/admin.js";
import {
  MAX_LIBRARY_OVERRIDES,
  normalizeLibraryLesson,
  validLibraryLessonId,
  validateLibraryLesson,
  validateLibraryOverrides,
} from "../src/library-overrides.js";

const app = express();
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const isProduction = process.env.NODE_ENV === "production";
const registrationEnabled = process.env.REGISTRATION_ENABLED !== "false";
const sessionDurationMs = 7 * 24 * 60 * 60 * 1000;
const secureCookies = isProduction && process.env.COOKIE_SECURE !== "false";
const sessionCookie = secureCookies ? "__Host-eduquest_session" : "eduquest_session";
const adminRoles = new Set(["admin"]);
const dummyPasswordHash = await bcrypt.hash("not-a-real-user-password", 12);

app.disable("x-powered-by");
if (process.env.TRUST_PROXY) app.set("trust proxy", Number(process.env.TRUST_PROXY));
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      baseUri: ["'self'"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      imgSrc: ["'self'", "data:"],
      objectSrc: ["'none'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      upgradeInsecureRequests: isProduction ? [] : null,
    },
  },
  crossOriginEmbedderPolicy: false,
  referrerPolicy: { policy: "strict-origin-when-cross-origin" },
}));
app.use(express.json({ limit: "1mb", strict: true }));
app.use((request, response, next) => {
  response.setHeader("Cache-Control", "no-store");
  next();
});

function cookieValue(request) {
  const pair = request.headers.cookie?.split(";").map((value) => value.trim())
    .find((value) => value.startsWith(`${sessionCookie}=`));
  return pair ? decodeURIComponent(pair.slice(sessionCookie.length + 1)) : "";
}

function hashToken(value) {
  return createHash("sha256").update(value).digest("hex");
}

function setSessionCookie(response, token) {
  response.cookie(sessionCookie, token, {
    httpOnly: true,
    secure: secureCookies,
    sameSite: "strict",
    path: "/",
    maxAge: sessionDurationMs,
  });
}

async function issueSession(response, userId = null) {
  const token = randomBytes(32).toString("base64url");
  const csrfToken = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + sessionDurationMs);
  await pool.query(
    "INSERT INTO app_sessions (token_hash, user_id, csrf_token, expires_at) VALUES ($1, $2, $3, $4)",
    [hashToken(token), userId, csrfToken, expiresAt],
  );
  setSessionCookie(response, token);
  return { tokenHash: hashToken(token), csrfToken };
}

async function getSession(request) {
  const token = cookieValue(request);
  if (!token || token.length > 128) return null;
  const result = await pool.query(
    `SELECT s.token_hash, s.csrf_token, s.user_id, s.expires_at,
            u.username, u.role, u.display_name, u.grade, u.daily_goal
     FROM app_sessions s LEFT JOIN app_users u ON u.id = s.user_id
     WHERE s.token_hash = $1 AND s.expires_at > now()`,
    [hashToken(token)],
  );
  return result.rows[0] ?? null;
}

async function attachSession(request, response, next) {
  try {
    request.session = await getSession(request);
    if (!request.session) {
      const issued = await issueSession(response);
      request.session = { ...issued, user_id: null };
    }
    next();
  } catch (error) {
    next(error);
  }
}

function constantTimeMatches(supplied, expected) {
  if (typeof supplied !== "string" || typeof expected !== "string") return false;
  const left = Buffer.from(supplied);
  const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}

function verifyRequestOrigin(request) {
  const origin = request.get("origin");
  if (origin) {
    try {
      const parsed = new URL(origin);
      if (parsed.host !== request.get("host") || !["https:", "http:"].includes(parsed.protocol)) return false;
    } catch {
      return false;
    }
  }
  return request.get("sec-fetch-site") !== "cross-site";
}

function requireCsrf(request, response, next) {
  if (!verifyRequestOrigin(request) || !constantTimeMatches(request.get("x-csrf-token"), request.session.csrf_token)) {
    response.status(403).json({ error: "Phiên bảo mật không hợp lệ. Tải lại trang và thử lại." });
    return;
  }
  next();
}

function requireAuthentication(request, response, next) {
  if (!request.session?.user_id || !request.session.role) {
    response.status(401).json({ error: "Vui lòng đăng nhập để tiếp tục." });
    return;
  }
  next();
}

function requireAdministrator(request, response, next) {
  if (!request.session?.user_id || !adminRoles.has(request.session.role)) {
    response.status(403).json({ error: "Bạn không có quyền thực hiện thao tác quản trị." });
    return;
  }
  next();
}

function asyncRoute(handler) {
  return (request, response, next) => Promise.resolve(handler(request, response, next)).catch(next);
}

function validId(value) {
  return typeof value === "string" && /^[a-z0-9][a-z0-9-]{1,79}$/.test(value);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: process.env.APP_TIMEZONE ?? "Asia/Ho_Chi_Minh",
  }).format(date);
}

function dayDistance(later, earlier) {
  if (!later || !earlier) return Infinity;
  return Math.round((Date.parse(`${later}T12:00:00Z`) - Date.parse(`${earlier}T12:00:00Z`)) / 86_400_000);
}

function shapeUser(row) {
  return {
    id: row.id,
    username: row.username,
    role: row.role,
    displayName: row.display_name,
    grade: String(row.grade),
    dailyGoal: row.daily_goal,
    classId: row.class_id ?? null,
  };
}

function shapeProgress(row, history) {
  const currentDate = formatDate(new Date());
  return {
    completed: Number(row.completed),
    correct: Number(row.correct),
    totalAnswered: Number(row.total_answered),
    experiencePoints: Number(row.experience_points),
    bestScore: Number(row.best_score),
    dailyCount: row.daily_date === currentDate ? Number(row.daily_count) : 0,
    date: currentDate,
    streak: dayDistance(currentDate, row.last_study_date) <= 1 ? Number(row.streak) : 0,
    bestStreak: Number(row.best_streak),
    lastStudyDate: row.last_study_date,
    dailyRewardDate: row.daily_reward_date,
    displayName: row.display_name,
    grade: String(row.grade),
    dailyGoal: Number(row.daily_goal),
    recent: history.slice(0, 5).map((entry) => Math.round(entry.correct / entry.total * 100)),
    history,
  };
}

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 12,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Quá nhiều lần đăng nhập không thành công. Hãy chờ 15 phút rồi thử lại." },
});
const registrationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Bạn đã tạo quá nhiều tài khoản trong thời gian ngắn. Hãy thử lại sau." },
});
const adminCreationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 50,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});
const challengeCreationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 60,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Bạn đã tạo nhiều lượt học trong thời gian ngắn. Hãy thử lại sau nhé." },
});

app.get("/api/health", asyncRoute(async (request, response) => {
  await pool.query("SELECT 1");
  response.json({ status: "ok", app: "EduQuest", mode: "server" });
}));

app.get("/api/auth/session", attachSession, asyncRoute(async (request, response) => {
  response.json({
    csrfToken: request.session.csrf_token,
    registrationEnabled,
    user: request.session.user_id
      ? {
        id: request.session.user_id,
        username: request.session.username,
        role: request.session.role,
        displayName: request.session.display_name,
        grade: String(request.session.grade),
        dailyGoal: request.session.daily_goal,
      }
      : null,
  });
}));

app.post("/api/auth/login", attachSession, requireCsrf, loginLimiter, asyncRoute(async (request, response) => {
  const username = typeof request.body?.username === "string" ? request.body.username.trim().toLowerCase() : "";
  const password = typeof request.body?.password === "string" ? request.body.password : "";
  const userResult = await pool.query(
    "SELECT id, username, password_hash, role, display_name, grade, daily_goal, class_id FROM app_users WHERE username = $1",
    [username.slice(0, 40)],
  );
  const user = userResult.rows[0];
  const passwordMatches = await bcrypt.compare(password.slice(0, 128), user?.password_hash ?? dummyPasswordHash);
  if (!validUsername(username) || password.length < 12 || password.length > 128 || !user || !passwordMatches) {
    response.status(401).json({ error: "Tên đăng nhập hoặc mật khẩu chưa chính xác." });
    return;
  }
  await pool.query("DELETE FROM app_sessions WHERE token_hash = $1", [request.session.token_hash]);
  const session = await issueSession(response, user.id);
  response.json({ csrfToken: session.csrfToken, user: shapeUser(user) });
}));

app.post("/api/auth/register", attachSession, requireCsrf, registrationLimiter, asyncRoute(async (request, response) => {
  if (!registrationEnabled) {
    response.status(403).json({ error: "Đăng ký tài khoản hiện đang tạm đóng. Hãy liên hệ quản trị viên." });
    return;
  }
  const registration = normalizeRegistrationInput(request.body);
  if (!registration) {
    response.status(400).json({ error: "Vui lòng kiểm tra tên đăng nhập, tên hiển thị, khối lớp, mật khẩu và mã lớp." });
    return;
  }
  const { username, displayName, password, grade, classCode } = registration;

  const connection = await pool.connect();
  try {
    await connection.query("BEGIN");
    let classId = null;
    if (classCode) {
      const classResult = await connection.query(
        "SELECT id, grade FROM app_classes WHERE join_code = $1",
        [classCode],
      );
      if (!classResult.rowCount || Number(classResult.rows[0].grade) !== grade) {
        await connection.query("ROLLBACK");
        response.status(400).json({ error: "Mã lớp không hợp lệ hoặc không thuộc khối lớp bạn đã chọn." });
        return;
      }
      classId = classResult.rows[0].id;
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const result = await connection.query(
      `INSERT INTO app_users (id, username, password_hash, role, display_name, grade, class_id)
       VALUES ($1, $2, $3, 'learner', $4, $5, $6)
       RETURNING username`,
      [randomUUID(), username, passwordHash, displayName, grade, classId],
    );
    await connection.query("COMMIT");
    response.status(201).json({
      registered: true,
      username: result.rows[0].username,
      message: "Tạo tài khoản thành công. Hãy đăng nhập để bắt đầu học nhé.",
    });
  } catch (error) {
    await connection.query("ROLLBACK");
    if (error.code === "23505") {
      response.status(409).json({ error: "Tên đăng nhập này đã được sử dụng. Hãy chọn tên khác nhé." });
      return;
    }
    throw error;
  } finally {
    connection.release();
  }
}));

app.post("/api/auth/logout", attachSession, requireCsrf, asyncRoute(async (request, response) => {
  await pool.query("DELETE FROM app_sessions WHERE token_hash = $1", [request.session.token_hash]);
  response.clearCookie(sessionCookie, { httpOnly: true, secure: secureCookies, sameSite: "strict", path: "/" });
  response.status(204).end();
}));

app.get("/api/app", attachSession, requireAuthentication, asyncRoute(async (request, response) => {
  const [userResult, curriculumResult, sessionsResult, libraryLessons] = await Promise.all([
    pool.query(
      `SELECT u.*, c.name AS class_name FROM app_users u
       LEFT JOIN app_classes c ON c.id = u.class_id WHERE u.id = $1`,
      [request.session.user_id],
    ),
    pool.query("SELECT content FROM app_curriculum WHERE id = 1"),
    pool.query(
      `SELECT id, subject_id AS "subjectId", topic_id AS "topicId", mode,
              correct, total, experience_points AS "experiencePoints", mistakes,
              to_char(study_date, 'YYYY-MM-DD') AS date
       FROM learning_sessions WHERE user_id = $1 ORDER BY played_at DESC LIMIT 100`,
      [request.session.user_id],
    ),
    readLibraryOverrides(),
  ]);
  const user = userResult.rows[0];
  if (!user) {
    response.status(401).json({ error: "Tài khoản này không còn khả dụng." });
    return;
  }
  response.json({
    user: { ...shapeUser(user), className: user.class_name ?? null },
    progress: shapeProgress(user, sessionsResult.rows),
    subjects: shapeLearnerCurriculum(curriculumResult.rows[0]?.content ?? []),
    libraryLessons,
  });
}));

app.patch("/api/app/profile", attachSession, requireAuthentication, requireCsrf, asyncRoute(async (request, response) => {
  const displayName = typeof request.body?.displayName === "string"
    ? request.body.displayName.trim().replace(/\s+/g, " ")
    : "";
  const grade = Number(request.body?.grade);
  const dailyGoal = Number(request.body?.dailyGoal);
  if (!validDisplayName(displayName) || !Number.isInteger(grade) || grade < 6 || grade > 12
    || !Number.isInteger(dailyGoal) || dailyGoal < 1 || dailyGoal > 5) {
    response.status(400).json({ error: "Tên hiển thị, khối lớp hoặc mục tiêu hằng ngày chưa hợp lệ." });
    return;
  }
  const result = await pool.query(
    `UPDATE app_users SET display_name = $2, grade = $3, daily_goal = $4, updated_at = now()
     WHERE id = $1 RETURNING id, username, role, display_name, grade, daily_goal, class_id`,
    [request.session.user_id, displayName, grade, dailyGoal],
  );
  response.json({ user: shapeUser(result.rows[0]) });
}));

const tutorLimiter = rateLimit({ windowMs: 60_000, limit: 5, standardHeaders: "draft-8", legacyHeaders: false,
  keyGenerator: (request) => request.session.user_id,
  message: { error: "Hãy chờ một phút trước khi hỏi AI Tutor tiếp nhé." } });

app.post("/api/app/tutor", attachSession, requireAuthentication, requireCsrf, tutorLimiter, asyncRoute(async (request, response) => {
  try {
    const input = validateTutorInput(request.body);
    const settings = tutorSettings();
    if (!process.env.ANTHROPIC_API_KEY) throw new TutorError(503, "AI Tutor chưa được bật. Hãy liên hệ quản trị viên.");
    const curriculum = await pool.query("SELECT content FROM app_curriculum WHERE id = 1");
    const subject = curriculum.rows[0]?.content.find((item) => item.id === input.subjectId);
    const topic = subject?.topics.find((item) => item.id === input.topicId);
    if (!topic) throw new TutorError(404, "Không tìm thấy chủ đề học tập.");
    await reserveTutorQuota(pool, request.session.user_id, formatDate(new Date()), settings.dailyLimit);
    response.json(await callClaude(input, { grade: request.session.grade, subject, topic }));
  } catch (error) {
    if (error instanceof TutorError) { response.status(error.status).json({ error: error.message }); return; }
    throw error;
  }
}));

app.post("/api/app/challenges", attachSession, requireAuthentication, requireCsrf, challengeCreationLimiter, asyncRoute(async (request, response) => {
  const subjectId = request.body?.subjectId;
  const topicId = request.body?.topicId;
  const mode = request.body?.mode;
  if (!validId(subjectId) || !validId(topicId) || !["quiz", "match", "review"].includes(mode)) {
    response.status(400).json({ error: "Chủ đề hoặc chế độ thử thách chưa hợp lệ." });
    return;
  }
  const curriculumResult = await pool.query("SELECT content FROM app_curriculum WHERE id = 1");
  const subject = curriculumResult.rows[0]?.content.find((item) => item.id === subjectId);
  const topic = subject?.topics.find((item) => item.id === topicId);
  if (!topic) {
    response.status(404).json({ error: "Không tìm thấy chủ đề." });
    return;
  }

  let sourceSessionId = null;
  let challengeData;
  let responseData;
  if (mode === "review") {
    sourceSessionId = request.body?.sourceSessionId;
    if (!/^[0-9a-f-]{36}$/i.test(sourceSessionId ?? "")) {
      response.status(400).json({ error: "Không tìm thấy lượt học gốc để ôn tập." });
      return;
    }
    const source = await pool.query(
      `SELECT mistakes FROM learning_sessions
       WHERE id = $1 AND user_id = $2 AND subject_id = $3 AND topic_id = $4 AND mode IN ('quiz', 'match')`,
      [sourceSessionId, request.session.user_id, subjectId, topicId],
    );
    if (!source.rowCount || !Array.isArray(source.rows[0].mistakes) || !source.rows[0].mistakes.length) {
      response.status(404).json({ error: "Lượt học gốc không có câu sai để ôn tập." });
      return;
    }
    const previousReview = await pool.query(
      "SELECT 1 FROM learning_sessions WHERE user_id = $1 AND source_session_id = $2 LIMIT 1",
      [request.session.user_id, sourceSessionId],
    );
    if (previousReview.rowCount) {
      response.status(409).json({ error: "Bạn đã ôn tập các câu sai từ lượt này rồi." });
      return;
    }
    challengeData = buildReviewChallenge(source.rows[0].mistakes);
    if (!challengeData.length) {
      response.status(400).json({ error: "Không thể tạo lượt ôn tập từ câu hỏi đã lưu." });
      return;
    }
    responseData = { questions: challengeData.map(({ prompt, answers, explanation }) => ({ prompt, answers, explanation })) };
  } else if (mode === "quiz") {
    const challenge = buildChallenge(topic, mode);
    challengeData = challenge.data;
    responseData = { questions: challenge.questions.map(({ prompt, answers, explanation }) => ({ prompt, answers, explanation })) };
  } else {
    const challenge = buildChallenge(topic, mode);
    challengeData = challenge.data;
    responseData = { rounds: challenge.rounds.map(({ term, choices, explanation }) => ({ term, choices, explanation })) };
  }

  const challengeId = randomUUID();
  await pool.query(
    `INSERT INTO app_challenges (id, user_id, subject_id, topic_id, mode, challenge_data, source_session_id, expires_at)
     VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7, now() + interval '2 hours')`,
    [challengeId, request.session.user_id, subjectId, topicId, mode, JSON.stringify(challengeData), sourceSessionId],
  );
  response.status(201).json({ challengeId, mode, ...responseData });
}));

app.post("/api/app/challenges/:challengeId/answer", attachSession, requireAuthentication, requireCsrf, asyncRoute(async (request, response) => {
  if (!/^[0-9a-f-]{36}$/i.test(request.params.challengeId)) {
    response.status(404).json({ error: "Không tìm thấy thử thách đang hoạt động." });
    return;
  }
  const challenge = await pool.connect();
  try {
    await challenge.query("BEGIN");
    const result = await challenge.query(
      `SELECT challenge_data AS data, answers, expires_at
       FROM app_challenges WHERE id = $1 AND user_id = $2 AND expires_at > now()
       FOR UPDATE`,
      [request.params.challengeId, request.session.user_id],
    );
    if (!result.rowCount) {
      await challenge.query("ROLLBACK");
      response.status(404).json({ error: "Thử thách đã hết hạn hoặc không còn khả dụng." });
      return;
    }
    const data = result.rows[0].data;
    const answers = result.rows[0].answers;
    const { index, choice } = request.body ?? {};
    if (!Number.isInteger(index) || index !== answers.length || index < 0 || index >= data.length
      || !Number.isInteger(choice) || choice < 0 || choice > 3) {
      await challenge.query("ROLLBACK");
      response.status(400).json({ error: "Câu trả lời không theo thứ tự hoặc chưa hợp lệ." });
      return;
    }
    const question = data[index];
    const nextAnswers = [...answers, choice];
    await challenge.query(
      "UPDATE app_challenges SET answers = $2::jsonb WHERE id = $1",
      [request.params.challengeId, JSON.stringify(nextAnswers)],
    );
    await challenge.query("COMMIT");
    response.json({
      index,
      isCorrect: choice === question.correct,
      correctIndex: question.correct,
      explanation: question.explanation,
      complete: nextAnswers.length === data.length,
    });
  } catch (error) {
    await challenge.query("ROLLBACK");
    throw error;
  } finally {
    challenge.release();
  }
}));

app.post("/api/app/progress", attachSession, requireAuthentication, requireCsrf, asyncRoute(async (request, response) => {
  const { challengeId } = request.body ?? {};
  if (!/^[0-9a-f-]{36}$/i.test(challengeId ?? "")) {
    response.status(400).json({ error: "Kết quả thử thách không hợp lệ." });
    return;
  }
  const connection = await pool.connect();
  try {
    await connection.query("BEGIN");
    const alreadySaved = await connection.query(
      `SELECT id, correct, total, experience_points, daily_reward_earned, mistakes
       FROM learning_sessions WHERE id = $1 AND user_id = $2`,
      [challengeId, request.session.user_id],
    );
    if (alreadySaved.rowCount) {
      await connection.query("COMMIT");
      const saved = alreadySaved.rows[0];
      response.status(200).json({
        saved: true,
        duplicate: true,
        correct: Number(saved.correct),
        total: Number(saved.total),
        experienceEarned: Number(saved.experience_points),
        dailyRewardEarned: saved.daily_reward_earned,
        mistakes: saved.mistakes,
      });
      return;
    }
    const challengeResult = await connection.query(
      `SELECT subject_id, topic_id, mode, challenge_data, answers, source_session_id
       FROM app_challenges WHERE id = $1 AND user_id = $2 AND expires_at > now()
       FOR UPDATE`,
      [challengeId, request.session.user_id],
    );
    if (!challengeResult.rowCount) {
      await connection.query("ROLLBACK");
      response.status(404).json({ error: "Thử thách đã hết hạn hoặc đã được dùng." });
      return;
    }
    const challenge = challengeResult.rows[0];
    const expectedAnswers = challenge.challenge_data;
    const selectedAnswers = challenge.answers;
    const evaluation = evaluateChallenge(expectedAnswers, selectedAnswers);
    if (!evaluation) {
      await connection.query("ROLLBACK");
      response.status(400).json({ error: "Hãy hoàn thành toàn bộ câu hỏi trước khi lưu kết quả." });
      return;
    }
    const { correct, total, mistakes } = evaluation;
    const { subject_id: subjectId, topic_id: topicId, mode, source_session_id: sourceSessionId } = challenge;
    const userResult = await connection.query(
      "SELECT daily_goal, daily_count, daily_date, daily_reward_date, last_study_date, streak, best_streak FROM app_users WHERE id = $1 FOR UPDATE",
      [request.session.user_id],
    );
    if (!userResult.rowCount) throw new Error("Learner account disappeared during progress save.");
    const learner = userResult.rows[0];
    const studyDate = formatDate(new Date());
    const dailyCount = learner.daily_date === studyDate ? Number(learner.daily_count) + 1 : 1;
    const dailyRewardClaimed = learner.daily_reward_date === studyDate;
    const reward = calculateExperienceReward({
      mode,
      correct,
      total,
      dailyCount,
      dailyGoal: learner.daily_goal,
      dailyRewardClaimed,
    });
    const experienceEarned = reward.experienceEarned;
    let streak = Number(learner.streak);
    let lastStudyDate = learner.last_study_date;
    let bestStreak = Number(learner.best_streak);
    if (lastStudyDate !== studyDate) {
      streak = dayDistance(studyDate, lastStudyDate) === 1 ? streak + 1 : 1;
      lastStudyDate = studyDate;
      bestStreak = Math.max(bestStreak, streak);
    }
    await connection.query(
      `INSERT INTO learning_sessions (id, user_id, subject_id, topic_id, mode, correct, total, experience_points, mistakes, study_date, source_session_id, daily_reward_earned)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10, $11, $12)`,
      [challengeId, request.session.user_id, subjectId, topicId, mode, correct, total, experienceEarned, JSON.stringify(mistakes), studyDate, sourceSessionId, reward.dailyRewardEarned],
    );
    await connection.query("DELETE FROM app_challenges WHERE id = $1", [challengeId]);
    await connection.query(
      `UPDATE app_users SET completed = completed + 1, correct = correct + $2,
        total_answered = total_answered + $3, experience_points = experience_points + $4,
        best_score = GREATEST(best_score, $5), daily_count = $6, daily_date = $7,
        daily_reward_date = CASE WHEN $8 THEN $7 ELSE daily_reward_date END,
        streak = $9, best_streak = $10, last_study_date = $11, updated_at = now()
       WHERE id = $1`,
      [request.session.user_id, correct, total, experienceEarned, Math.round(correct / total * 100), dailyCount, studyDate, reward.dailyRewardEarned, streak, bestStreak, lastStudyDate],
    );
    await connection.query("COMMIT");
    response.status(201).json({
      saved: true,
      duplicate: false,
      correct,
      total,
      mistakes,
      experienceEarned,
      dailyRewardEarned: reward.dailyRewardEarned,
    });
  } catch (error) {
    await connection.query("ROLLBACK");
    throw error;
  } finally {
    connection.release();
  }
}));

app.get("/api/admin/overview", attachSession, requireAuthentication, requireAdministrator, asyncRoute(async (request, response) => {
  const [counts, usage] = await Promise.all([
    pool.query(
      `SELECT (SELECT count(*) FROM app_users WHERE role = 'learner')::int AS learners,
              (SELECT count(*) FROM app_classes)::int AS classes,
              (SELECT count(*) FROM learning_sessions)::int AS sessions,
              COALESCE((SELECT round(100.0 * sum(correct) / NULLIF(sum(total), 0)) FROM learning_sessions), 0)::int AS accuracy`,
    ),
    pool.query(
      `SELECT s.subject_id AS "subjectId", count(*)::int AS sessions
       FROM learning_sessions s GROUP BY s.subject_id ORDER BY sessions DESC LIMIT 5`,
    ),
  ]);
  response.json({ ...counts.rows[0], usage: usage.rows });
}));

app.get("/api/admin/classes", attachSession, requireAuthentication, requireAdministrator, asyncRoute(async (request, response) => {
  const result = await pool.query(
    `SELECT c.id, c.name, c.grade, c.join_code AS "joinCode", c.created_at AS "createdAt",
            count(u.id)::int AS "learnerCount"
     FROM app_classes c LEFT JOIN app_users u ON u.class_id = c.id AND u.role = 'learner'
     GROUP BY c.id ORDER BY c.created_at DESC`,
  );
  response.json({ classes: result.rows });
}));

app.get("/api/admin/administrators", attachSession, requireAuthentication, requireAdministrator, asyncRoute(async (request, response) => {
  const result = await pool.query(
    `SELECT id, username, display_name AS "displayName", created_at AS "createdAt"
     FROM app_users WHERE role = 'admin' ORDER BY created_at, username`,
  );
  response.json({ administrators: result.rows });
}));

app.post("/api/admin/administrators", attachSession, requireAuthentication, requireAdministrator, requireCsrf, adminCreationLimiter, asyncRoute(async (request, response) => {
  const username = typeof request.body?.username === "string" ? request.body.username.trim().toLowerCase() : "";
  const displayName = typeof request.body?.displayName === "string"
    ? request.body.displayName.trim().replace(/\s+/g, " ")
    : "";
  const password = request.body?.password;
  if (!validUsername(username) || !validDisplayName(displayName) || !validPassword(password)) {
    response.status(400).json({ error: "Tên đăng nhập chưa hợp lệ hoặc mật khẩu cần có từ 12 đến 128 ký tự." });
    return;
  }
  const passwordHash = await bcrypt.hash(password, 12);
  try {
    const result = await pool.query(
      `INSERT INTO app_users (id, username, password_hash, role, display_name, grade)
       VALUES ($1, $2, $3, 'admin', $4, 9)
       RETURNING id, username, display_name AS "displayName", created_at AS "createdAt"`,
      [randomUUID(), username, passwordHash, displayName],
    );
    response.status(201).json({ administrator: result.rows[0] });
  } catch (error) {
    if (error.code === "23505") {
      response.status(409).json({ error: "Tên đăng nhập này đã được sử dụng. Hãy chọn tên khác nhé." });
      return;
    }
    throw error;
  }
}));

app.post("/api/admin/classes", attachSession, requireAuthentication, requireAdministrator, requireCsrf, asyncRoute(async (request, response) => {
  const name = typeof request.body?.name === "string" ? request.body.name.trim() : "";
  const grade = Number(request.body?.grade);
  if (name.length < 2 || name.length > 80 || !Number.isInteger(grade) || grade < 6 || grade > 12) {
    response.status(400).json({ error: "Tên lớp cần từ 2 đến 80 ký tự và khối lớp từ 6 đến 12." });
    return;
  }
  const id = randomUUID();
  const joinCode = randomBytes(6).toString("base64url").toUpperCase().replace(/[-_]/g, "X");
  try {
    const result = await pool.query(
      `INSERT INTO app_classes (id, name, grade, join_code) VALUES ($1, $2, $3, $4)
       RETURNING id, name, grade, join_code AS "joinCode", created_at AS "createdAt"`,
      [id, name, grade, joinCode],
    );
    response.status(201).json({ class: { ...result.rows[0], learnerCount: 0 } });
  } catch (error) {
    if (error.code === "23505") {
      response.status(409).json({ error: "Tên lớp đã được sử dụng. Hãy chọn tên khác." });
      return;
    }
    throw error;
  }
}));

app.patch("/api/admin/classes/:classId", attachSession, requireAuthentication, requireAdministrator, requireCsrf, asyncRoute(async (request, response) => {
  const { name } = request.body ?? {};
  const grade = Number(request.body?.grade);
  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 80
    || !Number.isInteger(grade) || grade < 6 || grade > 12) {
    response.status(400).json({ error: "Tên lớp hoặc khối lớp chưa hợp lệ." });
    return;
  }
  try {
    const result = await pool.query(
      `UPDATE app_classes SET name = $2, grade = $3 WHERE id = $1
       RETURNING id, name, grade, join_code AS "joinCode"`,
      [request.params.classId, name.trim(), grade],
    );
    if (!result.rowCount) {
      response.status(404).json({ error: "Không tìm thấy lớp học." });
      return;
    }
    response.json({ class: result.rows[0] });
  } catch (error) {
    if (error.code === "23505") {
      response.status(409).json({ error: "Tên lớp đã được sử dụng. Hãy chọn tên khác." });
      return;
    }
    throw error;
  }
}));

app.delete("/api/admin/classes/:classId", attachSession, requireAuthentication, requireAdministrator, requireCsrf, asyncRoute(async (request, response) => {
  const result = await pool.query(
    "DELETE FROM app_classes c WHERE c.id = $1 AND NOT EXISTS (SELECT 1 FROM app_users u WHERE u.class_id = c.id) RETURNING c.id",
    [request.params.classId],
  );
  if (!result.rowCount) {
    response.status(409).json({ error: "Không thể xóa lớp không tồn tại hoặc còn học sinh. Hãy chuyển học sinh sang lớp khác trước." });
    return;
  }
  response.status(204).end();
}));

app.get("/api/admin/learners", attachSession, requireAuthentication, requireAdministrator, asyncRoute(async (request, response) => {
  const classId = typeof request.query.classId === "string" ? request.query.classId : null;
  const result = await pool.query(
    `SELECT u.id, u.username, u.display_name AS "displayName", u.grade, u.daily_goal AS "dailyGoal",
            u.class_id AS "classId", c.name AS "className", u.completed,
            u.correct, u.total_answered AS "totalAnswered", u.experience_points AS "experiencePoints",
            u.best_score AS "bestScore", u.streak, u.best_streak AS "bestStreak", u.created_at AS "createdAt"
     FROM app_users u LEFT JOIN app_classes c ON c.id = u.class_id
     WHERE u.role = 'learner' AND ($1::text IS NULL OR u.class_id = $1)
     ORDER BY u.display_name, u.username`,
    [classId],
  );
  response.json({ learners: result.rows });
}));

app.post("/api/admin/learners", attachSession, requireAuthentication, requireAdministrator, requireCsrf, adminCreationLimiter, asyncRoute(async (request, response) => {
  const username = typeof request.body?.username === "string" ? request.body.username.trim().toLowerCase() : "";
  const displayName = typeof request.body?.displayName === "string" ? request.body.displayName.trim().replace(/\s+/g, " ") : "";
  const password = request.body?.password;
  const grade = Number(request.body?.grade);
  const dailyGoal = Number(request.body?.dailyGoal ?? 3);
  const classId = request.body?.classId || null;
  if (!validUsername(username) || !validDisplayName(displayName) || !validPassword(password)
    || !Number.isInteger(grade) || grade < 6 || grade > 12 || !Number.isInteger(dailyGoal) || dailyGoal < 1 || dailyGoal > 5) {
    response.status(400).json({ error: "Tên tài khoản, mật khẩu tạm (ít nhất 12 ký tự), tên hiển thị hoặc cài đặt học tập chưa hợp lệ." });
    return;
  }
  if (classId) {
    const classResult = await pool.query("SELECT id, grade FROM app_classes WHERE id = $1", [classId]);
    if (!classResult.rowCount) {
      response.status(400).json({ error: "Lớp học được chọn không tồn tại." });
      return;
    }
  }
  const id = randomUUID();
  const passwordHash = await bcrypt.hash(password, 12);
  try {
    const result = await pool.query(
      `INSERT INTO app_users (id, username, password_hash, role, display_name, grade, daily_goal, class_id)
       VALUES ($1, $2, $3, 'learner', $4, $5, $6, $7)
       RETURNING id, username, display_name AS "displayName", grade, daily_goal AS "dailyGoal", class_id AS "classId"`,
      [id, username, passwordHash, displayName, grade, dailyGoal, classId],
    );
    response.status(201).json({ learner: result.rows[0] });
  } catch (error) {
    if (error.code === "23505") {
      response.status(409).json({ error: "Tên đăng nhập đã tồn tại. Hãy chọn tên khác." });
      return;
    }
    throw error;
  }
}));

app.patch("/api/admin/learners/:learnerId", attachSession, requireAuthentication, requireAdministrator, requireCsrf, asyncRoute(async (request, response) => {
  const { displayName } = request.body ?? {};
  const grade = Number(request.body?.grade);
  const dailyGoal = Number(request.body?.dailyGoal);
  const classId = request.body?.classId || null;
  const password = request.body?.password;
  if (!validDisplayName(displayName) || !Number.isInteger(grade) || grade < 6 || grade > 12
    || !Number.isInteger(dailyGoal) || dailyGoal < 1 || dailyGoal > 5
    || (password !== undefined && !validPassword(password))) {
    response.status(400).json({ error: "Thông tin học sinh hoặc mật khẩu mới chưa hợp lệ." });
    return;
  }
  if (classId) {
    const classResult = await pool.query("SELECT id FROM app_classes WHERE id = $1", [classId]);
    if (!classResult.rowCount) {
      response.status(400).json({ error: "Lớp học được chọn không tồn tại." });
      return;
    }
  }
  const passwordHash = password ? await bcrypt.hash(password, 12) : null;
  const connection = await pool.connect();
  try {
    await connection.query("BEGIN");
    const result = await connection.query(
      `UPDATE app_users SET display_name = $2, grade = $3, daily_goal = $4,
         class_id = $5, password_hash = COALESCE($6, password_hash), updated_at = now()
       WHERE id = $1 AND role = 'learner'
       RETURNING id, username, display_name AS "displayName", grade, daily_goal AS "dailyGoal", class_id AS "classId"`,
      [request.params.learnerId, displayName.trim().replace(/\s+/g, " "), grade, dailyGoal, classId, passwordHash],
    );
    if (!result.rowCount) {
      await connection.query("ROLLBACK");
      response.status(404).json({ error: "Không tìm thấy học sinh." });
      return;
    }
    if (password) {
      await connection.query("DELETE FROM app_sessions WHERE user_id = $1", [request.params.learnerId]);
    }
    await connection.query("COMMIT");
    response.json({ learner: result.rows[0] });
  } catch (error) {
    await connection.query("ROLLBACK");
    throw error;
  } finally {
    connection.release();
  }
}));

app.delete("/api/admin/learners/:learnerId", attachSession, requireAuthentication, requireAdministrator, requireCsrf, asyncRoute(async (request, response) => {
  const result = await pool.query(
    "DELETE FROM app_users WHERE id = $1 AND role = 'learner' RETURNING id",
    [request.params.learnerId],
  );
  if (!result.rowCount) {
    response.status(404).json({ error: "Không tìm thấy học sinh." });
    return;
  }
  response.status(204).end();
}));

app.get("/api/admin/curriculum", attachSession, requireAuthentication, requireAdministrator, asyncRoute(async (request, response) => {
  const result = await pool.query("SELECT content, updated_at AS \"updatedAt\" FROM app_curriculum WHERE id = 1");
  response.json({ subjects: result.rows[0]?.content ?? [], updatedAt: result.rows[0]?.updatedAt ?? null });
}));

app.put("/api/admin/curriculum", attachSession, requireAuthentication, requireAdministrator, requireCsrf, asyncRoute(async (request, response) => {
  const error = validateCurriculum(request.body?.subjects);
  if (error) {
    response.status(400).json({ error });
    return;
  }
  const result = await pool.query(
    `UPDATE app_curriculum SET content = $1::jsonb, updated_by = $2, updated_at = now()
     WHERE id = 1 RETURNING updated_at AS "updatedAt"`,
    [JSON.stringify(request.body.subjects), request.session.user_id],
  );
  response.json({ saved: true, updatedAt: result.rows[0]?.updatedAt ?? null });
}));

async function readLibraryOverrides() {
  const result = await pool.query(
    "SELECT lesson_id AS id, content AS lesson FROM app_library_overrides ORDER BY lesson_id",
  );
  return result.rows;
}

app.get("/api/admin/library", attachSession, requireAuthentication, requireAdministrator, asyncRoute(async (request, response) => {
  response.json({ lessons: await readLibraryOverrides() });
}));

app.put("/api/admin/library/lessons/:lessonId", attachSession, requireAuthentication, requireAdministrator, requireCsrf, asyncRoute(async (request, response) => {
  const { lessonId } = request.params;
  const lesson = request.body?.lesson;
  const error = !validLibraryLessonId(lessonId)
    ? "Mã bài học không hợp lệ."
    : lesson === null
      ? ""
      : validateLibraryLesson(lesson) || (lesson.id === lessonId ? "" : "Mã bài học không khớp nội dung.");
  if (error) {
    response.status(400).json({ error });
    return;
  }
  const count = await pool.query(
    "SELECT count(*)::int AS total, bool_or(lesson_id = $1) AS present FROM app_library_overrides",
    [lessonId],
  );
  if (!count.rows[0].present && count.rows[0].total >= MAX_LIBRARY_OVERRIDES) {
    response.status(400).json({ error: `Thư viện chỉ lưu tối đa ${MAX_LIBRARY_OVERRIDES} thay đổi.` });
    return;
  }
  await pool.query(
    `INSERT INTO app_library_overrides (lesson_id, content, updated_by, updated_at)
     VALUES ($1, $2::jsonb, $3, now())
     ON CONFLICT (lesson_id) DO UPDATE SET content = EXCLUDED.content, updated_by = EXCLUDED.updated_by, updated_at = now()`,
    [lessonId, lesson === null ? null : JSON.stringify(normalizeLibraryLesson(lesson)), request.session.user_id],
  );
  response.json({ saved: true });
}));

app.delete("/api/admin/library/lessons/:lessonId", attachSession, requireAuthentication, requireAdministrator, requireCsrf, asyncRoute(async (request, response) => {
  if (!validLibraryLessonId(request.params.lessonId)) {
    response.status(400).json({ error: "Mã bài học không hợp lệ." });
    return;
  }
  await pool.query("DELETE FROM app_library_overrides WHERE lesson_id = $1", [request.params.lessonId]);
  response.status(204).end();
}));

app.put("/api/admin/library", attachSession, requireAuthentication, requireAdministrator, requireCsrf, asyncRoute(async (request, response) => {
  const rows = request.body?.lessons;
  const overrides = Array.isArray(rows) ? Object.fromEntries(rows.map((row) => [row?.id, row?.lesson])) : null;
  const error = !Array.isArray(rows) || Object.keys(overrides).length !== rows.length
    ? "Danh sách bài thư viện không hợp lệ."
    : validateLibraryOverrides(overrides);
  if (error) {
    response.status(400).json({ error });
    return;
  }
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM app_library_overrides");
    for (const [lessonId, lesson] of Object.entries(overrides)) {
      await client.query(
        "INSERT INTO app_library_overrides (lesson_id, content, updated_by) VALUES ($1, $2::jsonb, $3)",
        [lessonId, lesson === null ? null : JSON.stringify(normalizeLibraryLesson(lesson)), request.session.user_id],
      );
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
  response.json({ saved: true, count: rows.length });
}));

app.get("/api/admin/learners/:learnerId/history", attachSession, requireAuthentication, requireAdministrator, asyncRoute(async (request, response) => {
  const result = await pool.query(
    `SELECT id, subject_id AS "subjectId", topic_id AS "topicId", mode, correct, total,
            experience_points AS "experiencePoints", mistakes, to_char(study_date, 'YYYY-MM-DD') AS date,
            played_at AS "playedAt"
     FROM learning_sessions WHERE user_id = $1 ORDER BY played_at DESC LIMIT 100`,
    [request.params.learnerId],
  );
  response.json({ history: result.rows });
}));

app.use("/api", (request, response) => {
  response.status(404).json({ error: "Không tìm thấy API." });
});

const dist = path.join(root, "dist");
app.use(express.static(dist, { index: false, maxAge: isProduction ? "1h" : 0 }));
app.get(/.*/, asyncRoute(async (request, response) => {
  const index = await readFile(path.join(dist, "index.html"), "utf8");
  response.type("html").send(index);
}));

app.use((error, request, response, next) => {
  if (response.headersSent) {
    next(error);
    return;
  }
  if (error.type === "entity.too.large") {
    response.status(413).json({ error: "Dữ liệu gửi vượt quá giới hạn cho phép." });
    return;
  }
  if (error instanceof SyntaxError && "body" in error) {
    response.status(400).json({ error: "Nội dung JSON không hợp lệ." });
    return;
  }
  const requestId = randomUUID();
  console.error(`[${requestId}] ${request.method} ${request.path}`, error);
  response.status(500).json({ error: "Máy chủ gặp sự cố khi xử lý yêu cầu.", requestId });
});

export default app;
