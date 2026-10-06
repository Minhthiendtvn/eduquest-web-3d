import test from "node:test";
import assert from "node:assert/strict";
import { ADMIN_CONTENT_KEY, copyCurriculum, exportLearnerCsv, loadManagedCurriculum, renderAdmin, slugifyTopic, validateCurriculum } from "../src/admin.js";
import { subjects } from "../src/content.js";

test("curriculum validation accepts the starter content and rejects malformed topics", () => {
  assert.equal(validateCurriculum(subjects), "");
  const invalid = copyCurriculum(subjects);
  invalid[0].topics[0].questions[0].answers.pop();
  assert.match(validateCurriculum(invalid), /4 đáp án/);
});

test("managed curricula are isolated from starter data and invalid local data falls back safely", () => {
  const values = new Map([[ADMIN_CONTENT_KEY, JSON.stringify({ subjects, customMatchTopicIds: ["algebra"] })]]);
  const storage = { getItem: (key) => values.get(key) ?? null };
  const loaded = loadManagedCurriculum(storage, subjects);
  assert.equal(loaded.hasEdits, true);
  assert.deepEqual(loaded.customMatchTopicIds, ["algebra"]);
  loaded.subjects[0].name = "Tên tùy chỉnh";
  assert.equal(subjects[0].name, "Toán học");

  values.set(ADMIN_CONTENT_KEY, "{broken");
  assert.equal(loadManagedCurriculum(storage, subjects).invalid, true);
  assert.equal(loadManagedCurriculum({ getItem: () => null }, subjects).hasEdits, false);
});

test("topic slugs are readable, bounded, and unique", () => {
  assert.equal(slugifyTopic("Đọc hiểu tiếng Việt", new Set()), "doc-hieu-tieng-viet");
  assert.equal(slugifyTopic("Đọc hiểu tiếng Việt", new Set(["doc-hieu-tieng-viet"])), "doc-hieu-tieng-viet-2");
  assert.equal(slugifyTopic("!!!", new Set()), "chu-de-moi");
});

test("learner CSV quotes cells and protects spreadsheet formulas", () => {
  const csv = exportLearnerCsv([{
    date: "2026-10-06",
    subjectName: '=HYPERLINK("https://example.test")',
    topicTitle: 'Chủ đề "mới"',
    mode: "quiz",
    correct: 4,
    total: 5,
    experiencePoints: 50,
  }]);
  assert.ok(csv.includes(`"'=HYPERLINK(""https://example.test"")"`));
  assert.match(csv, /"Chủ đề ""mới"""/);
  assert.match(csv, /\r\n/);
});

test("admin rendering escapes edited topic text before adding it to HTML", () => {
  const curriculum = copyCurriculum(subjects);
  curriculum[0].topics[0].title = "<img src=x onerror=alert(1)>";
  const html = renderAdmin({
    subjects: curriculum,
    progress: { history: [], displayName: "Học sinh", grade: "9", dailyGoal: 3, completed: 0, correct: 0, totalAnswered: 0, bestScore: 0, experiencePoints: 0 },
    tab: "content",
    selectedSubjectId: curriculum[0].id,
    selectedTopicId: curriculum[0].topics[0].id,
    notice: "",
    hasContentEdits: true,
    creatingTopic: false,
  });
  assert.ok(html.includes("&lt;img src=x onerror=alert(1)&gt;"));
  assert.equal(html.includes("<img src=x onerror=alert(1)>"), false);
});

test("administrator account controls are available only in server administration", () => {
  const progress = {
    history: [],
    displayName: "Quản trị viên",
    grade: "9",
    dailyGoal: 3,
    completed: 0,
    correct: 0,
    totalAnswered: 0,
    bestScore: 0,
    experiencePoints: 0,
  };
  const html = renderAdmin({
    subjects,
    progress,
    tab: "administrators",
    selectedSubjectId: subjects[0].id,
    selectedTopicId: subjects[0].topics[0].id,
    notice: "",
    hasContentEdits: false,
    creatingTopic: false,
    apiMode: true,
    administrators: [{ id: "admin-1", username: "rootuser", displayName: "Quản trị chính" }],
  });

  assert.match(html, /id="admin-administrator-form"/);
  assert.match(html, /@rootuser/);
  assert.match(html, /Không thể tự đăng ký quyền quản trị/);

  const localHtml = renderAdmin({
    subjects,
    progress,
    tab: "administrators",
    selectedSubjectId: subjects[0].id,
    selectedTopicId: subjects[0].topics[0].id,
    notice: "",
    hasContentEdits: false,
    creatingTopic: false,
    apiMode: false,
  });
  assert.doesNotMatch(localHtml, /id="admin-administrator-form"/);
});
