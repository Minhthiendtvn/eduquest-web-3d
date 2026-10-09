import { matchSets, subjects as starterSubjects } from "./content.js";
import { renderTutor } from "./tutor.js";
import { ADMIN_CONTENT_KEY, copyCurriculum, exportLearnerCsv, exportLearnerSummaryCsv, loadManagedCurriculum, renderAdmin, renderAdminQuestionCard, slugifyTopic, validateCurriculum } from "./admin.js";
import { apiRequest, setCsrfToken } from "./api.js";
import { calculateExperienceReward, getExperienceLevel as calculateExperienceLevel } from "./progress.js";
import { adjustTextSize, applyTextSize, readTextSize, TEXT_SIZE_KEY, TEXT_SIZE_LEVELS } from "./text-size.js";
import "./styles.css";
import { escapeHtml } from "./html.js";
import { renderLibrary } from "./library.js";
import { libraryLessons } from "./library-content.js";
import { renderAdminLibrary } from "./library-admin.js";
import {
  LIBRARY_OVERRIDES_KEY,
  applyLibraryOverrides,
  createLibraryLessonId,
  loadLocalLibraryOverrides,
  normalizeLibraryLesson,
  overridesFromRows,
  validateLibraryLesson,
  validateLibraryOverrides,
} from "./library-overrides.js";

const STORAGE_KEY = "eduquest-progress-v1";
const managedCurriculum = loadManagedCurriculum(localStorage, starterSubjects);
let subjects = managedCurriculum.subjects;
let hasManagedEdits = managedCurriculum.hasEdits;
let customMatchTopicIds = new Set(managedCurriculum.customMatchTopicIds ?? []);
let libraryOverrides = loadLocalLibraryOverrides(localStorage);
let apiMode = false;
let backendRequired = import.meta.env.VITE_REQUIRE_API === "true";
const app = document.querySelector("#app");
const today = new Date().toLocaleDateString("sv-SE");
const initialProgress = {
  completed: 0,
  correct: 0,
  totalAnswered: 0,
  experiencePoints: 0,
  bestScore: 0,
  dailyCount: 0,
  date: today,
  streak: 0,
  bestStreak: 0,
  lastStudyDate: "",
  dailyRewardDate: "",
  displayName: "Minh Nguyễn",
  grade: "9",
  dailyGoal: 3,
  recent: [],
  history: [],
};

function daysBetween(later, earlier) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(later) || !/^\d{4}-\d{2}-\d{2}$/.test(earlier)) return Infinity;
  return Math.round(
    (new Date(`${later}T12:00:00`).getTime() - new Date(`${earlier}T12:00:00`).getTime())
    / 86_400_000,
  );
}

function readProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return { ...initialProgress };

  let parsed;
  try {
    parsed = JSON.parse(saved);
  } catch (error) {
    if (error instanceof SyntaxError) return { ...initialProgress };
    throw error;
  }
  if (!parsed || typeof parsed !== "object") return { ...initialProgress };

  const history = Array.isArray(parsed.history)
    ? parsed.history.filter((entry) =>
      entry
      && typeof entry === "object"
      && subjects.some((subject) => subject.id === entry.subjectId && subject.topics.some((topic) => topic.id === entry.topicId))
      && (entry.mode === "quiz" || entry.mode === "match" || entry.mode === "review")
      && Number.isInteger(entry.correct)
      && Number.isInteger(entry.total)
      && entry.total > 0
      && entry.correct >= 0
      && entry.correct <= entry.total
      && /^\d{4}-\d{2}-\d{2}$/.test(entry.date),
    ).slice(0, 100).map((entry) => ({
      ...entry,
      experiencePoints: Number.isInteger(entry.experiencePoints) && entry.experiencePoints >= 0
        ? entry.experiencePoints
        : 0,
      mistakes: Array.isArray(entry.mistakes)
        ? entry.mistakes.filter((mistake) =>
          mistake
          && typeof mistake.prompt === "string"
          && typeof mistake.chosen === "string"
          && typeof mistake.correct === "string"
          && typeof mistake.explanation === "string"
          && Array.isArray(mistake.options)
          && mistake.options.length === 4
          && mistake.options.every((option) => typeof option === "string" && option.length <= 300)
          && Number.isInteger(mistake.correctIndex)
          && mistake.correctIndex >= 0
          && mistake.correctIndex < mistake.options.length
          && mistake.prompt.length <= 500
          && mistake.chosen.length <= 300
          && mistake.correct.length <= 300
          && mistake.explanation.length <= 600,
        ).slice(0, 5)
        : [],
    }))
    : [];
  const activeDates = [...new Set(history.map((entry) => entry.date))].sort().reverse();
  const lastStudyDate = /^\d{4}-\d{2}-\d{2}$/.test(parsed.lastStudyDate)
    ? parsed.lastStudyDate
    : activeDates[0] ?? "";
  let inferredStreak = 0;
  if (lastStudyDate) {
    for (const activeDate of activeDates) {
      if (daysBetween(lastStudyDate, activeDate) !== inferredStreak) break;
      inferredStreak += 1;
    }
  }
  const progress = {
    completed: Number.isFinite(parsed.completed) ? parsed.completed : 0,
    correct: Number.isFinite(parsed.correct) ? parsed.correct : 0,
    totalAnswered: Number.isFinite(parsed.totalAnswered)
      ? parsed.totalAnswered
      : (Number.isFinite(parsed.completed) ? parsed.completed : 0) * 5,
    experiencePoints: Number.isInteger(parsed.experiencePoints) && parsed.experiencePoints >= 0
      ? parsed.experiencePoints
      : history.reduce((total, entry) => total + entry.experiencePoints, 0),
    bestScore: Number.isFinite(parsed.bestScore) ? parsed.bestScore : 0,
    dailyCount: parsed.date === today && Number.isFinite(parsed.dailyCount) ? parsed.dailyCount : 0,
    date: today,
    streak: Number.isInteger(parsed.streak) && parsed.streak >= 0 ? parsed.streak : inferredStreak,
    bestStreak: Number.isInteger(parsed.bestStreak) && parsed.bestStreak >= 0
      ? parsed.bestStreak
      : Math.max(inferredStreak, Number.isInteger(parsed.streak) && parsed.streak >= 0 ? parsed.streak : 0),
    lastStudyDate,
    dailyRewardDate: /^\d{4}-\d{2}-\d{2}$/.test(parsed.dailyRewardDate) ? parsed.dailyRewardDate : "",
    displayName: typeof parsed.displayName === "string" && parsed.displayName.trim().length >= 2
      ? parsed.displayName.trim().slice(0, 32)
      : "Minh Nguyễn",
    grade: ["6", "7", "8", "9", "10", "11", "12"].includes(String(parsed.grade))
      ? String(parsed.grade)
      : "9",
    dailyGoal: Number.isInteger(parsed.dailyGoal) && parsed.dailyGoal >= 1 && parsed.dailyGoal <= 5
      ? parsed.dailyGoal
      : 3,
    recent: Array.isArray(parsed.recent) ? parsed.recent.filter(Number.isFinite).slice(0, 5) : [],
    history,
  };
  return progress;
}

function getCurrentStreak() {
  const daysSinceStudy = daysBetween(today, state.progress.lastStudyDate);
  return daysSinceStudy <= 1 ? state.progress.streak : 0;
}

const state = {
  tutor: { subjectId: "", topicId: "", question: "", answer: "", error: "", busy: false, truncated: false },
  screen: "home",
  libraryGrade: "",
  librarySubjectId: "",
  libraryQuery: "",
  libraryLessonId: "",
  booting: true,
  currentUser: null,
  authError: "",
  authNotice: "",
  authUsername: "",
  authMode: "login",
  registrationEnabled: true,
  authBusy: false,
  answerBusy: false,
  finishBusy: false,
  adminOverview: null,
  adminClasses: [],
  adminLearners: [],
  adminAdministrators: [],
  adminLearnerHistory: [],
  adminSelectedLearner: "",
  selectedAdminClassId: "",
  adminDataLoading: false,
  gameId: "",
  adminTab: "overview",
  tutorShowContext: false,
  adminLibraryFilters: { grade: "", subjectId: "", status: "", query: "" },
  adminLibraryLessonId: "",
  adminLibraryCreating: false,
  adminSubjectId: subjects[0].id,
  adminTopicId: subjects[0].topics[0]?.id ?? "",
  adminCreatingTopic: false,
  adminQuestionFilter: "",
  installAvailable: false,
  installInstalled: false,
  showInstallHelp: false,
  textSize: readTextSize(localStorage),
  adminNotice: managedCurriculum.invalid ? "Không thể đọc nội dung tùy chỉnh; đã nạp lại nội dung mẫu." : "",
  selectedSubject: "math",
  topicId: "algebra",
  mode: "quiz",
  questionIndex: 0,
  answers: [],
  sessionQuestions: [],
  matchRounds: [],
  reviewQuestions: [],
  matchSourceSelected: false,
  matchMessage: "",
  expandedReview: null,
  progress: readProgress(),
  result: null,
  notice: "",
};

function getExperienceLevel(experiencePoints = state.progress.experiencePoints) {
  return calculateExperienceLevel(experiencePoints);
}

