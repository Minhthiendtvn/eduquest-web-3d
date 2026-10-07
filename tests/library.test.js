import test from "node:test";
import assert from "node:assert/strict";
import { subjects } from "../src/content.js";
import { libraryLessons } from "../src/library-content.js";
import { filterLibraryLessons, renderLibrary } from "../src/library.js";

test("library covers all fourteen subjects for grades 6 through 12", () => {
  assert.equal(libraryLessons.length, 98);
  assert.equal(new Set(libraryLessons.map((lesson) => lesson.id)).size, 98);
  for (const grade of [6, 7, 8, 9, 10, 11, 12]) {
    assert.deepEqual(
      filterLibraryLessons({ grade, subjects }).map((lesson) => lesson.subjectId),
      subjects.map((subject) => subject.id),
    );
  }
  for (const lesson of libraryLessons) {
    for (const field of ["title", "knowledge", "example", "reflection"]) {
      assert.ok(lesson[field].trim().length > 10, `${lesson.id} ${field}`);
    }
  }
});

test("library filters by grade, subject, and accent-insensitive text", () => {
  assert.equal(filterLibraryLessons({ grade: "6", subjectId: "math", subjects }).length, 1);
  assert.equal(filterLibraryLessons({ grade: 6, query: "SO NGUYEN", subjects })[0].subjectId, "math");
  assert.equal(filterLibraryLessons({ grade: 10, query: "khong-ton-tai", subjects }).length, 0);
  assert.equal(filterLibraryLessons({ grade: 6, subjects: [] }).length, 0);
  assert.equal(filterLibraryLessons({ grade: 6, subjects: subjects.slice(0, 1) }).length, 1);
});

test("optional and non-curricular resources are labelled as references", () => {
  for (const lesson of libraryLessons.filter((item) => item.subjectId === "national-defense" && item.grade < 10)) {
    assert.equal(lesson.referenceOnly, true);
  }
  for (const lesson of libraryLessons.filter((item) =>
    ["music", "visual-arts", "civics"].includes(item.subjectId) && item.grade >= 10)) {
    assert.equal(lesson.referenceOnly, true);
  }
});

test("library renders reading, empty results, and safe user text", () => {
  const options = { subjects, grade: 6, subjectId: "", query: "", lessonId: "" };
  const catalogue = renderLibrary(options);
  assert.ok(catalogue.includes("14 bài học phù hợp"));
  const reading = renderLibrary({ ...options, lessonId: "library-math-6" });
  assert.ok(reading.includes("Kiến thức trọng tâm"));
  assert.ok(reading.includes("Ví dụ / Liên hệ"));
  assert.ok(reading.includes("Tự kiểm tra"));
  assert.ok(reading.includes('data-subject="math"'));
  const empty = renderLibrary({ ...options, query: '"><script>alert(1)</script>' });
  assert.ok(empty.includes("Chưa tìm thấy bài phù hợp"));
  assert.ok(!empty.includes("<script>"));
  assert.ok(empty.includes("&lt;script&gt;"));
  const renamed = renderLibrary({ ...options, subjects: [{ ...subjects[0], name: "<img onerror=bad>" }] });
  assert.ok(renamed.includes("&lt;img onerror=bad&gt;"));
  assert.ok(!renamed.includes("<img onerror=bad>"));
});
