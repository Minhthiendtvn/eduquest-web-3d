import test from "node:test";
import assert from "node:assert/strict";
import { subjects } from "../src/content.js";
import { renderAdmin } from "../src/admin.js";
import { libraryLessons } from "../src/library-content.js";
import { filterLibraryLessons, renderLibrary } from "../src/library.js";
import { filterAdminLibraryLessons, listAdminLibraryLessons, renderAdminLibrary } from "../src/library-admin.js";
import {
  LIBRARY_OVERRIDES_KEY,
  applyLibraryOverrides,
  createLibraryLessonId,
  loadLocalLibraryOverrides,
  overridesFromRows,
  validateLibraryLesson,
  validateLibraryOverrides,
} from "../src/library-overrides.js";

const customLesson = {
  id: "library-math-6-bai-moi",
  subjectId: "math",
  grade: 6,
  title: "Bài mới về số học",
  knowledge: "Nội dung kiến thức trọng tâm đủ dài.",
  example: "Ví dụ minh họa.",
  reflection: "Câu hỏi tự kiểm tra.",
  referenceOnly: false,
};

test("every starter lesson passes library lesson validation", () => {
  for (const lesson of libraryLessons) {
    assert.equal(validateLibraryLesson(lesson), "", lesson.id);
  }
});

test("library lesson validation rejects malformed lessons", () => {
  assert.equal(validateLibraryLesson(customLesson), "");
  assert.ok(validateLibraryLesson({ ...customLesson, id: "math-6" }));
  assert.ok(validateLibraryLesson({ ...customLesson, grade: 5 }));
  assert.ok(validateLibraryLesson({ ...customLesson, grade: "6" }));
  assert.ok(validateLibraryLesson({ ...customLesson, title: "  " }));
  assert.ok(validateLibraryLesson({ ...customLesson, knowledge: "x".repeat(2001) }));
  assert.ok(validateLibraryLesson({ ...customLesson, referenceOnly: "yes" }));
  assert.ok(validateLibraryOverrides({ "library-math-6": { ...customLesson } }), "id must match key");
  assert.equal(validateLibraryOverrides({ "library-math-6": null, [customLesson.id]: customLesson }), "");
  assert.ok(validateLibraryOverrides([]));
});

test("overrides edit, hide and add lessons without touching the starter list", () => {
  const edited = { ...libraryLessons[0], title: "Tên đã chỉnh sửa" };
  const hiddenId = libraryLessons[1].id;
  const lessons = applyLibraryOverrides(libraryLessons, {
    [edited.id]: edited,
    [hiddenId]: null,
    [customLesson.id]: customLesson,
  });
  assert.equal(lessons.length, libraryLessons.length);
  assert.equal(lessons[0].title, "Tên đã chỉnh sửa");
  assert.ok(!lessons.some((lesson) => lesson.id === hiddenId));
  assert.equal(lessons.at(-1).id, customLesson.id);
  assert.notEqual(libraryLessons[0].title, "Tên đã chỉnh sửa");

  const grade6Math = filterLibraryLessons({ grade: 6, subjectId: "math", subjects, lessons });
  assert.ok(grade6Math.some((lesson) => lesson.id === customLesson.id));
  const reading = renderLibrary({ subjects, grade: 6, subjectId: "math", query: "", lessonId: customLesson.id, lessons });
  assert.ok(reading.includes("Bài mới về số học"));
});

