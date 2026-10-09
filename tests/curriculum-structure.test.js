import test from "node:test";
import assert from "node:assert/strict";
import { subjects } from "../src/content.js";
import { libraryLessons } from "../src/library-content.js";
import { subjectsForGrade, classifyLibraryLessons, courseId, courseInfo } from "../src/curriculum-structure.js";
import { renderTutor } from "../src/tutor.js";
import { tutorPayload, tutorSettings } from "../server/tutor.js";

test("THCS has ten compulsory subjects, integrated sciences, history/geography and arts", () => {
  for (const grade of [6, 7, 8, 9]) {
    const catalog = subjectsForGrade(subjects, grade);
    assert.equal(catalog.filter((item) => item.curriculumCategory === "required").length, 10);
    for (const id of ["science", "history-geography", "arts", "civics"]) assert.ok(catalog.some((item) => item.id === id));
    for (const id of ["physics", "chemistry", "biology", "national-defense", "economic-law"]) assert.ok(!catalog.some((item) => item.id === id));
    assert.equal(catalog.find((item) => item.id === "safety-reference").curriculumCategory, "reference");
  }
});
test("THPT has six compulsory and nine elective subjects, with separate physics, chemistry and biology", () => {
  for (const grade of [10, 11, 12]) {
    const catalog = subjectsForGrade(subjects, grade);
    assert.equal(catalog.filter((item) => item.curriculumCategory === "required").length, 6);
    assert.equal(catalog.filter((item) => item.curriculumCategory === "elective").length, 9);
    for (const id of ["physics", "chemistry", "biology", "economic-law"]) assert.equal(catalog.find((item) => item.id === id).curriculumCategory, "elective");
    assert.equal(catalog.find((item) => item.id === "history").curriculumCategory, "required");
    assert.ok(!catalog.some((item) => item.id === "science" || item.id === "civics"));
  }
});
test("grade catalogs preserve backend topic ownership and never mutate curriculum or cross grades", () => {
  const before = JSON.stringify(subjects);
  for (const grade of [6, 7, 8, 9, 10, 11, 12]) {
    const topics = subjectsForGrade(subjects, grade).flatMap((item) => item.topics);
    const expected = subjects.flatMap((source) => source.topics.filter((item) => item.id.startsWith(`grade-${grade}-`) && !(grade < 10 && source.id === "national-defense")));
    assert.equal(topics.filter((item) => !item.referenceOnly).length, expected.length);
    assert.equal(new Set(topics.map((item) => item.id)).size, topics.length);
    for (const topic of topics) {
      assert.ok(subjects.find((item) => item.id === topic.sourceSubjectId).topics.some((item) => item.id === topic.id));
      assert.ok(!/^grade-/.test(topic.id) || topic.id.startsWith(`grade-${grade}-`));
    }
  }
  assert.equal(JSON.stringify(subjects), before);
});
test("library retains every lesson id, assigns each science discipline and does not call electives extracurricular", () => {
  const classified = classifyLibraryLessons(libraryLessons);
  assert.deepEqual(classified.map((item) => item.id), libraryLessons.map((item) => item.id));
  assert.equal(classified.find((item) => item.id === "library-science-10-newton-laws").subjectId, "physics");
  assert.equal(classified.find((item) => item.id === "library-science-10-reaction-rate").subjectId, "chemistry");
  assert.equal(classified.find((item) => item.id === "library-science-10-cell-structure").subjectId, "biology");
  assert.equal(classified.find((item) => item.id === "library-science-10").referenceOnly, true);
  for (const id of ["library-civics-10-market-mechanism", "library-music-11-harmony-melody", "library-visual-arts-12-accessible-design"]) {
    assert.equal(classified.find((item) => item.id === id).referenceOnly, false);
  }
});
test("unknown science content and custom subjects are clearly references until classified", () => {
  assert.equal(courseId("science", { id: "custom" }, 10), "interdisciplinary");
  assert.equal(courseInfo("custom", 10, { name: "Custom" }).curriculumCategory, "reference");
});
test("AI Tutor restores grade-specific subjects and sends the trusted discipline name", () => {
  const catalog = subjectsForGrade(subjects, 10);
  const html = renderTutor({ subjects: catalog, tutor: { subjectId: "physics", question: "", busy: false }, grade: 10, available: true, showContext: true });
  assert.ok(html.includes("Vật lí")); assert.ok(html.includes("Hóa học")); assert.ok(html.includes("Sinh học"));
  assert.ok(!html.includes('value="science"'));
  const payload = tutorPayload({ question: "Hỏi bài" }, { grade: 10, subject: subjects.find((item) => item.id === "science"), topic: { id: "grade-10-mechanics", title: "Cơ học" } }, tutorSettings({}));
  assert.equal(JSON.parse(payload.messages[0].content).subject, "Vật lí");
});