const icon = (name, size = 20) => {
  const paths = {
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7H10v7H4a1 1 0 0 1-1-1z"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21zm0 0V21"/><path d="M8 7h8M8 11h8"/>',
    chart: '<path d="M4 19V5m0 14h17"/><path d="m7 14 4-4 3 2 6-7"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.3 4.7-4.7 2.3 2.3-4.7z"/>',
    bolt: '<path d="m13 2-3 9h7L9 22l3-9H5z"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    sparkles: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    crown: '<path d="m3 8 5 4 4-7 4 7 5-4-2 12H5z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
  };
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] ?? ""}</svg>`;
};

function getSubject(id = state.selectedSubject) {
  return subjects.find((subject) => subject.id === id) ?? subjects[0];
}

function getTopic() {
  const subject = getSubject();
  return subject.topics.find((topic) => topic.id === state.topicId) ?? subject.topics[0];
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
}

function scrollToElement(element, block = "start") {
  element?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block,
  });
}

function subjectMark(subject, extraClass = "") {
  return `<span class="subject-mark subject-mark--${subject.color} ${extraClass}" aria-hidden="true">${escapeHtml(subject.symbol)}</span>`;
}

function renderSidebar() {
  const level = getExperienceLevel();
  const canAdmin = !apiMode || state.currentUser?.role === "admin";
  return `
    <aside class="sidebar" aria-label="Điều hướng chính">
      <a class="brand" href="#home" data-action="home" aria-label="EduQuest — Trang chủ">
        <span class="brand-mark"><span>e</span><span>q</span></span>
        <span class="brand-name">edu<span>quest</span><i>.</i></span>
      </a>
      <div class="sidebar-label">KHÔNG GIAN HỌC TẬP</div>
      <nav class="side-nav">
        <button class="nav-link ${state.screen === "tutor" ? "is-active" : ""}" type="button" data-action="tutor">${icon("sparkles")}<span>AI Tutor</span></button>
        <a class="nav-link ${state.screen === "home" ? "is-active" : ""}" href="#home" data-action="home" aria-label="Trang chủ">
          ${icon("home")}<span>Trang chủ</span>
        </a>
        <a class="nav-link" href="#subjects" data-action="explore" aria-label="Khám phá">${icon("compass")}<span>Khám phá</span><span class="nav-new">MỚI</span></a>
        <button class="nav-link ${state.screen === "library" ? "is-active" : ""}" type="button" data-action="library" aria-label="Thư viện học tập" ${state.screen === "library" ? 'aria-current="page"' : ""}>${icon("compass")}<span>Thư viện</span></button>
        <a class="nav-link ${state.screen === "progress" ? "is-active" : ""}" href="#progress" data-action="progress" aria-label="Tiến độ của bạn">${icon("chart")}<span>Tiến độ của bạn</span></a>
        <button class="nav-link ${state.screen === "profile" ? "is-active" : ""}" type="button" data-action="profile" aria-label="Hồ sơ học tập">${icon("user")}<span>Hồ sơ</span></button>
        ${canAdmin ? `<button class="nav-link ${state.screen === "admin" ? "is-active" : ""}" type="button" data-action="admin" aria-label="Quản trị">${icon("chart")}<span>Quản trị</span></button>` : ""}
        ${apiMode ? `<button class="nav-link" type="button" data-action="logout" aria-label="Đăng xuất">${icon("close")}<span>Đăng xuất</span></button>` : ""}
      </nav>
      <div class="sidebar-divider"></div>
      <div class="sidebar-label">MÔN HỌC CỦA BẠN</div>
      <div class="sidebar-subjects" tabindex="0" aria-label="Danh sách môn học">
        ${subjects.map((subject) => `
          <button class="subject-shortcut" type="button" data-action="subject" data-subject="${subject.id}">
            ${subjectMark(subject, "subject-mark--small")}
            <span>${escapeHtml(subject.name)}</span>
            <span class="subject-status">${state.progress.completed ? "•••" : "MỚI"}</span>
          </button>
        `).join("")}
      </div>
      <div class="sidebar-tip">
        <span class="tip-sparkle">${icon("sparkles", 17)}</span>
        <p>Mỗi ngày một chút,<br /><strong>tiến bộ thật nhiều!</strong></p>
        <div class="tip-progress"><span style="width:${Math.min(state.progress.dailyCount / state.progress.dailyGoal * 100, 100)}%"></span></div>
        <span class="tip-caption">${Math.min(state.progress.dailyCount, state.progress.dailyGoal)} / ${state.progress.dailyGoal} bài học hôm nay</span>
      </div>
      <button class="profile-button" type="button" data-action="profile" aria-label="Thông tin hồ sơ">
        <span class="avatar">${escapeHtml([...state.progress.displayName][0].toLocaleUpperCase("vi-VN"))}</span>
        <span class="profile-copy"><strong>${escapeHtml(state.progress.displayName)}</strong><small>Lớp ${escapeHtml(state.progress.grade)} · Cấp ${level.level}</small></span>
        <span class="profile-menu" aria-hidden="true">···</span>
      </button>
    </aside>`;
}

function renderTopbar() {
  const streak = getCurrentStreak();
  return `
    <header class="topbar">
      <div class="breadcrumb"><span>Không gian học tập</span>${icon("chevron", 14)}<strong>${state.screen === "tutor" ? "AI Tutor" : state.screen === "library" ? "Thư viện học tập" : state.screen === "play" ? "Thử thách" : state.screen === "result" ? "Kết quả" : state.screen === "progress" ? "Tiến độ của bạn" : state.screen === "profile" ? "Hồ sơ học tập" : state.screen === "admin" ? "Quản trị" : "Trang chủ"}</strong></div>
      <div class="topbar-actions">
        <div class="streak-pill" aria-label="Chuỗi ${streak} ngày học liên tiếp">
          <span aria-hidden="true">🔥</span><strong>${streak}</strong><span>${streak === 1 ? "ngày" : "ngày liên tiếp"}</span>
        </div>
        <button class="icon-button help-button" type="button" aria-label="Xem mẹo học tập" data-action="tip">${icon("sparkles")}</button>
      </div>
    </header>`;
}

function renderInstallPrompt() {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches
    || navigator.standalone === true;
  if (!isAndroid || isStandalone || state.installInstalled) return "";

  return `
    <aside class="install-banner" aria-labelledby="install-banner-title">
      <span class="install-banner-icon" aria-hidden="true">📲</span>
      <div class="install-banner-copy">
        <strong id="install-banner-title">Mang EduQuest theo bạn</strong>
        <span>Cài lên màn hình chính để mở nhanh như ứng dụng.</span>
        ${state.showInstallHelp
          ? `<small>Trên Chrome Android: nhấn ⋮ rồi chọn “Cài đặt ứng dụng” hoặc “Thêm vào màn hình chính”.</small>`
          : ""}
      </div>
      <button class="button button--primary install-banner-button" type="button" data-action="${state.installAvailable ? "install-app" : "install-help"}">
        ${state.installAvailable ? "Cài ứng dụng" : state.showInstallHelp ? "Ẩn hướng dẫn" : "Cách cài"}
      </button>
    </aside>`;
}

function renderIllustration() {
  return `
    <div class="hero-art" aria-hidden="true">
      <div class="art-orbit art-orbit--one"></div><div class="art-orbit art-orbit--two"></div>
      <span class="art-star art-star--one">✦</span><span class="art-star art-star--two">✳</span>
      <span class="art-mini-card art-mini-card--one">x + 3 = 9</span>
      <span class="art-mini-card art-mini-card--two">H₂O</span>
      <div class="planet planet--back"></div>
      <div class="planet planet--main"><span class="planet-ring"></span><span class="planet-face"><i></i><i></i><b></b></span></div>
      <div class="planet planet--little"></div>
      <div class="art-book"><span></span><span></span><span></span></div>
      <span class="art-doodle art-doodle--one">＋</span><span class="art-doodle art-doodle--two">÷</span>
    </div>`;
}

function renderHome() {
  const dailyGoal = state.progress.dailyGoal;
  const doneToday = Math.min(state.progress.dailyCount, dailyGoal);
  const dailyRewardClaimed = state.progress.dailyRewardDate === today;
  const level = getExperienceLevel();
  const accuracy = state.progress.completed
    ? Math.round(state.progress.correct / Math.max(state.progress.totalAnswered, 1) * 100)
    : 0;
  const selected = getSubject();
  return `
    <section class="welcome-row">
      <div>
        <p class="eyebrow"><span class="eyebrow-dot"></span> ${new Date().toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long" }).toLocaleUpperCase("vi-VN")}</p>
        <h1>Chào ${escapeHtml(state.progress.displayName)}, <span class="wave" aria-hidden="true">👋</span><br />hôm nay mình học gì nhỉ?</h1>
        <p class="welcome-copy">Mỗi thử thách nhỏ là một bước tiến lớn. Cùng bắt đầu nhé!</p>
      </div>
      <div class="welcome-badge"><span aria-hidden="true">🌱</span><span>Hành trình<br /><strong>khám phá</strong></span></div>
    </section>

    <section class="hero-card" aria-labelledby="hero-title">
      <div class="hero-copy">
        <span class="hero-kicker"><span class="hero-kicker-dot"></span> THỬ THÁCH HÔM NAY</span>
        <h2 id="hero-title">Sẵn sàng chinh phục<br />điều mới mẻ?</h2>
        <p>5 câu hỏi thú vị. Một phiên bản tự tin hơn của bạn.</p>
        <button class="button button--light" type="button" data-action="start" data-subject="${selected.id}" data-topic="${selected.topics[0].id}">
          Bắt đầu thử thách ${icon("arrow", 18)}
        </button>
        <span class="hero-meta">${icon("clock", 15)} Chỉ mất 5 phút <span class="hero-meta-separator">·</span> Không áp lực</span>
      </div>
      ${renderIllustration()}
      <span class="hero-sheen" aria-hidden="true"></span>
    </section>

    <section class="daily-progress" id="progress" aria-labelledby="daily-title">
      <div class="daily-heading">
        <div class="daily-title-wrap"><span class="daily-icon">${icon("target", 20)}</span><div><h2 id="daily-title">Mục tiêu mỗi ngày</h2><p>Học một chút, giỏi lên một chút.</p></div></div>
        <span class="daily-count">${doneToday}<span> / ${dailyGoal} bài học</span></span>
      </div>
      <div class="daily-track" role="progressbar" aria-label="Tiến độ mục tiêu hôm nay" aria-valuenow="${doneToday}" aria-valuemin="0" aria-valuemax="${dailyGoal}"><span style="width:${doneToday / dailyGoal * 100}%"></span>${Array.from({ length: dailyGoal }, (_, index) => index + 1).map((step) => `<i class="${doneToday >= step ? "is-done" : ""}" style="left:${step / dailyGoal * 100}%">${doneToday >= step ? icon("check", 12) : ""}</i>`).join("")}</div>
      <div class="daily-foot"><span>${dailyRewardClaimed ? "Tuyệt vời! Bạn đã nhận 20 XP thưởng hôm nay 🎉" : doneToday === dailyGoal ? "Mục tiêu đã xong — chơi thêm để nhận 20 XP thưởng!" : doneToday ? "Bạn đang làm rất tốt! Hoàn thành mục tiêu để nhận 20 XP." : "Bắt đầu với một thử thách thật vui để nhận 20 XP thưởng!"}</span><span class="accuracy-pill">${icon("sparkles", 14)} ${accuracy}% chính xác</span></div>
    </section>
    <section class="experience-strip" aria-label="Tiến độ kinh nghiệm">
      <span class="experience-strip-icon" aria-hidden="true">✨</span>
      <span class="experience-strip-level">CẤP ${level.level}</span>
      <div class="experience-strip-copy"><strong>${level.title}</strong><span>${state.progress.experiencePoints} XP tích lũy</span></div>
      <div class="experience-strip-track" role="progressbar" aria-label="Tiến độ lên cấp tiếp theo" aria-valuenow="${level.pointsInLevel}" aria-valuemin="0" aria-valuemax="${level.pointsPerLevel}"><span style="width:${level.pointsInLevel / level.pointsPerLevel * 100}%"></span></div>
      <span class="experience-strip-next">${level.pointsInLevel} / ${level.pointsPerLevel} XP</span>
    </section>

    <section class="learning-section" id="subjects" aria-labelledby="topics-title">
      <div class="section-heading">
        <div><p class="section-overline">CHỌN ĐƯỜNG PHIÊU LƯU</p><h2 id="topics-title">Khám phá chủ đề</h2><p class="section-subtitle">Chọn môn học, rồi chọn chủ đề để bắt đầu cuộc chơi.</p></div>
      </div>
      <div class="subject-picker" role="group" aria-label="Chọn môn học">
        ${subjects.map((subject) => `
          <button class="subject-picker-option ${state.selectedSubject === subject.id ? "is-selected" : ""}" type="button" data-action="subject-picker" data-subject="${subject.id}" data-subject-picker="${subject.id}" aria-pressed="${state.selectedSubject === subject.id}">
            ${subjectMark(subject, "subject-mark--small")}
            <span>${escapeHtml(subject.name)}</span>
            <small>${subject.topics.length} chủ đề</small>
          </button>
        `).join("")}
      </div>
      <div class="topic-grid">
        ${selected.topics.map((topic, index) => `
          <article class="topic-card topic-card--${selected.color} topic-card--variant-${index + 1}">
            <div class="topic-card-top">
              ${subjectMark(selected, "subject-mark--card")}
              <span class="topic-level">${escapeHtml(topic.level)}</span>
            </div>
            <div class="topic-illustration topic-illustration--${selected.color} topic-illustration--${index + 1}" aria-hidden="true">
              <span>${escapeHtml(topic.art?.[0] ?? (selected.id === "math" ? "x + 3" : "⚡"))}</span><i>${escapeHtml(topic.art?.[1] ?? "✿")}</i><b>${escapeHtml(topic.art?.[2] ?? "✦")}</b>
            </div>
            <h3>${escapeHtml(topic.title)}</h3><p class="topic-description">${escapeHtml(topic.description)}</p>
            <div class="topic-card-footer">
              <span>${icon("clock", 14)} ${escapeHtml(topic.duration)}</span>
              <div class="topic-actions">
                <button type="button" class="topic-mode topic-mode--quiz" data-action="start" data-mode="quiz" data-subject="${selected.id}" data-topic="${topic.id}" aria-label="Chơi quiz ${escapeHtml(topic.title)}">Quiz ${icon("arrow", 14)}</button>
                <button type="button" class="topic-mode topic-mode--match" data-action="start" data-mode="match" data-subject="${selected.id}" data-topic="${topic.id}" aria-label="Chơi ghép thẻ ${escapeHtml(topic.title)}">Ghép thẻ ${icon("arrow", 14)}</button>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="encouragement" aria-label="Lời nhắn">
      <span class="encouragement-art" aria-hidden="true">✿</span>
      <p>“Bạn không cần phải giỏi ngay từ đầu,<br /><strong>chỉ cần bắt đầu để trở nên giỏi hơn.”</strong></p>
      <span class="encouragement-credit">— Một lời nhắc nhỏ dành cho bạn</span>
    </section>`;
}

function renderProgress() {
  const history = state.progress.history;
  const level = getExperienceLevel();
  const week = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - (6 - index));
    const key = date.toLocaleDateString("sv-SE");
    return {
      key,
      label: date.toLocaleDateString("vi-VN", { weekday: "short" }).replace(".", ""),
      count: history.filter((entry) => entry.date === key).length,
      isToday: key === today,
    };
  });
  const peak = Math.max(...week.map((day) => day.count), 1);
  const perfectRuns = history.filter((entry) => entry.correct === entry.total).length;
  const studiedSubjects = new Set(history.map((entry) => entry.subjectId)).size;
  const accuracy = state.progress.completed
    ? Math.round(state.progress.correct / Math.max(state.progress.totalAnswered, 1) * 100)
    : 0;
  const streak = getCurrentStreak();
  const badges = [
    { icon: "🌱", title: "Bước đầu tiên", detail: "Hoàn thành thử thách đầu tiên", unlocked: state.progress.completed >= 1 },
    { icon: "🎯", title: "Tập trung cao độ", detail: "Đạt trọn điểm một lần", unlocked: perfectRuns >= 1 },
    { icon: "🧭", title: "Nhà khám phá", detail: "Học thử cả hai môn", unlocked: studiedSubjects >= 2 },
    { icon: "🔥", title: "Giữ lửa học tập", detail: "Học 3 ngày liên tiếp", unlocked: state.progress.bestStreak >= 3 },
    { icon: "✨", title: "Tích lũy tri thức", detail: "Thu thập 250 XP", unlocked: state.progress.experiencePoints >= 250 },
  ];

  return `
    <section class="progress-page">
      <div class="progress-page-heading">
        <div><p class="section-overline">HÀNH TRÌNH CỦA BẠN</p><h1>Mỗi ngày một tiến bộ ✨</h1><p>Xem lại những gì bạn đã khám phá và tiếp tục tiến lên nhé.</p></div>
        <button class="button button--primary" type="button" data-action="explore">${icon("compass", 16)} Khám phá chủ đề</button>
      </div>
      <div class="progress-stats">
        <article class="progress-stat-card"><span class="progress-stat-icon progress-stat-icon--blue">${icon("chart", 18)}</span><span class="progress-stat-label">Đã hoàn thành</span><strong>${state.progress.completed}</strong><small>thử thách</small></article>
        <article class="progress-stat-card"><span class="progress-stat-icon progress-stat-icon--green">${icon("check", 18)}</span><span class="progress-stat-label">Độ chính xác</span><strong>${accuracy}%</strong><small>${state.progress.correct} câu trả lời đúng</small></article>
        <article class="progress-stat-card"><span class="progress-stat-icon progress-stat-icon--orange">${icon("crown", 18)}</span><span class="progress-stat-label">Điểm cao nhất</span><strong>${state.progress.bestScore}%</strong><small>thành tích cá nhân</small></article>
        <article class="progress-stat-card"><span class="progress-stat-icon progress-stat-icon--purple">${icon("bolt", 18)}</span><span class="progress-stat-label">Chuỗi ngày học</span><strong>${streak}</strong><small>${state.progress.bestStreak} ngày tốt nhất</small></article>
        <article class="progress-stat-card"><span class="progress-stat-icon progress-stat-icon--blue">${icon("sparkles", 18)}</span><span class="progress-stat-label">Điểm kinh nghiệm</span><strong>${state.progress.experiencePoints}</strong><small>XP · cấp ${level.level}</small></article>
      </div>
      <section class="level-panel" aria-labelledby="level-title">
        <div class="level-emblem" aria-hidden="true">✨</div>
        <div class="level-copy"><span class="section-overline">CẤP ${level.level} · ${level.title.toLocaleUpperCase("vi-VN")}</span><h2 id="level-title">Bạn đang trên đà tiến bộ!</h2><p>Mỗi câu trả lời đúng mang bạn đến gần hơn với cấp độ tiếp theo.</p></div>
        <div class="level-progress-wrap"><div class="level-progress-label"><span>Tiến độ cấp ${level.level + 1}</span><strong>${level.pointsInLevel} / ${level.pointsPerLevel} XP</strong></div><div class="level-progress-track" role="progressbar" aria-label="Tiến độ lên cấp tiếp theo" aria-valuenow="${level.pointsInLevel}" aria-valuemin="0" aria-valuemax="${level.pointsPerLevel}"><span style="width:${level.pointsInLevel / level.pointsPerLevel * 100}%"></span></div><small>Còn ${level.pointsPerLevel - level.pointsInLevel} XP nữa để lên cấp</small></div>
      </section>
      <div class="progress-main-grid">
        <section class="progress-panel activity-panel" aria-labelledby="activity-title">
          <div class="progress-panel-heading"><div><h2 id="activity-title">Hoạt động tuần này</h2><p>Mỗi cột là số thử thách bạn đã hoàn thành.</p></div><span class="activity-total">${week.reduce((total, day) => total + day.count, 0)}<small>lượt</small></span></div>
          <div class="activity-chart" role="img" aria-label="Thử thách hoàn thành trong 7 ngày gần nhất: ${week.map((day) => `${day.label} ${day.count}`).join(", ")}">
            ${week.map((day) => `<div class="activity-day" aria-label="${day.label}: ${day.count} thử thách${day.isToday ? ", hôm nay" : ""}"><span class="activity-bar-value">${day.count || ""}</span><div class="activity-bar-track"><span class="${day.isToday ? "is-today" : ""}" style="height:${day.count ? Math.max(day.count / peak * 100, 12) : 4}%"></span></div><span class="activity-day-label ${day.isToday ? "is-today" : ""}">${day.label}</span></div>`).join("")}
          </div>
        </section>
        <section class="progress-panel subject-panel" aria-labelledby="subject-progress-title">
          <div class="progress-panel-heading"><div><h2 id="subject-progress-title">Môn học đã khám phá</h2><p>Những chủ đề bạn đã thử sức.</p></div></div>
          <div class="subject-progress-list">
            ${subjects.map((subject) => {
              const runs = history.filter((entry) => entry.subjectId === subject.id);
              const topics = new Set(runs.map((entry) => entry.topicId)).size;
              const percentage = Math.round(topics / subject.topics.length * 100);
              return `<div class="subject-progress-row">${subjectMark(subject, "subject-mark--small")}<div class="subject-progress-copy"><div><strong>${escapeHtml(subject.name)}</strong><span>${topics} / ${subject.topics.length} chủ đề</span></div><div class="subject-progress-track"><span class="subject-progress-fill subject-progress-fill--${subject.color}" style="width:${percentage}%"></span></div></div></div>`;
            }).join("")}
          </div>
        </section>
      </div>
      <div class="progress-lower-grid">
        <section class="progress-panel history-panel" aria-labelledby="history-title">
          <div class="progress-panel-heading"><div><h2 id="history-title">Thử thách gần đây</h2><p>Mỗi lần chơi là một bước trên hành trình.</p></div></div>
          ${history.length
            ? `<div class="history-list">${history.slice(0, 6).map((entry, index) => {
              const subject = getSubject(entry.subjectId);
              const topic = subject?.topics.find((item) => item.id === entry.topicId);
              const score = Math.round(entry.correct / entry.total * 100);
              const date = new Date(`${entry.date}T12:00:00`).toLocaleDateString("vi-VN", { day: "numeric", month: "short" });
              const reviewId = `history-${index}`;
              const open = state.expandedReview === reviewId;
              const mistakes = Array.isArray(entry.mistakes) ? entry.mistakes : [];
              return `<article class="history-entry"><div class="history-row">${subject ? subjectMark(subject, "subject-mark--small") : ""}<div class="history-copy"><strong>${escapeHtml(topic?.title ?? "Chủ đề đã lưu trữ")}</strong><span>${escapeHtml(subject?.name ?? "Môn học đã lưu trữ")} <i>·</i> ${entry.mode === "match" ? "Ghép thẻ" : entry.mode === "review" ? "Ôn tập" : "Quiz"} <i>·</i> ${date}</span></div><span class="history-score ${score === 100 ? "is-perfect" : ""}">${entry.correct}/${entry.total}<small>${score}%</small></span>${mistakes.length ? `<button class="history-review-toggle ${open ? "is-open" : ""}" type="button" data-action="toggle-review" data-review-id="${reviewId}" aria-expanded="${open}" aria-label="${open ? "Ẩn" : "Ôn lại"} ${mistakes.length} câu cần luyện">Xem</button><button class="history-practice-button" type="button" data-action="practice-history" data-history-index="${index}" aria-label="Luyện lại ${mistakes.length} câu sai của ${escapeHtml(topic?.title ?? "chủ đề đã lưu trữ")}">${icon("arrow", 14)}</button>` : ""}</div>${open && mistakes.length ? `<div class="history-review-list">${mistakes.map((mistake) => `<article class="review-item review-item--compact"><div class="review-question"><span>${escapeHtml(mistake.prompt)}</span><div class="review-answers"><span class="review-your-answer"><small>BẠN ĐÃ CHỌN</small><strong>${escapeHtml(mistake.chosen)}</strong></span><span class="review-correct-answer"><small>ĐÁP ÁN ĐÚNG</small><strong>${escapeHtml(mistake.correct)}</strong></span></div><p>${icon("sparkles", 13)} ${escapeHtml(mistake.explanation)}</p></div></article>`).join("")}</div>` : ""}</article>`;
            }).join("")}</div>`
            : `<div class="progress-empty"><span aria-hidden="true">🗺️</span><strong>Cuộc phiêu lưu bắt đầu từ đây!</strong><p>Hoàn thành một thử thách để xem lại tiến độ của bạn nhé.</p><button class="button button--outline" type="button" data-action="explore">Chọn chủ đề đầu tiên ${icon("arrow", 15)}</button></div>`}
        </section>
        <section class="progress-panel badges-panel" aria-labelledby="badges-title">
          <div class="progress-panel-heading"><div><h2 id="badges-title">Huy hiệu hành trình</h2><p>Kỷ niệm những cột mốc đáng tự hào.</p></div></div>
          <div class="badge-grid">${badges.map((badge) => `<div class="journey-badge ${badge.unlocked ? "is-unlocked" : "is-locked"}"><span class="journey-badge-icon" aria-hidden="true">${badge.icon}</span><span><strong>${badge.title}</strong><small>${badge.detail}</small></span>${badge.unlocked ? `<span class="badge-check">${icon("check", 13)}</span>` : ""}</div>`).join("")}</div>
        </section>
      </div>
    </section>`;
}

