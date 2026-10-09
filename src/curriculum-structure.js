// A display taxonomy: source IDs remain stable for saved progress and backend requests.
export const curriculumSource = "https://xaydungchinhsach.chinhphu.vn/10-diem-moi-cua-chuong-trinh-giao-duc-pho-thong-2018-119230206174054873.htm";
import structure from "../api/curriculum-structure.json" with { type: "json" };
const { fields, metadata } = structure;
export const categoryLabels = { required: "Môn bắt buộc", elective: "Môn lựa chọn", activity: "Hoạt động giáo dục", reference: "Tham khảo / chưa phân loại" };
export function topicGrade(topic) {
  const value = Number(topic.grade ?? topic.id?.match(/^grade-(6|7|8|9|10|11|12)-/)?.[1]);
  return value >= 6 && value <= 12 ? value : null;
}
export function courseId(sourceId, item, grade) {
  const high = Number(grade) >= 10;
  if (sourceId === "science" && high) {
    const key = item.id?.replace(/^(?:library-science|grade)-(?:10|11|12)-/, "");
    return Object.entries(fields).find(([, keys]) => keys.includes(key))?.[0] ?? "interdisciplinary";
  }
  if (!high && ["history", "geography"].includes(sourceId)) return "history-geography";
  if (!high && ["music", "visual-arts"].includes(sourceId)) return "arts";
  if (!high && sourceId === "national-defense") return "safety-reference";
  if (high && sourceId === "civics") return "economic-law";
  return sourceId;
}
export function courseInfo(id, grade, fallback = {}) {
  const data = metadata[id];
  const category = ["safety-reference", "interdisciplinary"].includes(id) ? "reference"
    : id === "career-experience" ? "activity"
    : Number(grade) >= 10 && ["physics", "chemistry", "biology", "geography", "economic-law", "technology", "informatics", "music", "visual-arts"].includes(id) ? "elective" : ["math", "science", "history-geography", "arts", "history", "literature", "english", "civics", "physical-education", "national-defense", "geography", "technology", "informatics", "music", "visual-arts"].includes(id) ? "required" : "reference";
  return { ...fallback, id, ...(data ? { name: data[0], shortName: data[1], color: data[2], symbol: data[3] } : {}),
    curriculumCategory: category, categoryLabel: categoryLabels[category] };
}
export function subjectsForGrade(subjects, grade) {
  const groups = new Map();
  for (const source of subjects) {
    for (const topic of source.topics ?? []) {
      const assignedGrade = topicGrade(topic);
      if (assignedGrade !== null && assignedGrade !== Number(grade)) continue;
      const id = courseId(source.id, topic, grade);
      if (!groups.has(id)) groups.set(id, { ...courseInfo(id, grade, source), topics: [] });
      groups.get(id).topics.push({ ...topic, sourceSubjectId: source.id,
        referenceOnly: assignedGrade === null || ["safety-reference", "interdisciplinary"].includes(id) });
    }
  }
  const order = ["required", "elective", "activity", "reference"];
  for (const group of groups.values()) group.topics.sort((a, b) => Number(a.referenceOnly) - Number(b.referenceOnly));
  return [...groups.values()].sort((a, b) => order.indexOf(a.curriculumCategory) - order.indexOf(b.curriculumCategory));
}
export function classifyLibraryLessons(lessons) {
  return lessons.map((lesson) => {
    const id = courseId(lesson.sourceSubjectId ?? lesson.subjectId, lesson, lesson.grade);
    return { ...lesson, title: Number(lesson.grade) >= 10 && ["economic-law", "music", "visual-arts"].includes(id) ? lesson.title.replace(/^Tham khảo: /, "") : lesson.title, sourceSubjectId: lesson.sourceSubjectId ?? lesson.subjectId, subjectId: id,
      // Elective subjects are part of the curriculum, not extracurricular references.
      referenceOnly: ["safety-reference", "interdisciplinary"].includes(id) ||
        (lesson.referenceOnly === true && !["economic-law", "music", "visual-arts"].includes(id)) };
  });
}
export function librarySubjectsForGrade(subjects, lessons, grade) {
  const byId = new Map(subjects.map((subject) => [subject.id, subject]));
  const result = new Map();
  for (const lesson of classifyLibraryLessons(lessons).filter((item) => item.grade === Number(grade))) {
    const source = byId.get(lesson.sourceSubjectId);
    if (source && !result.has(lesson.subjectId)) result.set(lesson.subjectId, courseInfo(lesson.subjectId, grade, source));
  }
  const order = ["required", "elective", "activity", "reference"];
  return [...result.values()].sort((a, b) => order.indexOf(a.curriculumCategory) - order.indexOf(b.curriculumCategory));
}
