import { classifyLibraryLessons, librarySubjectsForGrade, curriculumSource } from "./curriculum-structure.js";
import { libraryLessons } from "./library-content.js";
import { escapeHtml } from "./html.js";

function normalizeSearch(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D").toLocaleLowerCase("vi-VN").trim();
}

export function filterLibraryLessons({ grade, subjectId = "", query = "", subjects, lessons = libraryLessons }) {
  const classified = classifyLibraryLessons(lessons);
  const availableSubjects = new Map(librarySubjectsForGrade(subjects, lessons, grade).map((subject) => [subject.id, subject.name]));
  const search = normalizeSearch(query);
  return classified.filter((lesson) =>
    lesson.grade === Number(grade)
    && availableSubjects.has(lesson.subjectId)
    && (!subjectId || lesson.subjectId === subjectId || lesson.sourceSubjectId === subjectId)
    && normalizeSearch(`${lesson.title} ${lesson.knowledge} ${availableSubjects.get(lesson.subjectId)}`).includes(search),
  );
}

export function renderLibrary({ subjects, grade, subjectId, query, lessonId, lessons: allLessons = libraryLessons }) {
  const lessons = filterLibraryLessons({ subjects, grade, subjectId, query, lessons: allLessons });
  const selected = lessons.find((lesson) => lesson.id === lessonId);
  const availableSubjects = librarySubjectsForGrade(subjects, allLessons, grade);
  const subjectById = new Map(availableSubjects.map((subject) => [subject.id, subject]));
  const results = selected
    ? `<article class="library-reading" data-library-subject="${escapeHtml(selected.subjectId)}" aria-labelledby="library-lesson-title">
        <button type="button" class="back-link" data-action="library-back">← Danh sách bài học</button>
        <p class="section-overline">LỚP ${selected.grade} · ${escapeHtml(subjectById.get(selected.subjectId).name)} · ${escapeHtml(subjectById.get(selected.subjectId).categoryLabel)}</p>
        <h2 id="library-lesson-title" tabindex="-1">${escapeHtml(selected.title)}</h2>
        ${selected.referenceOnly ? '<p class="library-reference">Bài tham khảo mở rộng; không khẳng định thuộc môn học chính khóa ở lớp này.</p>' : ""}
        <section class="library-knowledge"><h3>Kiến thức trọng tâm</h3><p>${escapeHtml(selected.knowledge)}</p></section>
        <section class="library-example"><h3>Ví dụ / Liên hệ</h3><p>${escapeHtml(selected.example)}</p></section>
        <section class="library-reflection"><h3>Tự kiểm tra</h3><p>${escapeHtml(selected.reflection)}</p><small>Thử tự trả lời và trao đổi với giáo viên; hoạt động đọc không cộng XP.</small></section>
        <button type="button" class="button button--primary" data-action="subject" data-subject="${escapeHtml(selected.subjectId)}">Khám phá bài luyện ${escapeHtml(subjectById.get(selected.subjectId).shortName ?? subjectById.get(selected.subjectId).name)}</button>
        <p class="library-practice-note">Mở danh sách chủ đề của môn theo khối lớp trong hồ sơ để chọn bài luyện phù hợp; không phải mọi bài đọc đều có quiz tương ứng.</p>
      </article>`
    : `<p class="library-count" role="status">${lessons.length} bài học phù hợp</p>
       ${lessons.length
    ? `<div class="library-grid">${lessons.map((lesson) => `<article class="library-card" data-library-subject="${escapeHtml(lesson.subjectId)}">
        <p class="section-overline">LỚP ${lesson.grade} · ${escapeHtml(subjectById.get(lesson.subjectId).name)} · ${escapeHtml(subjectById.get(lesson.subjectId).categoryLabel)}</p>
        <h2>${escapeHtml(lesson.title)}</h2>
        <p>${escapeHtml(lesson.knowledge)}</p>
        ${lesson.referenceOnly ? '<span class="library-reference">Tham khảo mở rộng</span>' : ""}
        <button type="button" class="button button--outline" data-action="library-lesson" data-lesson-id="${lesson.id}" aria-label="Đọc bài ${escapeHtml(lesson.title)}">Đọc bài →</button>
      </article>`).join("")}</div>`
    : '<div class="library-empty"><h2>Chưa tìm thấy bài phù hợp</h2><p>Thử từ khóa ngắn hơn hoặc chọn tất cả môn.</p><button type="button" class="button button--outline" data-action="library-reset">Xóa bộ lọc môn và từ khóa</button></div>'}`;
  return `<section class="library-page" aria-labelledby="library-title">
    <header class="library-heading"><p class="section-overline">KHÔNG GIAN HỌC TẬP</p><h1 id="library-title" tabindex="-1">Thư viện học tập</h1><p>Đọc một chút, hiểu thêm nhiều. Bài tóm tắt tự biên soạn cho lớp 6–12 và các môn có sẵn.</p></header>
    <form id="library-filter-form" class="library-filters" role="search" aria-label="Tìm bài học">
      <label>Lớp<select id="library-grade" name="grade">${[6, 7, 8, 9, 10, 11, 12].map((value) => `<option value="${value}" ${Number(grade) === value ? "selected" : ""}>Lớp ${value}</option>`).join("")}</select></label>
      <label>Môn<select id="library-subject" name="subjectId"><option value="">Tất cả môn</option>${availableSubjects.map((subject) => `<option value="${escapeHtml(subject.id)}" ${subjectId === subject.id ? "selected" : ""}>${escapeHtml(subject.name)} · ${escapeHtml(subject.categoryLabel)}</option>`).join("")}</select></label>
      <label class="library-search">Tìm bài<input id="library-query" name="query" type="search" maxlength="100" value="${escapeHtml(query)}" placeholder="Tên bài hoặc kiến thức…" /></label>
      <button type="submit" class="button button--primary">Tìm kiếm</button>
    </form>
    ${results}
    <aside class="library-source-note"><strong>Về nội dung thư viện</strong><p>Bộ nhập môn, không thay thế sách giáo khoa hoặc toàn bộ chương trình. Nội dung tự biên soạn, không tóm tắt từng bài của một bộ sách cụ thể. Danh mục theo cấp học: THCS học Khoa học tự nhiên, Lịch sử và Địa lí, Nghệ thuật; THPT tách Vật lí, Hóa học, Sinh học và Giáo dục kinh tế và pháp luật. Môn lựa chọn vẫn thuộc chương trình. Bài liên môn và an toàn ngoài môn chính khóa được ghi nhãn tham khảo. Nội dung giáo dục địa phương và môn tự chọn chưa có học liệu trong bộ này.</p><p>Đối chiếu yêu cầu học tập với giáo viên và <a href="${curriculumSource}" target="_blank" rel="noopener noreferrer">chương trình GDPT của Bộ GD&amp;ĐT</a>.</p></aside>
  </section>`;
}