function renderProfile() {
  const textSizeIndex = TEXT_SIZE_LEVELS.indexOf(state.textSize);
  return `
    <section class="profile-page">
      <div class="profile-page-heading"><p class="section-overline">GÓC NHỎ CỦA BẠN</p><h1>Học theo cách của mình ✨</h1><p>Chỉnh vài lựa chọn để EduQuest đồng hành đúng với bạn hơn.</p></div>
      <div class="profile-layout">
        <div class="profile-preview-card">
          <span class="profile-preview-avatar">${escapeHtml([...state.progress.displayName][0].toLocaleUpperCase("vi-VN"))}</span>
          <span class="profile-preview-kicker">NHÀ THÁM HIỂM EDUQUEST</span>
          <h2>${escapeHtml(state.progress.displayName)}</h2>
          <p>Lớp ${escapeHtml(state.progress.grade)} <span>·</span> ${state.progress.dailyGoal} bài học mỗi ngày</p>
          <div class="profile-preview-stat">${icon("sparkles", 15)} Sẵn sàng cho thử thách tiếp theo!</div>
          <div class="profile-level"><span>✨</span><span><strong>Cấp ${getExperienceLevel().level} · ${getExperienceLevel().title}</strong><small>${state.progress.experiencePoints} XP tích lũy</small></span></div>
          <span class="profile-preview-art" aria-hidden="true">✿</span>
        </div>
        <form class="profile-form" id="profile-form">
          <div class="profile-form-heading"><h2>Thông tin học tập</h2><p>Các thay đổi chỉ được lưu trên thiết bị này.</p></div>
          <label class="profile-field" for="display-name"><span>Tên bạn muốn hiển thị</span><input id="display-name" name="displayName" type="text" value="${escapeHtml(state.progress.displayName)}" minlength="2" maxlength="32" autocomplete="nickname" required aria-describedby="display-name-hint" /><small id="display-name-hint">Tên này sẽ xuất hiện trong lời chào và hồ sơ của bạn.</small></label>
          <label class="profile-field" for="grade"><span>Bạn đang học lớp</span><select id="grade" name="grade">${["6", "7", "8", "9", "10", "11", "12"].map((grade) => `<option value="${grade}" ${state.progress.grade === grade ? "selected" : ""}>Lớp ${grade}</option>`).join("")}</select><small>Để chúng mình điều chỉnh nội dung phù hợp hơn trong tương lai.</small></label>
          <section class="text-size-setting" aria-labelledby="text-size-title">
            <div><h3 id="text-size-title">Cỡ chữ nội dung</h3><p>Điều chỉnh để đọc thoải mái hơn trên thiết bị này.</p></div>
            <div class="text-size-controls" role="group" aria-label="Điều chỉnh cỡ chữ">
              <button class="button button--outline text-size-button" type="button" data-action="text-size" data-direction="-1" aria-label="Giảm cỡ chữ" ${textSizeIndex === 0 ? "disabled" : ""}>A−</button>
              <output class="text-size-value" aria-live="polite">${Math.round(state.textSize * 100)}%</output>
              <button class="button button--outline text-size-button" type="button" data-action="text-size" data-direction="1" aria-label="Tăng cỡ chữ" ${textSizeIndex === TEXT_SIZE_LEVELS.length - 1 ? "disabled" : ""}>A+</button>
            </div>
          </section>
          <fieldset class="goal-field"><legend>Mục tiêu thử thách mỗi ngày</legend><p>Chọn nhịp học vừa sức với bạn.</p><div class="goal-options">${[1, 2, 3, 4, 5].map((goal) => `<label class="goal-option ${state.progress.dailyGoal === goal ? "is-selected" : ""}"><input type="radio" name="dailyGoal" value="${goal}" ${state.progress.dailyGoal === goal ? "checked" : ""} /><span class="goal-number">${goal}</span><span class="goal-word">bài${goal === 1 ? "" : ""}</span></label>`).join("")}</div></fieldset>
          <div class="profile-form-actions"><button class="button button--primary" type="submit">${icon("check", 16)} Lưu lựa chọn</button><button class="button button--outline" type="button" data-action="home">Để sau</button></div>
        </form>
      </div>
      <p class="profile-privacy">${icon("target", 15)} Tiến độ và tùy chọn học tập đang được lưu cục bộ trong trình duyệt của bạn.</p>
    </section>`;
}

