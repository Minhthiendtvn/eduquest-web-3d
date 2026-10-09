import { escapeHtml } from "./html.js";

export function renderTutor({ subjects, tutor, grade, available }) {
  const subject = subjects.find((item) => item.id === tutor.subjectId) ?? subjects[0];
  return `<section class="tutor-page" aria-labelledby="tutor-title">
    <p class="section-overline">CÙNG HIỂU BÀI TỪNG BƯỚC</p><h1 id="tutor-title" tabindex="-1">AI Tutor</h1>
    <p>Gia sư học tập lớp ${escapeHtml(grade)}. Chọn chủ đề và kể điều bạn đang vướng nhé.</p>
    ${!available ? '<p role="status">AI Tutor cần kết nối máy chủ và tài khoản đăng nhập. Bản demo chưa hỗ trợ tính năng này.</p>' : ''}
    <form id="tutor-form" class="tutor-card" aria-busy="${tutor.busy}">
      <div class="tutor-selects"><label>Môn học<select id="tutor-subject" name="subjectId" ${tutor.busy ? 'disabled' : ''}>
        ${subjects.map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === subject?.id ? 'selected' : ''}>${escapeHtml(item.name)}</option>`).join('')}
      </select></label><label>Chủ đề<select id="tutor-topic" name="topicId" ${tutor.busy ? 'disabled' : ''}>
        ${(subject?.topics ?? []).map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === tutor.topicId ? 'selected' : ''}>${escapeHtml(item.title)}</option>`).join('')}
      </select></label></div>
      <label for="tutor-question">Câu hỏi của bạn</label>
      <textarea id="tutor-question" name="question" maxlength="2000" rows="6" required placeholder="Ví dụ: Giúp mình hiểu cách giải phương trình bậc nhất…" ${tutor.busy ? 'disabled' : ''}>${escapeHtml(tutor.question)}</textarea>
      <p class="tutor-note">Gợi ý có 3 cấp: dữ kiện → phương pháp → bước đầu. Nhập cách làm để gia sư điều chỉnh hỗ trợ. Đừng nhập thông tin cá nhân. AI có thể nhầm; hãy kiểm tra lại với bài học hoặc giáo viên.</p>
      <label for="tutor-attempt">Cách làm / điều bạn đang vướng</label>
      <textarea id="tutor-attempt" name="attempt" maxlength="2000" rows="3" ${tutor.busy ? 'disabled' : ''}>${escapeHtml(tutor.attempt ?? "")}</textarea>
      <div class="tutor-actions">${[["hint", "Gợi ý"], ["explain", "Giải thích"], ["ask", "Hỏi AI"], ["check", "Kiểm tra cách làm"], ["solution", "Xem lời giải"]].map(([mode, label]) => `<button class="button ${mode === 'hint' ? 'button--primary' : ''}" name="mode" value="${mode}" type="submit" ${!available || tutor.busy ? 'disabled' : ''}>${label}${mode === 'hint' ? ` (cấp ${Math.min(3, (tutor.hintLevel ?? 0) + 1)})` : ''}</button>`).join('')}</div>
      ${tutor.busy ? '<p role="status">Gia sư đang suy nghĩ…</p>' : ''}
    </form>
    <div aria-live="polite" aria-atomic="true">${tutor.error ? `<p class="tutor-error" role="alert">${escapeHtml(tutor.error)}</p>` : ''}
      ${tutor.answer ? `<article class="tutor-card"><h2>Gợi ý từ gia sư</h2><div class="tutor-answer">${escapeHtml(tutor.answer)}</div>${tutor.truncated ? '<p>Câu trả lời đã đạt giới hạn độ dài. Bạn có thể hỏi một câu cụ thể hơn.</p>' : ''}</article>` : ''}
    </div></section>`;
}
