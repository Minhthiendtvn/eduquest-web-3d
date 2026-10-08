import test from "node:test";
import assert from "node:assert/strict";
import { subjects } from "../src/content.js";
import { libraryLessons } from "../src/library-content.js";
import { filterLibraryLessons, renderLibrary } from "../src/library.js";

test("library covers all fourteen subjects for grades 6 through 12", () => {
  assert.equal(libraryLessons.length, 756);
  assert.equal(new Set(libraryLessons.map((lesson) => lesson.id)).size, 756);
  for (const grade of [6, 7, 8, 9, 10, 11, 12]) {
    assert.deepEqual(
      [...new Set(filterLibraryLessons({ grade, subjects }).map((lesson) => lesson.subjectId))],
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
  assert.equal(filterLibraryLessons({ grade: "6", subjectId: "math", subjects }).length, 9);
  assert.equal(filterLibraryLessons({ grade: 6, query: "SO NGUYEN", subjects })[0].subjectId, "math");
  assert.equal(filterLibraryLessons({ grade: 10, query: "khong-ton-tai", subjects }).length, 0);
  assert.equal(filterLibraryLessons({ grade: 6, subjects: [] }).length, 0);
  assert.equal(filterLibraryLessons({ grade: 6, subjects: subjects.slice(0, 1) }).length, 9);
});

test("grades 6 through 12 have the expected distinct lessons per subject", () => {
  for (const grade of [6, 7, 8, 9, 10, 11, 12]) {
    const expectedPerSubject = grade <= 9 ? 9 : 6;
    assert.equal(filterLibraryLessons({ grade, subjects }).length, expectedPerSubject * 14);
    for (const subject of subjects) {
      const lessons = filterLibraryLessons({ grade, subjectId: subject.id, subjects });
      assert.equal(lessons.length, expectedPerSubject, `${grade} ${subject.id}`);
      assert.equal(new Set(lessons.map((lesson) => lesson.title)).size, expectedPerSubject, `${grade} ${subject.id}`);
    }
  }
  assert.equal(
    filterLibraryLessons({ grade: 6, subjectId: "math", query: "phan so", subjects })[0].id,
    "library-math-6-fractions",
  );
  const reading = renderLibrary({
    subjects, grade: 6, subjectId: "science", query: "", lessonId: "library-science-6-mixtures",
  });
  assert.ok(reading.includes("Hỗn hợp và cách tách chất"));
  assert.ok(reading.includes("Kiến thức trọng tâm"));
  assert.ok(reading.includes('data-subject="science"'));
});

test("grade 7 new lessons support search, reading and reference labels", () => {
  const lessons = filterLibraryLessons({ grade: 7, subjectId: "math", query: "tam giac", subjects });
  assert.equal(lessons.length, 1);
  assert.equal(lessons[0].id, "library-math-7-triangle-angles");
  const reading = renderLibrary({
    subjects, grade: 7, subjectId: "science", query: "", lessonId: "library-science-7-light",
  });
  assert.ok(reading.includes("Ánh sáng và phản xạ"));
  assert.ok(reading.includes("Tự kiểm tra"));
  assert.ok(reading.includes('data-subject="science"'));
  assert.ok(renderLibrary({
    subjects, grade: 7, subjectId: "", query: "", lessonId: "",
  }).includes("126 bài học phù hợp"));
});

test("grade 8 additions can be searched and opened for reading", () => {
  const lessons = filterLibraryLessons({ grade: 8, subjectId: "math", query: "phan thuc", subjects });
  assert.equal(lessons.length, 1);
  assert.equal(lessons[0].id, "library-math-8-algebraic-fractions");
  const reading = renderLibrary({
    subjects, grade: 8, subjectId: "science", query: "", lessonId: "library-science-8-chemical-equations",
  });
  assert.ok(reading.includes("Phương trình hóa học và bảo toàn khối lượng"));
  assert.ok(reading.includes("Tự kiểm tra"));
  assert.ok(reading.includes('data-subject="science"'));
  assert.ok(renderLibrary({
    subjects, grade: 8, subjectId: "", query: "", lessonId: "",
  }).includes("126 bài học phù hợp"));
});

test("grade 9 additions support search and reading across existing subjects", () => {
  const lessons = filterLibraryLessons({ grade: 9, subjectId: "math", query: "tiep tuyen", subjects });
  assert.equal(lessons.length, 1);
  assert.equal(lessons[0].id, "library-math-9-circle-tangent");
  const reading = renderLibrary({
    subjects, grade: 9, subjectId: "science", query: "", lessonId: "library-science-9-electric-circuits",
  });
  assert.ok(reading.includes("Mạch nối tiếp và song song"));
  assert.ok(reading.includes("Tự kiểm tra"));
  assert.ok(reading.includes('data-subject="science"'));
  assert.ok(renderLibrary({
    subjects, grade: 9, subjectId: "", query: "", lessonId: "",
  }).includes("126 bài học phù hợp"));
});

test("grade 10 additions support search, reading, and elective reference labels", () => {
  const lessons = filterLibraryLessons({ grade: 10, subjectId: "math", query: "quy tac dem", subjects });
  assert.equal(lessons.length, 1);
  assert.equal(lessons[0].id, "library-math-10-counting-probability");
  const reading = renderLibrary({
    subjects, grade: 10, subjectId: "science", query: "", lessonId: "library-science-10-newton-laws",
  });
  assert.ok(reading.includes("Lực và các định luật Newton"));
  assert.ok(reading.includes("Kiến thức trọng tâm"));
  assert.ok(reading.includes("Ví dụ / Liên hệ"));
  assert.ok(reading.includes("Tự kiểm tra"));
  assert.ok(reading.includes('data-subject="science"'));
  assert.ok(renderLibrary({
    subjects, grade: 10, subjectId: "", query: "", lessonId: "",
  }).includes("84 bài học phù hợp"));
  assert.ok(renderLibrary({
    subjects, grade: 10, subjectId: "civics", query: "", lessonId: "library-civics-10-market-mechanism",
  }).includes("không khẳng định thuộc môn học chính khóa ở lớp này"));
});

test("grade 11 additions support search, reading, and elective reference labels", () => {
  const lessons = filterLibraryLessons({ grade: 11, subjectId: "math", query: "cap so nhan", subjects });
  assert.equal(lessons.length, 2);
  assert.ok(lessons.some((lesson) => lesson.id === "library-math-11-geometric-sequences"));
  const reading = renderLibrary({
    subjects, grade: 11, subjectId: "informatics", query: "", lessonId: "library-informatics-11-relational-databases",
  });
  assert.ok(reading.includes("Bảng, khóa và quan hệ dữ liệu"));
  assert.ok(reading.includes("Kiến thức trọng tâm"));
  assert.ok(reading.includes("Ví dụ / Liên hệ"));
  assert.ok(reading.includes("Tự kiểm tra"));
  assert.ok(reading.includes('data-subject="informatics"'));
  assert.ok(renderLibrary({
    subjects, grade: 11, subjectId: "", query: "", lessonId: "",
  }).includes("84 bài học phù hợp"));
  assert.ok(renderLibrary({
    subjects, grade: 11, subjectId: "music", query: "", lessonId: "library-music-11-harmony-melody",
  }).includes("không khẳng định thuộc môn học chính khóa ở lớp này"));
});

test("grade 12 additions support search, reading, and elective reference labels", () => {
  const lessons = filterLibraryLessons({ grade: 12, subjectId: "math", query: "dien tich hinh phang", subjects });
  assert.equal(lessons.length, 1);
  assert.equal(lessons[0].id, "library-math-12-integral-area");
  const reading = renderLibrary({
    subjects, grade: 12, subjectId: "informatics", query: "", lessonId: "library-informatics-12-html-structure",
  });
  assert.ok(reading.includes("HTML và cấu trúc nội dung trang web"));
  assert.ok(reading.includes("Kiến thức trọng tâm"));
  assert.ok(reading.includes("Ví dụ / Liên hệ"));
  assert.ok(reading.includes("Tự kiểm tra"));
  assert.ok(reading.includes('data-subject="informatics"'));
  assert.ok(renderLibrary({
    subjects, grade: 12, subjectId: "", query: "", lessonId: "",
  }).includes("84 bài học phù hợp"));
  assert.ok(renderLibrary({
    subjects, grade: 12, subjectId: "visual-arts", query: "", lessonId: "library-visual-arts-12-accessible-design",
  }).includes("không khẳng định thuộc môn học chính khóa ở lớp này"));
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

test("expanded lessons support search, reading, and reference labels", () => {
  const lessons = filterLibraryLessons({ grade: 6, subjectId: "math", query: "ti so phan tram", subjects });
  assert.equal(lessons.length, 1);
  assert.equal(lessons[0].id, "library-math-6-percentages");
  assert.equal(filterLibraryLessons({ grade: 9, query: "MENDEL", subjects })[0].id, "library-science-9-mendel");
  const reading = renderLibrary({
    subjects, grade: 12, subjectId: "informatics", query: "", lessonId: "library-informatics-12-ip-dns",
  });
  assert.ok(reading.includes("Địa chỉ IP, giao thức và tên miền"));
  assert.ok(reading.includes("Tự kiểm tra"));
  assert.ok(reading.includes('data-subject="informatics"'));
  const byId = new Map(libraryLessons.map((lesson) => [lesson.id, lesson]));
  assert.equal(byId.get("library-national-defense-7-stranger-safety").referenceOnly, true);
  assert.equal(byId.get("library-national-defense-10-drill-commands").referenceOnly, false);
  assert.equal(byId.get("library-music-11-xoan-then").referenceOnly, true);
  assert.equal(byId.get("library-math-10-propositions").referenceOnly, false);
});

test("library renders reading, empty results, and safe user text", () => {
  const options = { subjects, grade: 6, subjectId: "", query: "", lessonId: "" };
  const catalogue = renderLibrary(options);
  assert.ok(catalogue.includes("126 bài học phù hợp"));
  assert.ok(catalogue.includes('class="library-card" data-library-subject="math"'));
  const reading = renderLibrary({ ...options, lessonId: "library-math-6" });
  assert.ok(reading.includes("Kiến thức trọng tâm"));
  assert.ok(reading.includes("Ví dụ / Liên hệ"));
  assert.ok(reading.includes("Tự kiểm tra"));
  assert.ok(reading.includes('data-subject="math"'));
  assert.ok(reading.includes('data-library-subject="math"'));
  assert.ok(reading.includes('class="library-knowledge"'));
  assert.ok(reading.includes('class="library-reflection"'));
  const empty = renderLibrary({ ...options, query: '"><script>alert(1)</script>' });
  assert.ok(empty.includes("Chưa tìm thấy bài phù hợp"));
  assert.ok(!empty.includes("<script>"));
  assert.ok(empty.includes("&lt;script&gt;"));
  const renamed = renderLibrary({ ...options, subjects: [{ ...subjects[0], name: "<img onerror=bad>" }] });
  assert.ok(renamed.includes("&lt;img onerror=bad&gt;"));
  assert.ok(!renamed.includes("<img onerror=bad>"));
});