function renderPlay() {
  if (state.mode === "match") return renderMatchPlay();
  const subject = getSubject();
  const topic = getTopic();
  const question = state.mode === "review"
    ? state.reviewQuestions[state.questionIndex]
    : state.sessionQuestions[state.questionIndex];
  const answered = state.answers[state.questionIndex] !== undefined;
  const selectedAnswer = state.answers[state.questionIndex];
  const correct = selectedAnswer === question.correct;
  const questionTotal = state.mode === "review" ? state.reviewQuestions.length : state.sessionQuestions.length;
  const progressPercent = state.questionIndex / questionTotal * 100;

  return `
    <section class="game-screen">
      <button class="back-link" type="button" data-action="home">${icon("chevron", 16)} Rời thử thách</button>
      <div class="game-shell">
        <div class="game-header">
          <div class="game-subject">${subjectMark(subject, "subject-mark--small")}<span>${escapeHtml(subject.name)}<strong>${state.mode === "review" ? `Ôn tập · ${escapeHtml(topic.title)}` : escapeHtml(topic.title)}</strong></span></div>
          <span class="game-counter">${state.mode === "review" ? "CÂU ÔN" : "CÂU HỎI"} <strong>${state.questionIndex + 1}</strong> <span>/ ${questionTotal}</span></span>
        </div>
        <div class="question-progress" role="progressbar" aria-label="Tiến độ thử thách" aria-valuenow="${state.questionIndex + (answered ? 1 : 0)}" aria-valuemin="0" aria-valuemax="${questionTotal}"><span style="width:${answered ? (state.questionIndex + 1) / questionTotal * 100 : progressPercent}%"></span></div>
        <div class="question-content">
          <span class="question-tag">${icon("sparkles", 15)} ${state.mode === "review" ? "LUYỆN TẬP ĐỂ NHỚ LÂU!" : "CÙNG SUY NGHĨ NÀO!"}</span>
          <h1 tabindex="-1">${escapeHtml(question.prompt)}</h1>
          <p class="question-hint">${state.mode === "review" ? "Cùng thử lại câu này nhé — lần này bạn đã hiểu hơn rồi!" : "Chọn một đáp án bạn nghĩ là đúng nhé."}</p>
          <div class="answer-grid">
            ${question.answers.map((answer, index) => {
              let className = "answer-option";
              if (answered && index === question.correct) className += " is-correct";
              else if (answered && index === selectedAnswer) className += " is-wrong";
              else if (answered) className += " is-muted";
              return `<button class="${className}" type="button" data-action="answer" data-answer="${index}" ${answered || state.answerBusy ? "disabled" : ""} aria-pressed="${selectedAnswer === index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(answer)}</span>${answered && index === question.correct ? `<span class="answer-check">${icon("check", 18)}</span>` : ""}${answered && index === selectedAnswer && !correct ? `<span class="answer-cross">×</span>` : ""}</button>`;
            }).join("")}
          </div>
          <div class="feedback ${answered ? correct ? "feedback--correct" : "feedback--wrong" : ""}" aria-live="polite" aria-atomic="true">
            ${answered ? `<span class="feedback-icon">${correct ? "✨" : "💡"}</span><div><strong>${correct ? "Chính xác! Bạn giỏi quá!" : "Chưa đúng lần này, không sao nhé!"}</strong><p>${escapeHtml(question.explanation)}</p></div>` : `<span class="feedback-placeholder">${icon("sparkles", 17)}</span><p>Điều quan trọng là mình cùng thử sức!</p>`}
          </div>
          <div class="question-actions">${answered ? `<button class="button button--primary" type="button" data-action="next" ${state.finishBusy ? "disabled" : ""}>${state.finishBusy ? "Đang lưu…" : state.questionIndex === questionTotal - 1 ? "Xem kết quả" : "Câu tiếp theo"} ${icon("arrow", 17)}</button>` : `<span class="question-footnote">${icon("target", 15)} Mỗi câu đúng sẽ giúp bạn tiến gần hơn!</span>`}</div>
        </div>
      </div>
      <p class="game-reassurance">${icon("sparkles", 15)} Không có giới hạn thời gian — cứ thoải mái suy nghĩ nhé.</p>
    </section>`;
}

function renderMatchPlay() {
  const subject = getSubject();
  const topic = getTopic();
  const round = state.matchRounds[state.questionIndex];
  const chosen = state.answers[state.questionIndex];
  const answered = chosen !== undefined;
  const correct = answered && chosen === round.correct;
  const questionTotal = state.mode === "review" ? state.reviewQuestions.length : state.matchRounds.length;
  const percent = (state.questionIndex + (answered ? 1 : 0)) / questionTotal * 100;

  return `
    <section class="game-screen">
      <button class="back-link" type="button" data-action="home">${icon("chevron", 16)} Rời thử thách</button>
      <div class="game-shell">
        <div class="game-header">
          <div class="game-subject">${subjectMark(subject, "subject-mark--small")}<span>${escapeHtml(subject.name)}<strong>${state.mode === "review" ? `Ôn tập · ${escapeHtml(topic.title)}` : `${escapeHtml(topic.title)} · Ghép thẻ`}</strong></span></div>
          <span class="game-counter">${state.mode === "review" ? "CÂU ÔN" : "LƯỢT"} <strong>${state.questionIndex + 1}</strong> <span>/ ${state.mode === "review" ? state.reviewQuestions.length : state.matchRounds.length}</span></span>
        </div>
        <div class="question-progress" role="progressbar" aria-label="Tiến độ ghép thẻ" aria-valuenow="${state.questionIndex + (answered ? 1 : 0)}" aria-valuemin="0" aria-valuemax="${questionTotal}"><span style="width:${percent}%"></span></div>
        <div class="question-content match-content">
          <span class="question-tag">${icon("sparkles", 15)} ${state.mode === "review" ? "LUYỆN TẬP ĐỂ NHỚ LÂU!" : "KẾT NỐI KIẾN THỨC!"}</span>
          <h1 tabindex="-1">Thẻ nào giải thích đúng?</h1>
          <p class="question-hint">${state.mode === "review" ? "Cùng thử ghép lại thẻ này nhé — lần này bạn đã hiểu hơn rồi!" : "Kéo thẻ bên dưới vào đáp án, hoặc chọn thẻ rồi chạm vào đáp án phù hợp."}</p>
          <button class="match-term ${state.matchSourceSelected ? "is-selected" : ""}" type="button" draggable="${!answered}" data-action="select-match" aria-pressed="${state.matchSourceSelected}" ${answered ? "disabled" : ""}>
            <span class="match-term-icon">${icon("book", 19)}</span>
            <span><small>GHÉP VỚI Ý NGHĨA</small><strong>${escapeHtml(round.term)}</strong></span>
            <span class="match-drag-hint" aria-hidden="true">⠿</span>
          </button>
          <div class="match-options" role="group" aria-label="Các thẻ ý nghĩa">
            ${round.choices.map((choice, index) => {
              let className = "match-option";
              if (answered && index === round.correct) className += " is-correct";
              else if (answered && index === chosen) className += " is-wrong";
              else if (answered) className += " is-muted";
              return `<button class="${className}" type="button" data-action="match-answer" data-answer="${index}" ${answered || state.answerBusy ? "disabled" : ""}><span class="match-option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(choice.meaning)}</span>${answered && index === round.correct ? `<span class="answer-check">${icon("check", 18)}</span>` : ""}${answered && index === chosen && !correct ? `<span class="answer-cross">×</span>` : ""}</button>`;
            }).join("")}
          </div>
          <div class="match-live" aria-live="polite" aria-atomic="true">${state.matchMessage || (state.matchSourceSelected ? "Đã chọn thẻ — hãy ghép với một ý nghĩa nhé." : "Chọn thẻ kiến thức trước để bắt đầu.")}</div>
          <div class="feedback ${answered ? correct ? "feedback--correct" : "feedback--wrong" : ""}" aria-live="polite" aria-atomic="true">
            ${answered ? `<span class="feedback-icon">${correct ? "✨" : "💡"}</span><div><strong>${correct ? "Ghép đúng rồi!" : "Chưa khớp lần này, cùng ghi nhớ nhé!"}</strong><p>${escapeHtml(round.explanation)}</p></div>` : `<span class="feedback-placeholder">${icon("sparkles", 17)}</span><p>Mỗi lần kết nối là một kiến thức bạn nhớ lâu hơn!</p>`}
          </div>
          <div class="question-actions">${answered ? `<button class="button button--primary" type="button" data-action="next" ${state.finishBusy ? "disabled" : ""}>${state.finishBusy ? "Đang lưu…" : state.questionIndex === state.matchRounds.length - 1 ? "Xem kết quả" : "Thẻ tiếp theo"} ${icon("arrow", 17)}</button>` : `<span class="question-footnote">${icon("target", 15)} Ghép đúng cả 5 thẻ để hoàn thành thử thách!</span>`}</div>
        </div>
      </div>
      <p class="game-reassurance">${icon("sparkles", 15)} Có thể kéo thả, hoặc dùng bàn phím/chạm để ghép thẻ.</p>
    </section>`;
}

function renderResult() {
  const { correct, total } = state.result;
  const percent = Math.round(correct / total * 100);
  const message = correct === total
    ? { title: "Xuất sắc tuyệt đối!", detail: "Bạn đã chinh phục mọi câu hỏi. Đỉnh thật đấy!" }
    : correct >= 3
      ? { title: "Bạn làm tốt lắm!", detail: "Mỗi câu trả lời là một điều mới bạn vừa khám phá." }
      : { title: "Bạn đã dũng cảm thử sức!", detail: "Luyện tập thêm một chút, bạn sẽ thấy mình tiến bộ." };
  const subject = getSubject();
  const topic = getTopic();
  const mistakes = state.result.mistakes ?? [];
  const replayMode = state.mode === "review" ? "quiz" : state.mode;
  const level = getExperienceLevel();
  return `
    <section class="result-screen">
      <div class="result-confetti" aria-hidden="true"><i>✦</i><i>✳</i><i>✧</i><i>·</i><i>✦</i></div>
      <div class="result-card">
        <span class="result-award" aria-hidden="true">${correct >= 3 ? "🏆" : "🌟"}</span>
        <span class="result-kicker">${state.mode === "match" ? "THỬ THÁCH GHÉP THẺ HOÀN THÀNH" : "THỬ THÁCH HOÀN THÀNH"}</span>
        <h1>${message.title}</h1>
        <p class="result-description">${message.detail}</p>
        ${state.result.leveledUp ? `<div class="level-up-announcement" role="status"><span aria-hidden="true">🎉</span><span><strong>Lên cấp ${level.level}!</strong><small>Từ cấp ${state.result.levelBefore}, bạn đã trở thành ${level.title}.</small></span></div>` : ""}
        <div class="score-ring" style="--score:${percent}%" role="img" aria-label="Bạn trả lời đúng ${correct} trên ${total} câu">
          <div class="score-ring-inner"><strong>${correct}<span>/${total}</span></strong><small>câu đúng</small></div>
        </div>
        <div class="result-stats">
          <div><span class="result-stat-icon result-stat-icon--green">${icon("check", 16)}</span><span>Đúng <strong>${correct} câu</strong></span></div>
          <div><span class="result-stat-icon result-stat-icon--purple">${icon("sparkles", 16)}</span><span>Chính xác <strong>${percent}%</strong></span></div>
          <div><span class="result-stat-icon result-stat-icon--orange">${icon("bolt", 16)}</span><span>Điểm tốt nhất <strong>${Math.max(state.progress.bestScore, percent)}%</strong></span></div>
        </div>
        <div class="result-xp" role="status"><span class="result-xp-icon" aria-hidden="true">✨</span><span><strong>+${state.result.experienceEarned} XP</strong><small>${state.result.dailyRewardEarned ? "Đã gồm 20 XP hoàn thành mục tiêu hôm nay" : state.mode === "review" ? "Điểm thưởng ôn tập" : "Điểm thưởng thử thách"}</small></span><span class="result-xp-level">Cấp ${level.level} · ${level.title}</span></div>
        <p class="result-topic">${subjectMark(subject, "subject-mark--tiny")} ${escapeHtml(topic.title)} <span>·</span> ${escapeHtml(subject.name)}</p>
        <div class="result-actions">
          <button class="button button--primary" type="button" data-action="start" data-mode="${replayMode}" data-subject="${subject.id}" data-topic="${topic.id}">Chơi lại ${icon("arrow", 17)}</button>
          <button class="button button--outline" type="button" data-action="home">Chọn chủ đề khác</button>
        </div>
        ${mistakes.length ? `<div class="result-retry-action"><button class="button button--outline" type="button" data-action="review-mistakes" aria-label="Luyện lại ${mistakes.length} câu trả lời chưa đúng">${icon("target", 16)} Luyện lại ${mistakes.length} câu sai</button></div><section class="result-review" aria-labelledby="result-review-title">
          <button class="result-review-toggle ${state.expandedReview === "result" ? "is-open" : ""}" type="button" data-action="toggle-review" data-review-id="result" aria-expanded="${state.expandedReview === "result"}" aria-controls="result-review-list">
            <span><strong>${icon("book", 16)} Cùng xem lại ${mistakes.length} câu nhé</strong><small>Biết vì sao đúng giúp bạn nhớ lâu hơn.</small></span><span class="review-toggle-chevron">${icon("chevron", 17)}</span>
          </button>
          ${state.expandedReview === "result" ? `<div class="result-review-list" id="result-review-list">${mistakes.map((mistake, index) => `<article class="review-item"><div class="review-item-number">0${index + 1}</div><div class="review-question"><strong>${escapeHtml(mistake.prompt)}</strong><div class="review-answers"><span class="review-your-answer"><small>BẠN ĐÃ CHỌN</small><strong>${escapeHtml(mistake.chosen)}</strong></span><span class="review-correct-answer"><small>ĐÁP ÁN ĐÚNG</small><strong>${escapeHtml(mistake.correct)}</strong></span></div><p>${icon("sparkles", 14)} ${escapeHtml(mistake.explanation)}</p></div></article>`).join("")}</div>` : ""}
        </section>` : ""}
      </div>
      <p class="result-footer">${icon("sparkles", 15)} Tiến độ đã được lưu — bạn đang đi đúng hướng!</p>
    </section>`;
}

function render() {
  applyTextSize(document.documentElement, state.textSize);
  if (state.booting) {
    app.innerHTML = `<main class="auth-screen" aria-live="polite"><div class="auth-card"><div class="brand-mark"><span>e</span><span>q</span></div><p>Đang kết nối không gian học tập…</p></div></main>`;
    return;
  }
  if (state.screen === "login") {
    app.innerHTML = renderLogin();
    return;
  }
  if (state.screen === "server-error") {
    app.innerHTML = `<main class="auth-screen"><section class="auth-card"><div class="brand-mark"><span>e</span><span>q</span></div><p class="section-overline">KHÔNG KẾT NỐI ĐƯỢC</p><h1>EduQuest chưa thể tải dữ liệu</h1><p>${escapeHtml(state.authError || "Hãy thử tải lại trang sau.")}</p><button class="button button--primary" type="button" data-action="retry-connection">Thử kết nối lại</button></section></main>`;
    return;
  }
  const screen = state.screen === "tutor"
    ? renderTutor({ subjects, tutor: state.tutor, grade: state.currentUser?.grade ?? state.progress.grade, available: apiMode && !!state.currentUser, showContext: state.tutorShowContext })
    : state.screen === "library"
    ? renderLibrary({
      subjects,
      grade: state.libraryGrade || state.progress.grade,
      subjectId: state.librarySubjectId,
      query: state.libraryQuery,
      lessonId: state.libraryLessonId,
      lessons: applyLibraryOverrides(libraryLessons, libraryOverrides),
    })
    : state.screen === "play"
    ? renderPlay()
    : state.screen === "result"
      ? renderResult()
      : state.screen === "progress"
        ? renderProgress()
        : state.screen === "profile"
          ? renderProfile()
          : state.screen === "admin"
            ? renderAdmin({
              subjects,
              tutorShowContext: state.tutorShowContext,
              progress: state.progress,
              tab: state.adminTab,
              selectedSubjectId: state.adminSubjectId,
              selectedTopicId: state.adminTopicId,
              creatingTopic: state.adminCreatingTopic,
              notice: state.adminNotice,
              hasContentEdits: hasManagedEdits,
              apiMode,
              overview: state.adminOverview,
              classes: state.adminClasses,
              learners: state.adminLearners,
              administrators: state.adminAdministrators,
              learnerHistory: state.adminLearnerHistory,
              selectedLearnerId: state.adminSelectedLearner,
              selectedClassId: state.selectedAdminClassId,
              libraryPanel: state.adminTab === "library"
                ? renderAdminLibrary({
                  subjects,
                  baseLessons: libraryLessons,
                  overrides: libraryOverrides,
                  filters: state.adminLibraryFilters,
                  selectedLessonId: state.adminLibraryLessonId,
                  creating: state.adminLibraryCreating,
                })
                : "",
            })
          : renderHome();
  app.innerHTML = `<div class="app-shell">${renderSidebar()}<main class="main-area" id="main-content" tabindex="-1"><div class="main-inner">${renderTopbar()}${renderInstallPrompt()}${screen}  <footer class="site-footer"><span>© ${new Date().getFullYear()} EduQuest</span><span>Học vui, lớn khôn mỗi ngày <span aria-hidden="true">✿</span></span></footer></div></main></div>${state.notice ? `<div class="toast" role="status">${icon("sparkles", 17)}${state.notice}</div>` : ""}`;
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}

function createMatchRounds(topicId) {
  const topic = subjects.flatMap((subject) => subject.topics).find((item) => item.id === topicId);
  const starterTopic = starterSubjects.flatMap((subject) => subject.topics).find((item) => item.id === topicId);
  const hasUnchangedStarterQuestions = starterTopic
    && JSON.stringify(starterTopic.questions) === JSON.stringify(topic.questions);
  const pairs = hasUnchangedStarterQuestions && matchSets[topicId]
    ? matchSets[topicId]
    : topic.questions.map((question) => ({
      term: question.prompt,
      meaning: question.answers[question.correct],
      explanation: question.explanation,
    }));
  if (!pairs || pairs.length < 4) throw new Error(`Chủ đề "${topicId}" cần ít nhất 4 cặp để tạo thử thách ghép thẻ.`);
  return pairs.map((pair) => {
    const distractors = shuffle(pairs.filter((candidate) => candidate !== pair)).slice(0, 3);
    const choices = shuffle([pair, ...distractors]);
    return {
      term: pair.term,
      explanation: pair.explanation,
      choices,
      correct: choices.indexOf(pair),
    };
  });
}

function createQuizQuestions(topicId) {
  const topic = subjects.flatMap((subject) => subject.topics).find((item) => item.id === topicId);
  return shuffle(topic.questions).map((question) => {
    const answers = shuffle(question.answers.map((text, index) => ({ text, index })));
    return {
      prompt: question.prompt,
      answers: answers.map((answer) => answer.text),
      correct: answers.findIndex((answer) => answer.index === question.correct),
      explanation: question.explanation,
    };
  });
}

function storeLocalLibraryOverrides(next) {
  try {
    localStorage.setItem(LIBRARY_OVERRIDES_KEY, JSON.stringify(next));
  } catch (storageError) {
    console.error("Không thể lưu thư viện trên thiết bị này.", storageError);
    return "Không thể lưu thư viện. Hãy kiểm tra dung lượng lưu trữ của trình duyệt.";
  }
  libraryOverrides = next;
  return "";
}

// lesson === null hides a starter lesson; undefined removes the stored change.
async function persistLibraryLesson(id, lesson) {
  const next = { ...libraryOverrides };
  if (lesson === undefined) delete next[id];
  else next[id] = lesson;
  const error = validateLibraryOverrides(next);
  if (error) return error;
  if (!apiMode) return storeLocalLibraryOverrides(next);
  try {
    await apiRequest(`/admin/library/lessons/${encodeURIComponent(id)}`, lesson === undefined
      ? { method: "DELETE", csrf: true }
      : { method: "PUT", csrf: true, body: { lesson } });
    libraryOverrides = next;
    return "";
  } catch (saveError) {
    return saveError.message;
  }
}

async function replaceLibraryOverrides(next) {
  const error = validateLibraryOverrides(next);
  if (error) return error;
  if (!apiMode) return storeLocalLibraryOverrides(next);
  try {
    await apiRequest("/admin/library", {
      method: "PUT",
      csrf: true,
      body: { lessons: Object.entries(next).map(([id, lesson]) => ({ id, lesson })) },
    });
    libraryOverrides = next;
    return "";
  } catch (saveError) {
    return saveError.message;
  }
}

async function persistAdminCurriculum() {
  const error = validateCurriculum(subjects);
  if (error) return error;
  if (apiMode) {
    try {
      await apiRequest("/admin/curriculum", {
        method: "PUT",
        csrf: true,
        body: { subjects },
      });
      hasManagedEdits = true;
      return "";
    } catch (saveError) {
      return saveError.message;
    }
  }
  try {
    localStorage.setItem(ADMIN_CONTENT_KEY, JSON.stringify({
      subjects,
      customMatchTopicIds: [...customMatchTopicIds],
    }));
  } catch (storageError) {
    console.error("Không thể lưu nội dung quản trị trên thiết bị này.", storageError);
    return "Không thể lưu nội dung. Hãy kiểm tra dung lượng lưu trữ của trình duyệt.";
  }
  hasManagedEdits = true;
  return "";
}

function downloadFile(name, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function validBackupProgress(progress, curriculum) {
  const availableTopics = new Set(curriculum.flatMap((subject) => subject.topics.map((topic) => `${subject.id}:${topic.id}`)));
  const allowedGrades = ["6", "7", "8", "9", "10", "11", "12"];
  const isNonnegativeInteger = (value) => Number.isSafeInteger(value) && value >= 0;
  return progress
    && typeof progress.displayName === "string"
    && progress.displayName.trim().length >= 2
    && progress.displayName.length <= 32
    && allowedGrades.includes(String(progress.grade))
    && Number.isInteger(progress.dailyGoal) && progress.dailyGoal >= 1 && progress.dailyGoal <= 5
    && isNonnegativeInteger(progress.completed)
    && isNonnegativeInteger(progress.correct)
    && isNonnegativeInteger(progress.totalAnswered)
    && progress.correct <= progress.totalAnswered
    && isNonnegativeInteger(progress.experiencePoints)
    && Number.isFinite(progress.bestScore) && progress.bestScore >= 0 && progress.bestScore <= 100
    && isNonnegativeInteger(progress.streak)
    && isNonnegativeInteger(progress.bestStreak)
    && isNonnegativeInteger(progress.dailyCount)
    && Array.isArray(progress.history) && progress.history.length <= 100
    && progress.history.every((entry) =>
      entry
      && availableTopics.has(`${entry.subjectId}:${entry.topicId}`)
      && ["quiz", "match", "review"].includes(entry.mode)
      && Number.isInteger(entry.correct) && Number.isInteger(entry.total)
      && entry.total > 0 && entry.total <= 100 && entry.correct >= 0 && entry.correct <= entry.total
      && /^\d{4}-\d{2}-\d{2}$/.test(entry.date)
      && isNonnegativeInteger(entry.experiencePoints ?? 0),
    );
}

async function startGame(subjectId, topicId, mode = "quiz") {
  const subject = subjects.find((item) => item.id === subjectId);
  if (!subject?.topics.some((item) => item.id === topicId)) {
    showNotice("Chủ đề này không còn khả dụng. Hãy chọn một chủ đề khác nhé.");
    return;
  }
  let challenge = null;
  if (apiMode) {
    try {
      challenge = await apiRequest("/app/challenges", {
        method: "POST",
        csrf: true,
        body: { subjectId, topicId, mode },
      });
    } catch (error) {
      showNotice(error.message);
      return;
    }
  }
  state.selectedSubject = subjectId;
  state.topicId = topicId;
  state.mode = mode;
  state.gameId = challenge?.challengeId ?? crypto.randomUUID();
  state.questionIndex = 0;
  state.answers = [];
  state.answerBusy = false;
  state.finishBusy = false;
  state.sessionQuestions = mode === "quiz"
    ? challenge
      ? challenge.questions.map((question) => ({ ...question }))
      : createQuizQuestions(topicId)
    : [];
  state.matchRounds = mode === "match"
    ? challenge
      ? challenge.rounds.map((round) => ({ ...round, choices: round.choices.map((choice) => ({ ...choice })) }))
      : createMatchRounds(topicId)
    : [];
  state.reviewQuestions = [];
  state.matchSourceSelected = false;
  state.matchMessage = "";
  state.result = null;
  state.screen = "play";
  state.notice = "";
  render();
  scrollToTop();
  document.querySelector(".back-link")?.focus({ preventScroll: true });
}

async function startReview(mistakes, subjectId = state.selectedSubject, topicId = state.topicId, sourceSessionId = "") {
  if (!Array.isArray(mistakes) || !mistakes.length) {
    showNotice("Chưa có câu sai nào cần luyện lại — bạn làm tốt lắm!");
    return;
  }
  const questions = mistakes
    .filter((mistake) =>
      mistake
      && typeof mistake.prompt === "string"
      && Array.isArray(mistake.options)
      && mistake.options.length === 4
      && mistake.options.every((answer) => typeof answer === "string")
      && Number.isInteger(mistake.correctIndex)
      && mistake.correctIndex >= 0
      && mistake.correctIndex < mistake.options.length
      && typeof mistake.explanation === "string",
    )
    .slice(0, 5)
    .map((mistake) => ({
      prompt: mistake.prompt,
      answers: [...mistake.options],
      correct: mistake.correctIndex,
      explanation: mistake.explanation,
    }));
  if (!questions.length) {
    showNotice("Lượt chơi cũ chưa có dữ liệu câu hỏi để luyện lại.");
    return;
  }

  let challenge = null;
  if (apiMode) {
    try {
      challenge = await apiRequest("/app/challenges", {
        method: "POST",
        csrf: true,
        body: { subjectId, topicId, mode: "review", sourceSessionId },
      });
    } catch (error) {
      showNotice(error.message);
      return;
    }
  }
  state.selectedSubject = subjectId;
  state.topicId = topicId;
  state.mode = "review";
  state.gameId = challenge?.challengeId ?? crypto.randomUUID();
  state.questionIndex = 0;
  state.answers = [];
  state.answerBusy = false;
  state.finishBusy = false;
  state.sessionQuestions = [];
  state.matchRounds = [];
  state.reviewQuestions = challenge
    ? challenge.questions.map((question) => ({ ...question }))
    : questions;
  state.matchSourceSelected = false;
  state.matchMessage = "";
  state.expandedReview = null;
  state.result = null;
  state.screen = "play";
  state.notice = "";
  render();
  scrollToTop();
  document.querySelector(".back-link")?.focus({ preventScroll: true });
}

async function recordGameAnswer(choice) {
  if (state.answerBusy || state.answers[state.questionIndex] !== undefined) return;
  const index = state.questionIndex;
  state.answerBusy = true;
  render();
  try {
    let correctIndex;
    let explanation;
    if (apiMode) {
      const result = await apiRequest(`/app/challenges/${encodeURIComponent(state.gameId)}/answer`, {
        method: "POST",
        csrf: true,
        body: { index, choice },
      });
      correctIndex = result.correctIndex;
      explanation = result.explanation;
    } else {
      const question = state.mode === "match"
        ? state.matchRounds[index]
        : state.mode === "review"
          ? state.reviewQuestions[index]
          : state.sessionQuestions[index];
      correctIndex = question.correct;
      explanation = question.explanation;
    }
    const question = state.mode === "match"
      ? state.matchRounds[index]
      : state.mode === "review"
        ? state.reviewQuestions[index]
        : state.sessionQuestions[index];
    question.correct = correctIndex;
    question.explanation = explanation;
    state.answers[index] = choice;
    state.matchMessage = "";
    state.notice = "";
  } catch (error) {
    state.notice = error.message;
  } finally {
    state.answerBusy = false;
    render();
    if (state.answers[index] !== undefined) {
      document.querySelector(".question-actions .button")?.focus({ preventScroll: true });
    }
  }
}

async function finishGame() {
  if (state.finishBusy) return;
  state.finishBusy = true;
  render();
  let total = state.mode === "match"
    ? state.matchRounds.length
    : state.mode === "review"
      ? state.reviewQuestions.length
      : state.sessionQuestions.length;
  let correct = state.answers.reduce((count, answer, index) => {
    const correctAnswer = state.mode === "match"
      ? state.matchRounds[index].correct
      : state.mode === "review"
        ? state.reviewQuestions[index].correct
        : state.sessionQuestions[index].correct;
    return count + (answer === correctAnswer ? 1 : 0);
  }, 0);
  let score = Math.round(correct / total * 100);
  const previousLevel = getExperienceLevel().level;
  let mistakes = state.answers.flatMap((answer, index) => {
    const correctIndex = state.mode === "match"
      ? state.matchRounds[index].correct
      : state.mode === "review"
        ? state.reviewQuestions[index].correct
        : state.sessionQuestions[index].correct;
    if (answer === correctIndex) return [];
    if (state.mode === "match") {
      const round = state.matchRounds[index];
      return [{
        prompt: `Ghép ý nghĩa phù hợp với: ${round.term}`,
        chosen: round.choices[answer].meaning,
        correct: round.choices[round.correct].meaning,
        explanation: round.explanation,
        options: round.choices.map((choice) => choice.meaning),
        correctIndex: round.correct,
      }];
    }
    const question = state.mode === "review" ? state.reviewQuestions[index] : state.sessionQuestions[index];
    return [{
      prompt: question.prompt,
      chosen: question.answers[answer],
      correct: question.answers[question.correct],
      explanation: question.explanation,
      options: [...question.answers],
      correctIndex: question.correct,
    }];
  });
  let serverReward = null;
  if (apiMode) {
    try {
      serverReward = await apiRequest("/app/progress", {
        method: "POST",
        csrf: true,
        body: { challengeId: state.gameId },
      });
    } catch (error) {
      state.finishBusy = false;
      state.notice = `${error.message} Lượt chơi vẫn được giữ để bạn thử lưu lại.`;
      render();
      return;
    }
    if (serverReward.duplicate) {
      state.notice = "Lượt này đã được lưu trên máy chủ.";
    }
    correct = serverReward.correct;
    total = serverReward.total;
    mistakes = serverReward.mistakes;
    score = Math.round(correct / total * 100);
  }
  state.expandedReview = mistakes.length ? "result" : null;
  state.progress.completed += 1;
  state.progress.correct += correct;
  state.progress.totalAnswered += total;
  state.progress.bestScore = Math.max(state.progress.bestScore, score);
  if (state.progress.lastStudyDate !== today) {
    state.progress.streak = daysBetween(today, state.progress.lastStudyDate) === 1
      ? state.progress.streak + 1
      : 1;
    state.progress.lastStudyDate = today;
    state.progress.bestStreak = Math.max(state.progress.bestStreak, state.progress.streak);
  }
  state.progress.dailyCount += 1;
  const reward = calculateExperienceReward({
    mode: state.mode,
    correct,
    total,
    dailyCount: state.progress.dailyCount,
    dailyGoal: state.progress.dailyGoal,
    dailyRewardClaimed: state.progress.dailyRewardDate === today,
  });
  const experienceEarned = serverReward?.experienceEarned ?? reward.experienceEarned;
  const dailyRewardEarned = serverReward?.dailyRewardEarned ?? reward.dailyRewardEarned;
  if (dailyRewardEarned) {
    state.progress.dailyRewardDate = today;
  }
  state.progress.experiencePoints += experienceEarned;
  const currentLevel = getExperienceLevel().level;
  state.result = {
    correct,
    total,
    mistakes,
    experienceEarned,
    dailyRewardEarned,
    leveledUp: currentLevel > previousLevel,
    levelBefore: previousLevel,
  };
  state.progress.date = today;
  state.progress.recent = [score, ...state.progress.recent].slice(0, 5);
  state.progress.history = [{
    id: state.gameId,
    subjectId: state.selectedSubject,
    topicId: state.topicId,
    mode: state.mode,
    correct,
    total,
    date: today,
    experiencePoints: experienceEarned,
    mistakes,
  }, ...state.progress.history].slice(0, 100);
  if (apiMode) {
    try {
      await loadServerApplication();
    } catch (error) {
      state.notice = `Đã lưu thử thách nhưng không thể làm mới tiến độ: ${error.message}`;
    }
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }
  state.screen = "result";
  state.finishBusy = false;
  render();
  scrollToTop();
  document.querySelector(".result-card .button")?.focus({ preventScroll: true });
}

function showNotice(message) {
  state.notice = message;
  render();
  window.clearTimeout(state.noticeTimer);
  state.noticeTimer = window.setTimeout(() => {
    state.notice = "";
    render();
  }, 2800);
}

function renderLogin() {
  const registering = state.authMode === "register";
  return `<main class="auth-screen"><section class="auth-card" aria-labelledby="login-title">
    <a class="brand auth-brand" href="/" aria-label="EduQuest"><span class="brand-mark"><span>e</span><span>q</span></span><span class="brand-name">edu<span>quest</span><i>.</i></span></a>
    <p class="section-overline">KHÔNG GIAN HỌC TẬP</p>
    <h1 id="login-title">${registering ? "Tạo tài khoản EduQuest" : "Đăng nhập EduQuest"}</h1>
    <p>${registering
    ? "Đăng ký miễn phí để lưu hành trình học và bắt đầu khám phá kiến thức."
    : "Đăng nhập để tiếp tục hành trình học tập của bạn."}</p>
    ${state.authError ? `<p class="auth-error" role="alert">${escapeHtml(state.authError)}</p>` : ""}
    ${state.authNotice ? `<p class="auth-note auth-success" role="status">${escapeHtml(state.authNotice)}</p>` : ""}
    <form id="${registering ? "register-form" : "login-form"}">
      ${registering ? `<label class="admin-field" for="register-display-name"><span>Họ và tên</span><input id="register-display-name" name="displayName" autocomplete="name" minlength="2" maxlength="32" required /></label>` : ""}
      <label class="admin-field" for="login-username"><span>Tên đăng nhập</span><input id="login-username" name="username" autocomplete="username" minlength="3" maxlength="40" pattern="[a-zA-Z0-9][a-zA-Z0-9_.-]{2,39}" value="${escapeHtml(state.authUsername)}" required /></label>
      ${registering ? `<label class="admin-field" for="register-grade"><span>Khối lớp</span><select id="register-grade" name="grade" required>${[6, 7, 8, 9, 10, 11, 12].map((grade) => `<option value="${grade}">Lớp ${grade}</option>`).join("")}</select></label>
      <label class="admin-field" for="register-class-code"><span>Mã lớp <small>(không bắt buộc)</small></span><input id="register-class-code" name="classCode" autocomplete="off" minlength="6" maxlength="12" pattern="[a-zA-Z0-9]{6,12}" /></label>` : ""}
      <label class="admin-field" for="login-password"><span>Mật khẩu${registering ? " (ít nhất 12 ký tự)" : ""}</span><input id="login-password" name="password" type="password" autocomplete="${registering ? "new-password" : "current-password"}" minlength="12" maxlength="128" required /></label>
      ${registering ? `<label class="admin-field" for="register-password-confirm"><span>Nhập lại mật khẩu</span><input id="register-password-confirm" name="passwordConfirm" type="password" autocomplete="new-password" minlength="12" maxlength="128" required /></label>` : ""}
      <button class="button button--primary" type="submit" ${state.authBusy ? "disabled" : ""}>${state.authBusy ? "Đang xử lý…" : registering ? "Tạo tài khoản" : "Đăng nhập"}</button>
    </form>
    <p class="auth-note">${registering
    ? `Đã có tài khoản? <button class="auth-mode-link" type="button" data-action="auth-mode" data-mode="login">Đăng nhập</button>`
    : state.registrationEnabled
      ? `Chưa có tài khoản? <button class="auth-mode-link" type="button" data-action="auth-mode" data-mode="register">Đăng ký miễn phí</button>`
      : "Nếu chưa có tài khoản, hãy liên hệ quản trị viên để được cấp tài khoản."}</p>
    ${registering ? `<p class="auth-note">Mã lớp do giáo viên hoặc quản trị viên cung cấp. Bạn cũng có thể tham gia lớp sau.</p>` : ""}
  </section></main>`;
}

async function loadServerApplication() {
  const result = await apiRequest("/app");
  state.currentUser = result.user;
  state.progress = result.progress;
  subjects = result.subjects;
  state.tutorShowContext = result.tutorSettings?.showContext === true;
  libraryOverrides = overridesFromRows(result.libraryLessons);
  state.selectedSubject = subjects.some((subject) => subject.id === state.selectedSubject)
    ? state.selectedSubject
    : subjects[0].id;
  state.adminSubjectId = subjects.some((subject) => subject.id === state.adminSubjectId)
    ? state.adminSubjectId
    : subjects[0].id;
  if (!getSubject().topics.some((topic) => topic.id === state.topicId)) {
    state.topicId = getSubject().topics[0].id;
  }
  if (!getSubject(state.adminSubjectId).topics.some((topic) => topic.id === state.adminTopicId)) {
    state.adminTopicId = getSubject(state.adminSubjectId).topics[0]?.id ?? "";
  }
}

async function loadAdminData(tab) {
  if (!apiMode || state.currentUser?.role !== "admin") return;
  state.adminDataLoading = true;
  try {
    if (tab === "overview") {
      state.adminOverview = await apiRequest("/admin/overview");
    } else if (tab === "classes") {
      state.adminClasses = (await apiRequest("/admin/classes")).classes;
    } else if (tab === "administrators") {
      state.adminAdministrators = (await apiRequest("/admin/administrators")).administrators;
    } else if (tab === "learners") {
      const query = state.selectedAdminClassId
        ? `?classId=${encodeURIComponent(state.selectedAdminClassId)}`
        : "";
      state.adminLearners = (await apiRequest(`/admin/learners${query}`)).learners;
      state.adminClasses = (await apiRequest("/admin/classes")).classes;
    } else if (tab === "library") {
      libraryOverrides = overridesFromRows((await apiRequest("/admin/library")).lessons);
    } else if (tab === "content") {
      const result = await apiRequest("/admin/curriculum");
      subjects = result.subjects;
      hasManagedEdits = true;
      state.adminSubjectId = subjects.some((subject) => subject.id === state.adminSubjectId)
        ? state.adminSubjectId
        : subjects[0].id;
      state.adminTopicId = getSubject(state.adminSubjectId).topics[0]?.id ?? "";
    }
    state.adminNotice = "";
  } catch (error) {
    state.adminNotice = error.message;
  } finally {
    state.adminDataLoading = false;
    render();
  }
}

async function initializeApplication() {
  try {
    const health = await fetch("/api/health", { cache: "no-store" });
    if (!health.ok) throw new Error("API");
    apiMode = true;
    const session = await apiRequest("/auth/session");
    setCsrfToken(session.csrfToken);
    state.registrationEnabled = session.registrationEnabled !== false;
    if (session.user) {
      await loadServerApplication();
      state.screen = "home";
    } else {
      state.currentUser = null;
      state.screen = "login";
    }
  } catch {
    if (backendRequired) {
      apiMode = true;
      state.authError = "Không thể kết nối máy chủ và cơ sở dữ liệu. Hãy kiểm tra hosting hoặc thử lại.";
      state.screen = "server-error";
    } else {
      apiMode = false;
      state.currentUser = null;
      state.screen = "home";
    }
  } finally {
    state.booting = false;
    render();
  }
}

window.addEventListener("eduquest:session-expired", async () => {
  if (!apiMode) return;
  state.currentUser = null;
  state.tutor = { subjectId: "", topicId: "", question: "", answer: "", error: "", busy: false, truncated: false };
  state.authError = "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.";
  try {
    const session = await apiRequest("/auth/session");
    setCsrfToken(session.csrfToken);
    state.registrationEnabled = session.registrationEnabled !== false;
  } catch {
    setCsrfToken("");
  }
  state.screen = "login";
  render();
});

app.addEventListener("click", async (event) => {
  const control = event.target.closest("[data-action]");
  if (!control) return;
  const { action } = control.dataset;

  if (action === "tutor") {
    state.screen = "tutor";
    state.notice = "";
    render();
    scrollToTop();
    document.querySelector("#tutor-title")?.focus({ preventScroll: true });
    return;
  }

  if (action === "library" || action === "library-back" || action === "library-reset" || action === "library-lesson") {
    state.screen = "library";
    state.notice = "";
    state.libraryLessonId = action === "library-lesson" ? control.dataset.lessonId : "";
    if (action === "library-reset") {
      state.librarySubjectId = "";
      state.libraryQuery = "";
    }
    render();
    scrollToTop();
    document.querySelector(state.libraryLessonId ? "#library-lesson-title" : "#library-title")?.focus({ preventScroll: true });
  } else if (action === "retry-connection") {
    state.booting = true;
    state.authError = "";
    render();
    await initializeApplication();
  } else if (action === "install-help") {
    state.showInstallHelp = !state.showInstallHelp;
    render();
  } else if (action === "install-app") {
    if (!deferredInstallPrompt) {
      state.installAvailable = false;
      state.showInstallHelp = true;
      render();
      return;
    }
    await deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    state.installAvailable = false;
    state.showInstallHelp = choice.outcome !== "accepted";
    render();
  } else if (action === "text-size") {
    const nextSize = adjustTextSize(state.textSize, Number(control.dataset.direction));
    localStorage.setItem(TEXT_SIZE_KEY, String(nextSize));
    state.textSize = nextSize;
    render();
    const focusedControl = document.querySelector(`[data-action="text-size"][data-direction="${control.dataset.direction}"]`);
    (focusedControl?.disabled
      ? document.querySelector('[data-action="text-size"][data-direction="-1"]')
      : focusedControl)?.focus({ preventScroll: true });
  } else if (action === "auth-mode") {
    state.authMode = control.dataset.mode === "register" ? "register" : "login";
    state.authError = "";
    state.authNotice = "";
    state.authBusy = false;
    render();
    document.querySelector(state.authMode === "register" ? "#register-display-name" : "#login-username")?.focus({ preventScroll: true });
  } else if (action === "logout") {
    try {
      await apiRequest("/auth/logout", { method: "POST", csrf: true });
      const session = await apiRequest("/auth/session");
      setCsrfToken(session.csrfToken);
      state.registrationEnabled = session.registrationEnabled !== false;
      state.currentUser = null;
      state.authError = "";
      state.tutor = { subjectId: "", topicId: "", question: "", answer: "", error: "", busy: false, truncated: false };
      state.screen = "login";
    } catch (error) {
      state.authError = error.message;
    }
    render();
  } else if (action === "admin") {
    if (apiMode && state.currentUser?.role !== "admin") return;
    state.screen = "admin";
    state.adminTab = "overview";
    state.adminNotice = "";
    render();
    document.querySelector(".admin-page-heading h1")?.focus({ preventScroll: true });
    scrollToTop();
    await loadAdminData("overview");
  } else if (action === "admin-tab") {
    if (apiMode && state.currentUser?.role !== "admin") return;
    state.screen = "admin";
    state.adminTab = ["overview", "content", "library", "tutor", "classes", "learners", "administrators", "data"].includes(control.dataset.tab)
      ? control.dataset.tab
      : "overview";
    state.adminCreatingTopic = false;
    state.adminNotice = "";
    render();
    document.querySelector(".admin-page-heading h1")?.focus({ preventScroll: true });
    scrollToTop();
    await loadAdminData(state.adminTab);
  } else if (action === "admin-library-lesson") {
    state.adminLibraryLessonId = control.dataset.lessonId;
    state.adminLibraryCreating = false;
    state.adminNotice = "";
    render();
    document.querySelector('#admin-library-form [name="title"]')?.focus({ preventScroll: true });
  } else if (action === "admin-library-new") {
    state.adminLibraryLessonId = "";
    state.adminLibraryCreating = true;
    state.adminNotice = "";
    render();
    document.querySelector('#admin-library-form [name="title"]')?.focus({ preventScroll: true });
  } else if (["admin-library-hide", "admin-library-delete", "admin-library-restore"].includes(action)) {
    const lessonId = control.dataset.lessonId;
    const prompts = {
      "admin-library-hide": "Ẩn bài này khỏi thư viện của học sinh? Bạn có thể hiện lại sau.",
      "admin-library-delete": "Xóa vĩnh viễn bài đọc do quản trị viên thêm này?",
      "admin-library-restore": "Bỏ thay đổi và đưa bài về bản gốc?",
    };
    if (!window.confirm(prompts[action])) return;
    const error = await persistLibraryLesson(lessonId, action === "admin-library-hide" ? null : undefined);
    if (!error && action === "admin-library-delete") state.adminLibraryLessonId = "";
    state.adminNotice = error || {
      "admin-library-hide": "Đã ẩn bài khỏi thư viện.",
      "admin-library-delete": "Đã xóa bài đọc.",
      "admin-library-restore": "Đã khôi phục bài gốc.",
    }[action];
    render();
  } else if (action === "admin-library-export") {
    const blob = new Blob([JSON.stringify({ schema: "eduquest-library-v1", overrides: libraryOverrides }, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `eduquest-thu-vien-${today}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
    state.adminNotice = `Đã tải ${Object.keys(libraryOverrides).length} thay đổi thư viện.`;
    render();
  } else if (action === "admin-library-reset") {
    if (!window.confirm("Xóa mọi bài đã sửa, bài thêm mới và bỏ ẩn tất cả, đưa thư viện về bản gốc?")) return;
    const error = await replaceLibraryOverrides({});
    state.adminLibraryLessonId = "";
    state.adminLibraryCreating = false;
    state.adminNotice = error || "Đã khôi phục toàn bộ thư viện gốc.";
    render();
  } else if (action === "admin-topic") {
    state.adminTopicId = control.dataset.topic;
    state.adminCreatingTopic = false;
    state.adminNotice = "";
    render();
    document.querySelector(".admin-topic-choice.is-active")?.focus({ preventScroll: true });
  } else if (action === "admin-new-topic") {
    state.adminCreatingTopic = true;
    state.adminNotice = "";
    render();
    document.querySelector('#admin-topic-form [name="title"]')?.focus({ preventScroll: true });
  } else if (action === "admin-add-question") {
    const form = control.closest("#admin-topic-form");
    const list = form?.querySelector(".admin-question-list");
    if (!list) return;
    const cards = list.querySelectorAll(".admin-question-card");
    if (cards.length >= 100) {
      state.adminNotice = "Mỗi chủ đề có thể chứa tối đa 100 câu hỏi.";
      render();
      return;
    }
    list.insertAdjacentHTML("beforeend", renderAdminQuestionCard({
      prompt: "",
      answers: ["", "", "", ""],
      correct: 0,
      explanation: "",
    }, cards.length, cards.length + 1));
    list.querySelectorAll(".admin-question-card .admin-danger-link").forEach((button) => {
      button.disabled = list.querySelectorAll(".admin-question-card").length <= 4;
    });
    list.querySelector(".admin-question-card:last-of-type [name=\"prompt\"]")?.focus({ preventScroll: true });
  } else if (action === "admin-remove-question") {
    const form = control.closest("#admin-topic-form");
    const cards = form?.querySelectorAll(".admin-question-card");
    if (!form || !cards || cards.length <= 4 || !window.confirm("Xóa câu hỏi này khỏi chủ đề?")) return;
    control.closest(".admin-question-card")?.remove();
    const remaining = [...form.querySelectorAll(".admin-question-card")];
    remaining.forEach((card, index) => {
      card.querySelector(".admin-question-number").textContent = `Câu hỏi ${index + 1}`;
      const removeButton = card.querySelector(".admin-danger-link");
      removeButton.setAttribute("aria-label", `Xóa câu hỏi ${index + 1}`);
      removeButton.disabled = remaining.length <= 4;
    });
  } else if (action === "admin-delete-topic") {
    const subject = subjects.find((item) => item.id === state.adminSubjectId);
    if (subject?.topics.length <= 1) {
      state.adminNotice = "Mỗi môn học cần giữ ít nhất một chủ đề.";
    } else if (subject && window.confirm("Xóa chủ đề này và toàn bộ câu hỏi trong chủ đề?")) {
      const previousSubjects = copyCurriculum(subjects);
      const previousMatchIds = new Set(customMatchTopicIds);
      subject.topics = subject.topics.filter((topic) => topic.id !== control.dataset.topic);
      customMatchTopicIds.delete(control.dataset.topic);
      state.adminTopicId = subject.topics[0].id;
      state.adminCreatingTopic = false;
      state.adminNotice = await persistAdminCurriculum();
      if (state.adminNotice) {
        subjects = previousSubjects;
        customMatchTopicIds = previousMatchIds;
      } else {
        state.adminNotice = "Đã xóa chủ đề.";
      }
    }
    render();
  } else if (action === "admin-export") {
    if (apiMode) {
      try {
        const curriculum = await apiRequest("/admin/curriculum");
        downloadFile("eduquest-noi-dung-mon-hoc.json", JSON.stringify(curriculum.subjects, null, 2), "application/json;charset=utf-8");
        state.adminNotice = "Đã tải nội dung môn học từ máy chủ.";
      } catch (error) {
        state.adminNotice = error.message;
      }
    } else {
      const backup = {
        schema: "eduquest-backup-v1",
        createdAt: new Date().toISOString(),
        progress: state.progress,
        curriculum: subjects,
        customMatchTopicIds: [...customMatchTopicIds],
      };
      downloadFile("eduquest-sao-luu.json", JSON.stringify(backup, null, 2), "application/json;charset=utf-8");
      state.adminNotice = "Đã tạo tệp sao lưu trên thiết bị.";
    }
    render();
  } else if (action === "admin-export-csv") {
    const rows = state.progress.history.map((entry) => {
      const subject = subjects.find((item) => item.id === entry.subjectId);
      const topic = subject?.topics.find((item) => item.id === entry.topicId);
      return { ...entry, subjectName: subject?.name ?? "Môn đã lưu trữ", topicTitle: topic?.title ?? "Chủ đề đã lưu trữ" };
    });
    downloadFile("eduquest-tien-do-nguoi-hoc.csv", exportLearnerCsv(rows), "text/csv;charset=utf-8");
    state.adminNotice = "Đã tải lịch sử học dạng CSV.";
    render();
  } else if (action === "admin-delete-class") {
    if (window.confirm("Xóa lớp học này? Không thể xóa nếu lớp còn học sinh.")) {
      try {
        await apiRequest(`/admin/classes/${encodeURIComponent(control.dataset.classId)}`, { method: "DELETE", csrf: true });
        state.adminClasses = (await apiRequest("/admin/classes")).classes;
        state.adminNotice = "Đã xóa lớp học.";
      } catch (error) {
        state.adminNotice = error.message;
      }
      render();
    }
  } else if (action === "admin-export-learner-csv") {
    try {
      const result = await apiRequest("/admin/learners");
      const csv = exportLearnerSummaryCsv(result.learners);
      downloadFile("eduquest-tai-khoan-nguoi-hoc.csv", csv, "text/csv;charset=utf-8");
      state.adminNotice = `Đã xuất ${result.learners.length} tài khoản người học.`;
    } catch (error) {
      state.adminNotice = error.message;
    }
    render();
  } else if (action === "admin-delete-learner") {
    if (window.confirm("Xóa tài khoản học sinh và toàn bộ lịch sử học của tài khoản này?")) {
      try {
        await apiRequest(`/admin/learners/${encodeURIComponent(control.dataset.learnerId)}`, { method: "DELETE", csrf: true });
        state.adminLearners = (await apiRequest(`/admin/learners${state.selectedAdminClassId ? `?classId=${encodeURIComponent(state.selectedAdminClassId)}` : ""}`)).learners;
        state.adminNotice = "Đã xóa tài khoản và dữ liệu liên quan.";
      } catch (error) {
        state.adminNotice = error.message;
      }
      render();
    }
  } else if (action === "admin-view-history") {
    state.adminSelectedLearner = control.dataset.learnerId;
    try {
      state.adminLearnerHistory = (await apiRequest(`/admin/learners/${encodeURIComponent(state.adminSelectedLearner)}/history`)).history;
      state.adminNotice = `Đã tải ${state.adminLearnerHistory.length} lượt học của tài khoản.`;
    } catch (error) {
      state.adminNotice = error.message;
    }
    render();
  } else if (action === "start") {
    await startGame(control.dataset.subject, control.dataset.topic, control.dataset.mode);
  } else if (action === "review-mistakes") {
    await startReview(state.result?.mistakes, state.selectedSubject, state.topicId, state.gameId);
  } else if (action === "practice-history") {
    const entry = state.progress.history[Number(control.dataset.historyIndex)];
    if (entry) await startReview(entry.mistakes, entry.subjectId, entry.topicId, entry.id);
  } else if (action === "answer" && state.screen === "play" && state.answers[state.questionIndex] === undefined) {
    await recordGameAnswer(Number(control.dataset.answer));
  } else if (action === "next" && state.answers[state.questionIndex] !== undefined) {
    const total = state.mode === "match"
      ? state.matchRounds.length
      : state.mode === "review"
        ? state.reviewQuestions.length
        : state.sessionQuestions.length;
    if (state.questionIndex === total - 1) {
      await finishGame();
    } else {
      state.questionIndex += 1;
      state.matchSourceSelected = false;
      state.matchMessage = "";
      render();
      document.querySelector(".question-content h1")?.focus({ preventScroll: true });
    }
  } else if (action === "toggle-review") {
    state.expandedReview = state.expandedReview === control.dataset.reviewId ? null : control.dataset.reviewId;
    render();
    document.querySelector(`[data-review-id="${state.expandedReview ?? ""}"]`)?.focus({ preventScroll: true });
  } else if (action === "match-answer" && state.screen === "play" && state.mode === "review" && state.answers[state.questionIndex] === undefined) {
    await recordGameAnswer(Number(control.dataset.answer));
  } else if (action === "select-match" && state.screen === "play" && state.mode === "match" && state.answers[state.questionIndex] === undefined) {
    state.matchSourceSelected = true;
    state.matchMessage = "Đã chọn thẻ — hãy ghép với một ý nghĩa nhé.";
    render();
    document.querySelector(".match-term")?.focus({ preventScroll: true });
  } else if (action === "match-answer" && state.screen === "play" && state.mode === "match" && state.answers[state.questionIndex] === undefined) {
    if (!state.matchSourceSelected) {
      state.matchMessage = "Chọn thẻ kiến thức trước, rồi ghép với ý nghĩa phù hợp nhé.";
      render();
      document.querySelector(".match-term")?.focus({ preventScroll: true });
    } else {
      await recordGameAnswer(Number(control.dataset.answer));
    }
  } else if (action === "subject") {
    state.selectedSubject = control.dataset.subject;
    state.screen = "home";
    state.notice = "";
    render();
    document.querySelector('.subject-filter select')?.focus({ preventScroll: true });
    scrollToElement(document.querySelector("#subjects"));
  } else if (action === "subject-picker") {
    state.selectedSubject = control.dataset.subject;
    state.screen = "home";
    state.notice = "";
    render();
    const selectedOption = [...document.querySelectorAll("[data-subject-picker]")]
      .find((option) => option.dataset.subjectPicker === state.selectedSubject);
    selectedOption?.focus({ preventScroll: true });
  } else if (action === "explore") {
    state.screen = "home";
    render();
    scrollToElement(document.querySelector("#subjects"));
  } else if (action === "progress") {
    state.screen = "progress";
    state.expandedReview = null;
    render();
    scrollToTop();
  } else if (action === "profile") {
    state.screen = "profile";
    state.notice = "";
    render();
    document.querySelector("#display-name")?.focus({ preventScroll: true });
    scrollToTop();
  } else if (action === "home") {
    state.screen = "home";
    state.notice = "";
    render();
    scrollToTop();
  } else if (action === "tip") {
    showNotice("Mẹo nhỏ: đọc kỹ câu hỏi, rồi tin vào suy nghĩ của mình nhé!");
  }
});

