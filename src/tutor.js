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
      <p class="tutor-note">Mỗi câu hỏi là một lượt độc lập. Đừng nhập thông tin cá nhân. AI có thể nhầm; hãy kiểm tra lại với bài học hoặc giáo viên.</p>
      <button class="button button--primary" type="submit" ${!available || tutor.busy ? 'disabled' : ''}>${tutor.busy ? 'Đang suy nghĩ…' : 'Hỏi gia sư'}</button>
    </form>
    <div aria-live="polite" aria-atomic="true">${tutor.error ? `<p class="tutor-error" role="alert">${escapeHtml(tutor.error)}</p>` : ''}
      ${tutor.answer ? `<article class="tutor-card"><h2>Gợi ý từ gia sư</h2><div class="tutor-answer">${escapeHtml(tutor.answer)}</div>${tutor.truncated ? '<p>Câu trả lời đã đạt giới hạn độ dài. Bạn có thể hỏi một câu cụ thể hơn.</p>' : ''}</article>` : ''}
    </div></section>`;
}