test("server rows and stored overrides are read defensively", () => {
  const overrides = overridesFromRows([
    { id: customLesson.id, lesson: customLesson },
    { id: "library-math-6", lesson: null },
    { id: "library-math-7", lesson: { ...customLesson } },
    { id: "bad id", lesson: null },
  ]);
  assert.deepEqual(Object.keys(overrides).sort(), [customLesson.id, "library-math-6"].sort());
  assert.deepEqual(overridesFromRows(undefined), {});

  const storage = new Map();
  const fakeStorage = { getItem: (key) => storage.get(key) ?? null };
  assert.deepEqual(loadLocalLibraryOverrides(fakeStorage), {});
  storage.set(LIBRARY_OVERRIDES_KEY, "{not json");
  assert.deepEqual(loadLocalLibraryOverrides(fakeStorage), {});
  storage.set(LIBRARY_OVERRIDES_KEY, JSON.stringify({ [customLesson.id]: customLesson }));
  assert.deepEqual(loadLocalLibraryOverrides(fakeStorage), { [customLesson.id]: customLesson });
});

test("new lesson ids are slugged and unique", () => {
  const existing = new Set(["library-math-6-phan-so-moi"]);
  assert.equal(
    createLibraryLessonId({ subjectId: "math", grade: 6, title: "Phân số mới" }, existing),
    "library-math-6-phan-so-moi-2",
  );
  assert.equal(createLibraryLessonId({ subjectId: "math", grade: 7, title: "Đường thẳng" }, existing), "library-math-7-duong-thang");
});

test("admin library lists statuses, filters, and escapes content", () => {
  const hiddenId = libraryLessons[1].id;
  const overrides = {
    [libraryLessons[0].id]: { ...libraryLessons[0], title: "<b>Đã sửa</b>" },
    [hiddenId]: null,
    [customLesson.id]: customLesson,
  };
  const items = listAdminLibraryLessons(libraryLessons, overrides);
  assert.equal(items.length, libraryLessons.length + 1);
  assert.deepEqual(
    filterAdminLibraryLessons(items, { status: "changed" }).map((item) => item.status).sort(),
    ["added", "edited", "hidden"],
  );
  assert.equal(filterAdminLibraryLessons(items, { grade: "6", subjectId: "math", query: "BAI MOI VE" }).length, 1);

  const html = renderAdminLibrary({
    subjects,
    baseLessons: libraryLessons,
    overrides,
    filters: { grade: "", subjectId: "", status: "", query: "" },
    selectedLessonId: libraryLessons[0].id,
    creating: false,
  });
  assert.ok(html.includes(`${libraryLessons.length} bài đang hiển thị · 1 đã sửa · 1 bài mới · 1 đã ẩn`));
  assert.ok(html.includes("&lt;b&gt;Đã sửa&lt;/b&gt;"));
  assert.ok(!html.includes("<b>Đã sửa</b>"));
  assert.ok(html.includes('data-action="admin-library-restore"'));
  assert.ok(html.includes("Đang hiện 120/"));

  const hiddenHtml = renderAdminLibrary({
    subjects, baseLessons: libraryLessons, overrides, filters: { grade: "", subjectId: "", status: "hidden", query: "" }, selectedLessonId: hiddenId, creating: false,
  });
  assert.ok(hiddenHtml.includes("Hiện lại bài"));
  assert.ok(!hiddenHtml.includes('type="submit">Lưu bài'));

  const customHtml = renderAdminLibrary({
    subjects, baseLessons: libraryLessons, overrides, filters: { grade: "", subjectId: "", status: "", query: "" }, selectedLessonId: customLesson.id, creating: false,
  });
  assert.ok(customHtml.includes('data-action="admin-library-delete"'));
});

test("admin dashboard exposes the library tab", () => {
  const progress = { history: [], completed: 0, totalAnswered: 0, correct: 0, experiencePoints: 0, displayName: "Lan", grade: "9" };
  const html = renderAdmin({
    subjects, progress, tab: "library", notice: "", hasContentEdits: false, libraryPanel: "<section>THU-VIEN-PANEL</section>",
  });
  assert.ok(html.includes('data-tab="library"'));
  assert.ok(html.includes("THU-VIEN-PANEL"));
  assert.ok(renderAdmin({ subjects, progress, tab: "overview", notice: "", hasContentEdits: false }).includes("Quản lý thư viện"));
});
