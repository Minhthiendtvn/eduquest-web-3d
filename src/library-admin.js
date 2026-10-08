import { escapeHtml } from "./html.js";
import { LIBRARY_GRADES } from "./library-overrides.js";

const STATUS_LABELS = {
  original: "",
  edited: "Đã sửa",
  added: "Bài mới",
  hidden: "Đã ẩn",
};
const MAX_LISTED_LESSONS = 120;

function normalizeSearch(value) {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D").toLocaleLowerCase("vi-VN").trim();
}

export function listAdminLibraryLessons(baseLessons, overrides) {
  const baseIds = new Set(baseLessons.map((lesson) => lesson.id));
  return [
    ...baseLessons.map((lesson) => {
      const override = overrides[lesson.id];
      return override === null
        ? { lesson, status: "hidden", isBase: true }
        : { lesson: override ?? lesson, status: override ? "edited" : "original", isBase: true };
    }),
    ...Object.entries(overrides)
      .filter(([id, lesson]) => lesson && !baseIds.has(id))
      .map(([, lesson]) => ({ lesson, status: "added", isBase: false })),
  ];
}

export function filterAdminLibraryLessons(items, { grade = "", subjectId = "", status = "", query = "" }) {
  const search = normalizeSearch(query);
  return items.filter(({ lesson, status: itemStatus }) =>
    (!grade || lesson.grade === Number(grade))
    && (!subjectId || lesson.subjectId === subjectId)
    && (!status || (status === "changed" ? itemStatus !== "original" : itemStatus === status))
    && (!search || normalizeSearch(`${lesson.title} ${lesson.knowledge}`).includes(search)),
  );
}