app.addEventListener("change", async (event) => {
  if (event.target.id === "tutor-subject") {
    state.tutor.hintLevel = 0;
    state.tutor.answer = "";
    state.tutor.subjectId = event.target.value;
    state.tutor.topicId = subjects.find((subject) => subject.id === event.target.value)?.topics[0]?.id ?? "";
    render();
    document.querySelector("#tutor-subject")?.focus();
    return;
  }
  if (event.target.id === "tutor-topic") { state.tutor.hintLevel = 0; state.tutor.answer = ""; state.tutor.topicId = event.target.value; return; }
  if (event.target.matches("#library-grade, #library-subject")) {
    const form = document.querySelector("#library-filter-form");
    const data = new FormData(form);
    state.libraryGrade = data.get("grade");
    state.librarySubjectId = data.get("subjectId");
    state.libraryQuery = String(data.get("query")).trim();
    state.libraryLessonId = "";
    const focusedId = event.target.id;
    render();
    document.getElementById(focusedId)?.focus({ preventScroll: true });
    return;
  }
  if (event.target.matches('select[data-action="subject"]')) {
    state.selectedSubject = event.target.value;
    state.screen = "home";
    state.notice = "";
    render();
    scrollToElement(document.querySelector("#subjects"));
    return;
  }
  if (event.target.matches('input[name="dailyGoal"]')) {
    document.querySelectorAll(".goal-option").forEach((option) => {
      option.classList.toggle("is-selected", option.querySelector("input") === event.target);
    });
  }
  if (event.target.matches("#admin-library-filter select")) {
    const data = new FormData(event.target.form);
    state.adminLibraryFilters = {
      grade: String(data.get("grade")),
      subjectId: String(data.get("subjectId") ?? ""),
      status: String(data.get("status")),
      query: String(data.get("query")).trim(),
    };
    const focusedName = event.target.name;
    render();
    document.querySelector(`#admin-library-filter [name="${focusedName}"]`)?.focus({ preventScroll: true });
    return;
  }
  if (event.target.matches('input[data-action="admin-library-import"]')) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 2 * 1024 * 1024) throw new Error("Tệp thư viện vượt quá giới hạn 2 MB.");
      const parsed = JSON.parse(await file.text());
      if (parsed?.schema !== "eduquest-library-v1") throw new Error("Tệp không đúng định dạng thư viện EduQuest.");
      const error = validateLibraryOverrides(parsed.overrides);
      if (error) throw new Error(error);
      if (!window.confirm("Thay thế toàn bộ thay đổi thư viện hiện tại bằng tệp đã chọn?")) {
        event.target.value = "";
        return;
      }
      const saveError = await replaceLibraryOverrides(parsed.overrides);
      if (saveError) throw new Error(saveError);
      state.adminLibraryLessonId = "";
      state.adminLibraryCreating = false;
      state.adminNotice = `Đã nhập ${Object.keys(parsed.overrides).length} thay đổi thư viện.`;
    } catch (error) {
      state.adminNotice = error instanceof SyntaxError ? "Tệp không phải JSON hợp lệ." : error.message;
    }
    render();
    return;
  }
  if (event.target.matches('select[data-action="admin-subject"]')) {
    const subject = subjects.find((item) => item.id === event.target.value);
    if (!subject) return;
    state.adminSubjectId = subject.id;
    state.adminTopicId = subject.topics[0]?.id ?? "";
    state.adminCreatingTopic = false;
    state.adminNotice = "";
    render();
  }
  if (event.target.matches('select[data-action="admin-class-filter"]')) {
    state.selectedAdminClassId = event.target.value;
    try {
      const query = state.selectedAdminClassId ? `?classId=${encodeURIComponent(state.selectedAdminClassId)}` : "";
      state.adminLearners = (await apiRequest(`/admin/learners${query}`)).learners;
      state.adminNotice = "";
    } catch (error) {
      state.adminNotice = error.message;
    }
    render();
  }
  if (event.target.matches('input[data-action="admin-import"]')) {
    if (apiMode) {
      state.adminNotice = "Khôi phục toàn bộ cơ sở dữ liệu cần thao tác trực tiếp trên máy chủ. Dùng pg_dump/psql theo hướng dẫn.";
      render();
      return;
    }
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      state.adminNotice = "Tệp sao lưu vượt quá giới hạn 5 MB.";
      render();
      return;
    }
    if (!window.confirm("Nhập bản sao lưu sẽ thay thế tiến độ và nội dung hiện tại trên thiết bị này. Tiếp tục?")) {
      event.target.value = "";
      return;
    }
    file.text().then((text) => {
      let backup;
      try {
        backup = JSON.parse(text);
      } catch (error) {
        if (error instanceof SyntaxError) {
          state.adminNotice = "Tệp không phải JSON hợp lệ.";
          render();
          return;
        }
        throw error;
      }
      const curriculumError = validateCurriculum(backup?.curriculum);
      if (backup?.schema !== "eduquest-backup-v1" || curriculumError || !validBackupProgress(backup?.progress, backup.curriculum)) {
        state.adminNotice = curriculumError || "Bản sao lưu không đúng định dạng EduQuest hoặc chứa dữ liệu không hợp lệ.";
        render();
        return;
      }
      subjects = backup.curriculum;
      customMatchTopicIds = new Set(Array.isArray(backup.customMatchTopicIds)
        ? backup.customMatchTopicIds.filter((topicId) => subjects.some((subject) => subject.topics.some((topic) => topic.id === topicId)))
        : []);
      localStorage.setItem(ADMIN_CONTENT_KEY, JSON.stringify({ subjects, customMatchTopicIds: [...customMatchTopicIds] }));
      hasManagedEdits = true;
      state.progress = backup.progress;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
      state.progress = readProgress();
      state.adminSubjectId = subjects[0].id;
      state.adminTopicId = subjects[0].topics[0].id;
      state.selectedSubject = subjects[0].id;
      state.adminCreatingTopic = false;
      state.adminNotice = "Đã nhập bản sao lưu EduQuest.";
      render();
      document.querySelector(".admin-page-heading h1")?.focus({ preventScroll: true });
    }).catch((error) => {
      console.error("Không thể đọc tệp sao lưu EduQuest.", error);
      state.adminNotice = "Không thể đọc tệp sao lưu. Hãy chọn lại tệp JSON.";
      render();
    });
  }
  if (event.target.matches('input[data-action="admin-import-curriculum"]')) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 5 * 1024 * 1024) throw new Error("Tệp nội dung vượt quá giới hạn 5 MB.");
      const curriculum = JSON.parse(await file.text());
      const error = validateCurriculum(curriculum);
      if (error) throw new Error(error);
      if (!window.confirm("Thay thế toàn bộ danh mục môn học trên máy chủ bằng tệp đã chọn?")) return;
      await apiRequest("/admin/curriculum", { method: "PUT", csrf: true, body: { subjects: curriculum } });
      subjects = curriculum;
      state.adminSubjectId = subjects[0].id;
      state.adminTopicId = subjects[0].topics[0].id;
      state.selectedSubject = subjects[0].id;
      hasManagedEdits = true;
      state.adminNotice = "Đã nhập và lưu danh mục môn học trên máy chủ.";
    } catch (error) {
      if (error instanceof SyntaxError) state.adminNotice = "Tệp JSON không hợp lệ.";
      else state.adminNotice = error.message;
    }
    render();
  }
});

