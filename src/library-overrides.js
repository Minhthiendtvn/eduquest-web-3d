export const LIBRARY_OVERRIDES_KEY = "eduquest-library-overrides-v1";
export const LIBRARY_GRADES = [6, 7, 8, 9, 10, 11, 12];
export const MAX_LIBRARY_OVERRIDES = 2000;

const LESSON_ID_PATTERN = /^library-[a-z0-9-]{2,110}$/;
const SUBJECT_ID_PATTERN = /^[a-z0-9-]{2,60}$/;
const TEXT_LIMITS = {
  title: [3, 120],
  knowledge: [10, 2000],
  example: [5, 1000],
  reflection: [5, 1000],
};

export function validLibraryLessonId(id) {
  return typeof id === "string" && LESSON_ID_PATTERN.test(id);
}

export function validateLibraryLesson(lesson) {
  if (!lesson || typeof lesson !== "object" || Array.isArray(lesson)) return "Bài học không hợp lệ.";
  if (!validLibraryLessonId(lesson.id)) return "Mã bài học cần bắt đầu bằng “library-” và chỉ gồm chữ thường, số, dấu gạch ngang.";
  if (typeof lesson.subjectId !== "string" || !SUBJECT_ID_PATTERN.test(lesson.subjectId)) return "Vui lòng chọn môn học hợp lệ.";
  if (!Number.isInteger(lesson.grade) || !LIBRARY_GRADES.includes(lesson.grade)) return "Lớp phải từ 6 đến 12.";
  for (const [field, [min, max]] of Object.entries(TEXT_LIMITS)) {
    const value = lesson[field];
    if (typeof value !== "string" || value.trim().length < min || value.length > max) {
      return `${{ title: "Tên bài", knowledge: "Kiến thức trọng tâm", example: "Ví dụ", reflection: "Tự kiểm tra" }[field]} cần từ ${min} đến ${max} ký tự.`;
    }
  }
  if (typeof lesson.referenceOnly !== "boolean") return "Nhãn tham khảo không hợp lệ.";
  return "";
}

export function normalizeLibraryLesson(lesson) {
  return {
    id: lesson.id,
    subjectId: lesson.subjectId,
    grade: lesson.grade,
    title: lesson.title.trim(),
    knowledge: lesson.knowledge.trim(),
    example: lesson.example.trim(),
    reflection: lesson.reflection.trim(),
    referenceOnly: lesson.referenceOnly,
  };
}

// Overrides map a lesson id to an edited lesson, or to null when the lesson is hidden.
export function validateLibraryOverrides(overrides) {
  if (!overrides || typeof overrides !== "object" || Array.isArray(overrides)) return "Dữ liệu thư viện không hợp lệ.";
  const entries = Object.entries(overrides);
  if (entries.length > MAX_LIBRARY_OVERRIDES) return `Thư viện chỉ lưu tối đa ${MAX_LIBRARY_OVERRIDES} thay đổi.`;
  for (const [id, lesson] of entries) {
    if (!validLibraryLessonId(id)) return `Mã bài học "${id}" không hợp lệ.`;
    if (lesson === null) continue;
    const error = validateLibraryLesson(lesson);
    if (error) return error;
    if (lesson.id !== id) return `Mã bài học "${id}" không khớp nội dung.`;
  }
  return "";
}

export function applyLibraryOverrides(baseLessons, overrides = {}) {
  const baseIds = new Set(baseLessons.map((lesson) => lesson.id));
  const merged = baseLessons
    .filter((lesson) => overrides[lesson.id] !== null)
    .map((lesson) => overrides[lesson.id] ?? lesson);
  const added = Object.entries(overrides)
    .filter(([id, lesson]) => lesson && !baseIds.has(id))
    .map(([, lesson]) => lesson);
  return [...merged, ...added];
}

export function overridesFromRows(rows) {
  const overrides = {};
  for (const row of rows ?? []) {
    if (!validLibraryLessonId(row?.id)) continue;
    if (row.lesson === null) {
      overrides[row.id] = null;
    } else if (!validateLibraryLesson(row.lesson) && row.lesson.id === row.id) {
      overrides[row.id] = row.lesson;
    }
  }
  return overrides;
}

export function loadLocalLibraryOverrides(storage) {
  try {
    const saved = storage.getItem(LIBRARY_OVERRIDES_KEY);
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    return validateLibraryOverrides(parsed) ? {} : parsed;
  } catch (error) {
    if (error instanceof SyntaxError) return {};
    throw error;
  }
}

export function createLibraryLessonId({ subjectId, grade, title }, existingIds) {
  const slug = title.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50) || "bai-moi";
  const base = `library-${subjectId}-${grade}-${slug}`.slice(0, 110);
  let id = base;
  let suffix = 2;
  while (existingIds.has(id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }
  return id;
}