export function renderAdminLibrary({
  subjects,
  baseLessons,
  overrides,
  filters,
  selectedLessonId,
  creating,
}) {
  const items = listAdminLibraryLessons(baseLessons, overrides);
  const visible = items.filter((item) => item.status !== "hidden").length;
  const counts = Object.fromEntries(["edited", "added", "hidden"].map((status) => [status, items.filter((item) => item.status === status).length]));
  const matches = filterAdminLibraryLessons(items, filters);
  const subjectById = new Map(subjects.map((subject) => [subject.id, subject]));
  const selected = creating ? null : items.find((item) => item.lesson.id === selectedLessonId) ?? null;
  const lesson = selected?.lesson ?? {
    subjectId: filters.subjectId || subjects[0]?.id || "",
    grade: Number(filters.grade) || 6,
    title: "",
    knowledge: "",
    example: "",
    reflection: "",
    referenceOnly: false,
  };
  const option = (value, label, current) => `<option value="${escapeHtml(value)}" ${String(current) === String(value) ? "selected" : ""}>${escapeHtml(label)}</option>`;
  const subjectName = (id) => subjectById.get(id)?.name ?? "Môn không còn trong danh mục";

  const list = matches.length
    ? `${matches.slice(0, MAX_LISTED_LESSONS).map(({ lesson: item, status }) => `<button type="button" class="admin-topic-choice admin-library-choice ${item.id === selected?.lesson.id ? "is-active" : ""} ${status === "hidden" ? "is-hidden" : ""}" data-action="admin-library-lesson" data-lesson-id="${escapeHtml(item.id)}"><strong>${escapeHtml(item.title)}</strong><small>Lớp ${item.grade} · ${escapeHtml(subjectName(item.subjectId))}${STATUS_LABELS[status] ? ` · <span class="admin-library-badge admin-library-badge--${status}">${STATUS_LABELS[status]}</span>` : ""}</small></button>`).join("")}${matches.length > MAX_LISTED_LESSONS ? `<p class="admin-empty">Đang hiện ${MAX_LISTED_LESSONS}/${matches.length} bài. Hãy chọn lớp, môn hoặc từ khóa để thu hẹp.</p>` : ""}`
    : '<p class="admin-empty">Không có bài phù hợp bộ lọc.</p>';

  const editor = selected || creating
    ? `<form class="admin-editor" id="admin-library-form">
        <input type="hidden" name="lessonId" value="${escapeHtml(selected?.lesson.id ?? "")}" />
        <div class="admin-editor-heading"><div><span class="section-overline">${creating ? "THÊM BÀI MỚI" : selected.status === "hidden" ? "BÀI ĐANG ẨN" : "ĐANG CHỈNH SỬA"}</span><h3>${creating ? "Nội dung bài đọc" : escapeHtml(lesson.title)}</h3></div>${selected ? `<code class="admin-library-id">${escapeHtml(selected.lesson.id)}</code>` : ""}</div>
        ${selected?.status === "hidden" ? '<p class="admin-library-note">Bài này đang bị ẩn khỏi thư viện của học sinh. Bấm “Hiện lại bài” để khôi phục.</p>' : ""}
        <div class="admin-library-meta">
          <label class="admin-field"><span>Môn học</span><select name="subjectId" required>${subjects.map((subject) => option(subject.id, subject.name, lesson.subjectId)).join("")}</select></label>
          <label class="admin-field"><span>Lớp</span><select name="grade" required>${LIBRARY_GRADES.map((grade) => option(grade, `Lớp ${grade}`, lesson.grade)).join("")}</select></label>
        </div>
        <label class="admin-field"><span>Tên bài</span><input name="title" minlength="3" maxlength="120" required value="${escapeHtml(lesson.title)}" /></label>
        <label class="admin-field"><span>Kiến thức trọng tâm</span><textarea name="knowledge" minlength="10" maxlength="2000" rows="5" required>${escapeHtml(lesson.knowledge)}</textarea></label>
        <label class="admin-field"><span>Ví dụ / Liên hệ</span><textarea name="example" minlength="5" maxlength="1000" rows="3" required>${escapeHtml(lesson.example)}</textarea></label>
        <label class="admin-field"><span>Tự kiểm tra</span><textarea name="reflection" minlength="5" maxlength="1000" rows="3" required>${escapeHtml(lesson.reflection)}</textarea></label>
        <label class="admin-library-check"><input type="checkbox" name="referenceOnly" ${lesson.referenceOnly ? "checked" : ""} /> <span>Gắn nhãn “Tham khảo mở rộng” (không thuộc môn chính khóa ở lớp này)</span></label>
        <div class="admin-editor-actions">
          ${selected?.status === "hidden" ? "" : `<button class="button button--primary" type="submit">${creating ? "Thêm bài" : "Lưu bài"}</button>`}
          ${selected?.status === "hidden" ? `<button class="button button--primary" type="button" data-action="admin-library-restore" data-lesson-id="${escapeHtml(selected.lesson.id)}">Hiện lại bài</button>` : ""}
          ${selected?.status === "edited" ? `<button class="button button--outline" type="button" data-action="admin-library-restore" data-lesson-id="${escapeHtml(selected.lesson.id)}">Khôi phục bản gốc</button>` : ""}
          ${selected && selected.status !== "hidden" ? `<button class="admin-danger-link" type="button" data-action="${selected.isBase ? "admin-library-hide" : "admin-library-delete"}" data-lesson-id="${escapeHtml(selected.lesson.id)}">${selected.isBase ? "Ẩn bài" : "Xóa bài"}</button>` : ""}
        </div>
      </form>`
    : '<div class="admin-empty admin-no-topic">Chọn một bài ở danh sách bên trái để sửa, hoặc bấm “Thêm bài mới”.</div>';

  return `<section class="admin-panel" aria-labelledby="admin-library-title">
    <div class="admin-panel-heading"><div><h2 id="admin-library-title">Quản lý thư viện</h2><p>${visible} bài đang hiển thị · ${counts.edited} đã sửa · ${counts.added} bài mới · ${counts.hidden} đã ẩn</p></div><button type="button" class="button button--primary" data-action="admin-library-new">＋ Thêm bài mới</button></div>
    <form id="admin-library-filter" class="admin-library-filters" role="search" aria-label="Lọc bài thư viện">
      <label class="admin-field"><span>Lớp</span><select name="grade">${option("", "Tất cả lớp", filters.grade)}${LIBRARY_GRADES.map((grade) => option(grade, `Lớp ${grade}`, filters.grade)).join("")}</select></label>
      <label class="admin-field"><span>Môn</span><select name="subjectId">${option("", "Tất cả môn", filters.subjectId)}${subjects.map((subject) => option(subject.id, subject.name, filters.subjectId)).join("")}</select></label>
      <label class="admin-field"><span>Trạng thái</span><select name="status">${[["", "Tất cả"], ["changed", "Có thay đổi"], ["edited", "Đã sửa"], ["added", "Bài mới"], ["hidden", "Đã ẩn"]].map(([value, label]) => option(value, label, filters.status)).join("")}</select></label>
      <label class="admin-field admin-library-search"><span>Tìm bài</span><input name="query" type="search" maxlength="100" value="${escapeHtml(filters.query)}" placeholder="Tên bài hoặc kiến thức…" /></label>
      <button class="button button--outline" type="submit">Lọc</button>
    </form>
    <div class="admin-content-layout">
      <aside class="admin-curriculum"><p class="admin-library-count" role="status">${matches.length} bài phù hợp</p><div class="admin-topic-list admin-library-list" aria-label="Bài thư viện">${list}</div></aside>
      ${editor}
    </div>
    <div class="admin-library-tools">
      <button class="button button--outline" type="button" data-action="admin-library-export">Tải thay đổi thư viện (JSON)</button>
      <label class="button button--outline admin-upload-button">Nhập thay đổi thư viện<input type="file" accept="application/json,.json" data-action="admin-library-import" /></label>
      <button class="button button--outline" type="button" data-action="admin-library-reset" ${Object.keys(overrides).length ? "" : "disabled"}>Khôi phục toàn bộ thư viện gốc</button>
    </div>
    <p class="admin-storage-note">Thư viện gốc nằm trong mã nguồn; mục này chỉ lưu các bài đã sửa, bài thêm mới và bài bị ẩn. Hoạt động đọc không cộng XP.</p>
  </section>`;
}