app.addEventListener("input", (event) => {
  if (event.target.id === "tutor-attempt") state.tutor.attempt = event.target.value;
  if (event.target.id === "tutor-question") { state.tutor.question = event.target.value; state.tutor.hintLevel = 0; }
  if (event.target.id === "display-name") event.target.setCustomValidity("");
  if (event.target.matches('#admin-topic-form [name="answer"]')) {
    const card = event.target.closest(".admin-question-card");
    const answerIndex = [...card.querySelectorAll('[name="answer"]')].indexOf(event.target);
    const option = card.querySelector('[name="correct"]')?.options[answerIndex];
    if (option) option.textContent = `${String.fromCharCode(65 + answerIndex)} · ${event.target.value || "Chưa nhập đáp án"}`;
  }
});

app.addEventListener("submit", async (event) => {
  if (event.target.id === "admin-tutor-settings") {
    event.preventDefault();
    const button = event.target.querySelector('button[type="submit"]');
    button.disabled = true;
    try {
      const result = await apiRequest("/admin/tutor-settings", { method: "PUT", csrf: true,
        body: { showContext: new FormData(event.target).has("showContext") } });
      state.tutorShowContext = result.showContext;
      state.tutor.hintLevel = 0;
      state.tutor.answer = "";
      state.adminNotice = "Đã lưu cài đặt AI Tutor.";
    } catch (error) { state.adminNotice = error.message; }
    render();
    return;
  }
  if (event.target.id === "tutor-form") {
    event.preventDefault();
    if (!apiMode || !state.currentUser || state.tutor.busy) return;
    const data = new FormData(event.target);
    const tutor = state.tutor;
    const userId = state.currentUser.id;
    tutor.subjectId = String(data.get("subjectId") ?? "");
    tutor.topicId = String(data.get("topicId") ?? "");
    tutor.question = String(data.get("question")).trim();
    tutor.attempt = String(data.get("attempt") ?? "").trim();
    const mode = event.submitter?.value || "ask";
    const hintLevel = mode === "hint" ? Math.min(3, (tutor.hintLevel ?? 0) + 1) : 1;
    if (mode === "check" && !tutor.attempt) { tutor.error = "Nhập cách làm để gia sư kiểm tra nhé."; render(); return; }
    tutor.error = "";
    tutor.answer = "";
    tutor.busy = true;
    render();
    try {
      const result = await apiRequest("/app/tutor", { method: "POST", csrf: true,
        signal: AbortSignal.timeout(65000), body: { subjectId: tutor.subjectId, topicId: tutor.topicId, question: tutor.question, mode, hintLevel, attempt: tutor.attempt } });
      if (state.currentUser?.id === userId && state.tutor === tutor) {
        if (mode === "hint") tutor.hintLevel = hintLevel;
        tutor.answer = result.answer;
        tutor.truncated = result.truncated;
      }
    } catch (error) {
      if (state.currentUser?.id === userId && state.tutor === tutor) tutor.error = error.name === "TimeoutError" ? "Đã hết thời gian chờ. Hãy thử lại sau." : error.message;
    } finally {
      tutor.busy = false;
      render();
    }
    return;
  }
  if (event.target.id === "library-filter-form") {
    event.preventDefault();
    const data = new FormData(event.target);
    state.libraryGrade = data.get("grade");
    state.librarySubjectId = data.get("subjectId");
    state.libraryQuery = String(data.get("query")).trim();
    state.libraryLessonId = "";
    render();
    document.querySelector("#library-query")?.focus({ preventScroll: true });
    return;
  }
  if (event.target.id === "register-form") {
    event.preventDefault();
    if (state.authBusy) return;
    const data = new FormData(event.target);
    const password = String(data.get("password"));
    if (password !== String(data.get("passwordConfirm"))) {
      state.authError = "Hai lần nhập mật khẩu chưa khớp.";
      render();
      document.querySelector("#register-password-confirm")?.focus({ preventScroll: true });
      return;
    }
    state.authBusy = true;
    state.authError = "";
    state.authNotice = "";
    state.authUsername = String(data.get("username")).trim().toLowerCase();
    render();
    try {
      const result = await apiRequest("/auth/register", {
        method: "POST",
        csrf: true,
        body: {
          username: state.authUsername,
          displayName: String(data.get("displayName")),
          grade: Number(data.get("grade")),
          classCode: String(data.get("classCode")),
          password,
        },
      });
      state.authMode = "login";
      state.authNotice = result.message;
    } catch (error) {
      state.authError = error.message;
    } finally {
      state.authBusy = false;
    }
    render();
    document.querySelector(state.authError ? "#login-username" : "#login-password")?.focus({ preventScroll: true });
    return;
  }
  if (event.target.id === "login-form") {
    event.preventDefault();
    if (state.authBusy) return;
    const data = new FormData(event.target);
    state.authBusy = true;
    state.authError = "";
    state.authNotice = "";
    render();
    try {
      const session = await apiRequest("/auth/login", {
        method: "POST",
        csrf: true,
        body: {
          username: String(data.get("username")),
          password: String(data.get("password")),
        },
      });
      setCsrfToken(session.csrfToken);
      await loadServerApplication();
      state.screen = "home";
      state.authError = "";
      state.authBusy = false;
      render();
      scrollToTop();
    } catch (error) {
      state.authBusy = false;
      state.authError = error.message;
      render();
      document.querySelector("#login-username")?.focus({ preventScroll: true });
    }
    return;
  }
  if (event.target.id === "admin-class-form") {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      await apiRequest("/admin/classes", {
        method: "POST",
        csrf: true,
        body: { name: String(formData.get("name")), grade: Number(formData.get("grade")) },
      });
      state.adminClasses = (await apiRequest("/admin/classes")).classes;
      state.adminOverview = await apiRequest("/admin/overview");
      state.adminNotice = "Đã tạo lớp học.";
    } catch (error) {
      state.adminNotice = error.message;
    }
    render();
    return;
  }
  if (event.target.id === "admin-administrator-form") {
    event.preventDefault();
    const data = new FormData(event.target);
    const password = String(data.get("password"));
    if (password !== String(data.get("passwordConfirm"))) {
      state.adminNotice = "Hai lần nhập mật khẩu quản trị viên chưa khớp.";
      render();
      document.querySelector('#admin-administrator-form [name="passwordConfirm"]')?.focus({ preventScroll: true });
      return;
    }
    try {
      await apiRequest("/admin/administrators", {
        method: "POST",
        csrf: true,
        body: {
          username: String(data.get("username")),
          displayName: String(data.get("displayName")),
          password,
        },
      });
      state.adminAdministrators = (await apiRequest("/admin/administrators")).administrators;
      state.adminNotice = "Đã tạo tài khoản quản trị viên. Hãy gửi thông tin đăng nhập qua kênh bảo mật.";
    } catch (error) {
      state.adminNotice = error.message;
    }
    render();
    return;
  }
  if (event.target.matches(".admin-class-edit")) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    try {
      await apiRequest(`/admin/classes/${encodeURIComponent(form.dataset.classId)}`, {
        method: "PATCH",
        csrf: true,
        body: { name: String(formData.get("name")), grade: Number(formData.get("grade")) },
      });
      state.adminClasses = (await apiRequest("/admin/classes")).classes;
      state.adminNotice = "Đã cập nhật lớp học.";
    } catch (error) {
      state.adminNotice = error.message;
    }
    render();
    return;
  }
  if (event.target.id === "admin-learner-form") {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    try {
      await apiRequest("/admin/learners", {
        method: "POST",
        csrf: true,
        body: {
          username: String(data.get("username")),
          displayName: String(data.get("displayName")),
          password: String(data.get("password")),
          classId: String(data.get("classId")),
          grade: Number(data.get("grade")),
          dailyGoal: 3,
        },
      });
      const query = state.selectedAdminClassId ? `?classId=${encodeURIComponent(state.selectedAdminClassId)}` : "";
      state.adminLearners = (await apiRequest(`/admin/learners${query}`)).learners;
      state.adminOverview = await apiRequest("/admin/overview");
      state.adminNotice = "Đã tạo tài khoản người học.";
    } catch (error) {
      state.adminNotice = error.message;
    }
    render();
    return;
  }
  if (event.target.matches(".admin-learner-edit")) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const body = {
      displayName: String(data.get("displayName")),
      grade: Number(data.get("grade")),
      dailyGoal: Number(data.get("dailyGoal")),
      classId: String(data.get("classId")),
    };
    if (String(data.get("password"))) body.password = String(data.get("password"));
    try {
      await apiRequest(`/admin/learners/${encodeURIComponent(form.dataset.learnerId)}`, {
        method: "PATCH",
        csrf: true,
        body,
      });
      const query = state.selectedAdminClassId ? `?classId=${encodeURIComponent(state.selectedAdminClassId)}` : "";
      state.adminLearners = (await apiRequest(`/admin/learners${query}`)).learners;
      state.adminNotice = "Đã cập nhật tài khoản.";
    } catch (error) {
      state.adminNotice = error.message;
    }
    render();
    return;
  }
  if (event.target.id === "admin-library-filter") {
    event.preventDefault();
    const data = new FormData(event.target);
    state.adminLibraryFilters = {
      grade: String(data.get("grade")),
      subjectId: String(data.get("subjectId") ?? ""),
      status: String(data.get("status")),
      query: String(data.get("query")).trim(),
    };
    render();
    document.querySelector('#admin-library-filter [name="query"]')?.focus({ preventScroll: true });
    return;
  }
  if (event.target.id === "admin-library-form") {
    event.preventDefault();
    const data = new FormData(event.target);
    const existingId = String(data.get("lessonId"));
    const draft = {
      subjectId: String(data.get("subjectId") ?? ""),
      grade: Number(data.get("grade")),
      title: String(data.get("title")),
      knowledge: String(data.get("knowledge")),
      example: String(data.get("example")),
      reflection: String(data.get("reflection")),
      referenceOnly: data.get("referenceOnly") === "on",
    };
    const existingIds = new Set([...libraryLessons.map((lesson) => lesson.id), ...Object.keys(libraryOverrides)]);
    const lesson = { id: existingId || createLibraryLessonId(draft, existingIds), ...draft };
    const baseLesson = libraryLessons.find((item) => item.id === lesson.id);
    const unchanged = baseLesson && !validateLibraryLesson(lesson)
      && JSON.stringify(normalizeLibraryLesson(lesson)) === JSON.stringify(normalizeLibraryLesson(baseLesson));
    const error = validateLibraryLesson(lesson)
      || await persistLibraryLesson(lesson.id, unchanged ? undefined : normalizeLibraryLesson(lesson));
    if (!error) {
      state.adminLibraryLessonId = lesson.id;
      state.adminLibraryCreating = false;
    }
    state.adminNotice = error || (existingId ? "Đã lưu bài đọc." : "Đã thêm bài đọc mới vào thư viện.");
    render();
    return;
  }
  if (event.target.id === "admin-topic-form") {
    event.preventDefault();
    const formData = new FormData(event.target);
    const subject = subjects.find((item) => item.id === formData.get("subjectId"));
    const topicId = String(formData.get("topicId"));
    const title = String(formData.get("title")).trim();
    const description = String(formData.get("description")).trim();
    const questions = [...event.target.querySelectorAll(".admin-question-card")].map((card) => ({
      prompt: card.querySelector('[name="prompt"]').value.trim(),
      answers: [...card.querySelectorAll('[name="answer"]')].map((answer) => answer.value.trim()),
      correct: Number(card.querySelector('[name="correct"]').value),
      explanation: card.querySelector('[name="explanation"]').value.trim(),
    }));
    const existingTopic = subject?.topics.find((topic) => topic.id === topicId);
    const candidate = {
      id: topicId || slugifyTopic(title, new Set(subjects.flatMap((item) => item.topics.map((topic) => topic.id)))),
      title,
      description,
      level: existingTopic?.level ?? "KHÁM PHÁ",
      duration: existingTopic?.duration ?? "5 phút",
      art: existingTopic?.art ?? ["✦", "✿", "↗"],
      questions,
    };
    const error = !subject
      ? "Không tìm thấy môn học được chọn."
      : !title || !description
        ? "Vui lòng nhập tên và mô tả chủ đề."
        : validateCurriculum(subjects.map((item) => ({
          ...item,
          topics: item.id === subject.id
            ? topicId
              ? item.topics.map((topic) => topic.id === topicId ? candidate : topic)
              : [...item.topics, candidate]
            : item.topics,
        })));
    if (error) {
      state.adminNotice = error;
      render();
      return;
    }
    if (topicId) {
      subject.topics = subject.topics.map((topic) => topic.id === topicId ? candidate : topic);
    } else {
      subject.topics.push(candidate);
    }
    customMatchTopicIds.add(candidate.id);
    state.adminSubjectId = subject.id;
    state.adminTopicId = candidate.id;
    state.adminCreatingTopic = false;
    state.adminNotice = await persistAdminCurriculum();
    if (!state.adminNotice) state.adminNotice = "Đã lưu chủ đề và bộ câu hỏi.";
    render();
    return;
  }
  if (event.target.id !== "profile-form") return;
  event.preventDefault();
  const form = event.target;
  if (!form.reportValidity()) return;
  const formData = new FormData(form);
  const displayName = String(formData.get("displayName")).trim().replace(/\s+/g, " ");
  const grade = String(formData.get("grade"));
  const dailyGoal = Number(formData.get("dailyGoal"));
  if (displayName.length < 2 || displayName.length > 32 || !["6", "7", "8", "9", "10", "11", "12"].includes(grade) || !Number.isInteger(dailyGoal) || dailyGoal < 1 || dailyGoal > 5) {
    if (displayName.length < 2 || displayName.length > 32) {
      form.elements.displayName.setCustomValidity("Tên hiển thị cần có từ 2 đến 32 ký tự.");
    }
    form.reportValidity();
    return;
  }
  if (apiMode) {
    try {
      const result = await apiRequest("/app/profile", {
        method: "PATCH",
        csrf: true,
        body: { displayName, grade: Number(grade), dailyGoal },
      });
      state.currentUser = result.user;
    } catch (error) {
      state.authError = error.message;
      state.screen = "profile";
      render();
      return;
    }
  } else {
    state.progress.displayName = displayName;
    state.progress.grade = grade;
    state.progress.dailyGoal = dailyGoal;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }
  state.progress.displayName = displayName;
  state.progress.grade = grade;
  state.progress.dailyGoal = dailyGoal;
  state.screen = "home";
  showNotice("Đã lưu lựa chọn học tập của bạn!");
  scrollToTop();
});

app.addEventListener("dragstart", (event) => {
  const source = event.target.closest(".match-term");
  if (!source || state.screen !== "play" || state.mode !== "match" || state.answers[state.questionIndex] !== undefined) return;
  state.matchSourceSelected = true;
  state.matchMessage = "Thả thẻ vào ý nghĩa phù hợp nhé.";
  event.dataTransfer?.setData("text/plain", "eduquest-match");
  if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
});

app.addEventListener("dragover", (event) => {
  if (event.target.closest(".match-option:not(:disabled)")) event.preventDefault();
});

app.addEventListener("drop", async (event) => {
  const target = event.target.closest(".match-option:not(:disabled)");
  if (!target || !state.matchSourceSelected || state.screen !== "play" || state.mode !== "match") return;
  event.preventDefault();
  await recordGameAnswer(Number(target.dataset.answer));
});

void initializeApplication();

let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  state.installAvailable = true;
  render();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  state.installAvailable = false;
  state.installInstalled = true;
  state.showInstallHelp = false;
  state.notice = "EduQuest đã được cài đặt trên thiết bị của bạn.";
  render();
});

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch((error) => {
      console.error("Không thể bật chế độ dùng EduQuest ngoại tuyến.", error);
    });
  }, { once: true });
}
