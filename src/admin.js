export const ADMIN_CONTENT_KEY = "eduquest-admin-content-v1";

export function copyCurriculum(subjects) {
  return structuredClone(subjects);
}

export function validateCurriculum(value) {
  if (!Array.isArray(value) || value.length === 0) return "Danh mục môn học phải là một danh sách có dữ liệu.";
  const subjectIds = new Set();
  const topicIds = new Set();

  for (const subject of value) {
    if (!subject || typeof subject !== "object" || typeof subject.id !== "string" || !/^[a-z0-9-]{2,60}$/.test(subject.id)) {
      return "Mỗi môn học cần có mã gồm chữ thường, số hoặc dấu gạch ngang.";
    }
    if (subjectIds.has(subject.id)) return `Mã môn học "${subject.id}" đang bị trùng.`;
    subjectIds.add(subject.id);
    if (typeof subject.name !== "string" || !subject.name.trim() || subject.name.length > 80
      || typeof subject.color !== "string" || !/^[a-z-]{2,24}$/.test(subject.color)
      || typeof subject.symbol !== "string" || subject.symbol.length > 12
      || !Array.isArray(subject.topics) || !subject.topics.length) {
      return `Thông tin môn "${subject.id}" chưa đầy đủ.`;
    }

    for (const topic of subject.topics) {
      if (!topic || typeof topic !== "object" || typeof topic.id !== "string" || !/^[a-z0-9-]{2,80}$/.test(topic.id)) {
        return `Môn "${subject.name}" có chủ đề thiếu mã hợp lệ.`;
      }
      if (topicIds.has(topic.id)) return `Mã chủ đề "${topic.id}" đang bị trùng.`;
      topicIds.add(topic.id);
      if (typeof topic.title !== "string" || !topic.title.trim() || topic.title.length > 100
        || typeof topic.description !== "string" || !topic.description.trim() || topic.description.length > 180
        || typeof topic.level !== "string" || topic.level.length > 40
        || typeof topic.duration !== "string" || topic.duration.length > 40
        || !Array.isArray(topic.questions) || topic.questions.length < 4 || topic.questions.length > 100) {
        return `Chủ đề "${topic.id}" cần tên, mô tả và tối thiểu 4 câu hỏi.`;
      }
      for (const [index, question] of topic.questions.entries()) {
        if (!question || typeof question.prompt !== "string" || !question.prompt.trim() || question.prompt.length > 500
          || !Array.isArray(question.answers) || question.answers.length !== 4
          || question.answers.some((answer) => typeof answer !== "string" || !answer.trim() || answer.length > 300)
          || new Set(question.answers).size !== 4
          || !Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3
          || typeof question.explanation !== "string" || !question.explanation.trim() || question.explanation.length > 1000) {
          return `Câu ${index + 1} của chủ đề "${topic.title}" cần câu hỏi, 4 đáp án khác nhau, đáp án đúng và lời giải.`;
        }
      }
    }
  }

  return "";
}

export function loadManagedCurriculum(storage, starterSubjects) {
  const fallback = copyCurriculum(starterSubjects);
  const saved = storage.getItem(ADMIN_CONTENT_KEY);
  if (!saved) return { subjects: fallback, hasEdits: false, invalid: false };

  try {
    const parsed = JSON.parse(saved);
    const subjects = Array.isArray(parsed) ? parsed : parsed?.subjects;
    const error = validateCurriculum(subjects);
    return error
      ? { subjects: fallback, hasEdits: false, invalid: true }
      : {
        subjects,
        hasEdits: true,
        invalid: false,
        customMatchTopicIds: Array.isArray(parsed?.customMatchTopicIds) ? parsed.customMatchTopicIds : [],
      };
  } catch (error) {
    if (error instanceof SyntaxError) return { subjects: fallback, hasEdits: false, invalid: true };
    throw error;
  }
}

export function slugifyTopic(title, topicIds) {
  const base = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50) || "chu-de-moi";
  let id = base;
  let suffix = 2;
  while (topicIds.has(id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }
  return id;
}

export function exportLearnerCsv(history) {
  const quote = (value) => {
    const text = String(value);
    const safeText = /^[\u0009\u000d=+\-@]/.test(text) ? `'${text}` : text;
    return `"${safeText.replaceAll('"', '""')}"`;
  };
  const rows = [
    ["Ngày", "Môn học", "Chủ đề", "Chế độ", "Số câu đúng", "Tổng câu", "XP"],
    ...history.map((entry) => [
      entry.date,
      entry.subjectName,
      entry.topicTitle,
      entry.mode === "match" ? "Ghép thẻ" : entry.mode === "review" ? "Ôn tập" : "Quiz",
      entry.correct,
      entry.total,
      entry.experiencePoints,
    ]),
  ];
  return `\uFEFF${rows.map((row) => row.map(quote).join(",")).join("\r\n")}`;
}

export function exportLearnerSummaryCsv(learners) {
  const quote = (value) => {
    const text = String(value);
    const safeText = /^[\u0009\u000d=+\-@]/.test(text) ? `'${text}` : text;
    return `"${safeText.replaceAll('"', '""')}"`;
  };
  const rows = [
    ["Tên đăng nhập", "Tên hiển thị", "Khối", "Lớp", "Lượt học", "Số câu đúng", "Tổng câu", "Độ chính xác (%)", "XP", "Ngày tạo"],
    ...learners.map((learner) => [
      learner.username,
      learner.displayName,
      learner.grade,
      learner.className ?? "",
      learner.completed,
      learner.correct,
      learner.totalAnswered,
      learner.totalAnswered ? Math.round(learner.correct / learner.totalAnswered * 100) : 0,
      learner.experiencePoints,
      learner.createdAt,
    ]),
  ];
  return `\uFEFF${rows.map((row) => row.map(quote).join(",")).join("\r\n")}`;
}

export function renderAdminQuestionCard(question, index, questionCount) {
  return `<fieldset class="admin-question-card"><legend><strong class="admin-question-number">Câu hỏi ${index + 1}</strong><button type="button" class="admin-danger-link" data-action="admin-remove-question" aria-label="Xóa câu hỏi ${index + 1}" ${questionCount <= 4 ? "disabled" : ""}>Xóa câu</button></legend>
    <label class="admin-field"><span>Nội dung câu hỏi</span><textarea name="prompt" maxlength="500" rows="2" required>${escapeHtml(question.prompt)}</textarea></label>
    <div class="admin-answer-grid">${question.answers.map((answer, answerIndex) => `<label class="admin-field"><span>Đáp án ${String.fromCharCode(65 + answerIndex)}</span><input name="answer" maxlength="300" required value="${escapeHtml(answer)}" /></label>`).join("")}</div>
    <label class="admin-field"><span>Đáp án đúng</span><select name="correct">${question.answers.map((answer, answerIndex) => `<option value="${answerIndex}" ${question.correct === answerIndex ? "selected" : ""}>${String.fromCharCode(65 + answerIndex)} · ${escapeHtml(answer || "Chưa nhập đáp án")}</option>`).join("")}</select></label>
    <label class="admin-field"><span>Lời giải</span><textarea name="explanation" maxlength="1000" rows="2" required>${escapeHtml(question.explanation)}</textarea></label>
  </fieldset>`;
}

export function renderAdmin({
  subjects,
  progress,
  tab,
  selectedSubjectId,
  selectedTopicId,
  notice,
  hasContentEdits,
  creatingTopic,
  apiMode = false,
  overview = null,
  classes = [],
  learners = [],
  learnerHistory = [],
  selectedLearnerId = "",
  selectedClassId = "",
  administrators = [],
  libraryPanel = "",
  tutorShowContext = false,
}) {
  const topicCount = subjects.reduce((count, subject) => count + subject.topics.length, 0);
  const questionCount = subjects.reduce((count, subject) => count + subject.topics.reduce((total, topic) => total + topic.questions.length, 0), 0);
  const totalLearners = apiMode ? Number(overview?.learners ?? 0) : 0;
  const totalClasses = apiMode ? Number(overview?.classes ?? 0) : 0;
  const totalSessions = apiMode ? Number(overview?.sessions ?? 0) : progress.completed;
  const systemAccuracy = apiMode ? Number(overview?.accuracy ?? 0) : progress.totalAnswered ? Math.round(progress.correct / progress.totalAnswered * 100) : 0;
  const history = progress.history.map((entry) => {
    const subject = subjects.find((item) => item.id === entry.subjectId);
    const topic = subject?.topics.find((item) => item.id === entry.topicId);
    return { ...entry, subjectName: subject?.name ?? "Môn đã lưu trữ", topicTitle: topic?.title ?? "Chủ đề đã lưu trữ" };
  });
  const selectedSubject = subjects.find((subject) => subject.id === selectedSubjectId) ?? subjects[0];
  const selectedTopic = creatingTopic ? null : selectedSubject?.topics.find((topic) => topic.id === selectedTopicId) ?? selectedSubject?.topics[0];
  const editorQuestions = selectedTopic?.questions
    ?? Array.from({ length: 4 }, () => ({ prompt: "", answers: ["", "", "", ""], correct: 0, explanation: "" }));
  const tabs = [
    ["overview", "Tổng quan"],
    ["content", "Môn học & nội dung"],
    ["library", "Thư viện"],
    ...(apiMode ? [["tutor", "AI Tutor"]] : []),
    ...(apiMode ? [["classes", "Lớp học"]] : []),
    ...(apiMode ? [["learners", "Người học"]] : [["learners", "Người học"]]),
    ...(apiMode ? [["administrators", "Quản trị viên"]] : []),
    ["data", "Dữ liệu & sao lưu"],
  ];
  const tabBar = `<nav class="admin-tabs" aria-label="Khu vực quản trị">${tabs.map(([id, label]) => `<button type="button" class="admin-tab ${tab === id ? "is-active" : ""}" data-action="admin-tab" data-tab="${id}" aria-current="${tab === id ? "page" : "false"}">${label}</button>`).join("")}</nav>`;
  const localNotice = apiMode
    ? `<aside class="admin-local-notice admin-server-notice"><strong>Máy chủ đã kết nối · Dữ liệu đa thiết bị</strong><span>Quản trị viên đã đăng nhập. Tài khoản, lớp học, nội dung và tiến độ được lưu trong cơ sở dữ liệu của máy chủ.</span></aside>`
    : `<aside class="admin-local-notice" role="note"><strong>Chế độ quản trị cục bộ</strong><span>Không có máy chủ, tài khoản xác thực hoặc dữ liệu học sinh dùng chung. Nội dung và tiến độ chỉ nằm trên thiết bị/trình duyệt này.</span></aside>`;

  let panel = "";
  if (tab === "tutor" && apiMode) {
    panel = `<section class="admin-panel"><h2>Giao diện AI Tutor</h2><form id="admin-tutor-settings"><label><input type="checkbox" name="showContext" ${tutorShowContext ? 'checked' : ''} /> Hiện lựa chọn môn học và chủ đề</label><p>Tắt để học sinh nhập câu hỏi trực tiếp. Có thể bật lại bất cứ lúc nào. Áp dụng cho toàn hệ thống sau khi tải lại trang.</p><button class="button button--primary" type="submit">Lưu cài đặt</button></form></section>`;
  } else if (tab === "library") {
    panel = libraryPanel;
  } else if (tab === "content") {
    panel = `
      <section class="admin-panel" aria-labelledby="admin-content-title">
        <div class="admin-panel-heading"><div><h2 id="admin-content-title">Ngân hàng nội dung</h2><p>${subjects.length} môn · ${topicCount} chủ đề · ${questionCount} câu hỏi</p></div><span class="admin-status ${hasContentEdits ? "is-edited" : ""}">${hasContentEdits ? "Có thay đổi cục bộ" : "Nội dung mẫu"}</span></div>
        <div class="admin-content-layout">
          <aside class="admin-curriculum"><label class="admin-field"><span>Môn học</span><select data-action="admin-subject">${subjects.map((subject) => `<option value="${subject.id}" ${subject.id === selectedSubject?.id ? "selected" : ""}>${escapeHtml(subject.name)}</option>`).join("")}</select></label>
          <div class="admin-topic-list" aria-label="Chủ đề">${selectedSubject?.topics.map((topic) => `<button type="button" class="admin-topic-choice ${topic.id === selectedTopic?.id ? "is-active" : ""}" data-action="admin-topic" data-topic="${topic.id}"><strong>${escapeHtml(topic.title)}</strong><small>${topic.questions.length} câu · ${escapeHtml(topic.level ?? "CHỦ ĐỀ")}</small></button>`).join("") || `<p class="admin-empty">Môn này chưa có chủ đề.</p>`}</div>
          <button type="button" class="button button--outline admin-add-topic" data-action="admin-new-topic" ${selectedSubject ? "" : "disabled"}>＋ Tạo chủ đề</button>
        </aside>
        ${selectedTopic || creatingTopic ? `<form class="admin-editor" id="admin-topic-form">
          <input type="hidden" name="subjectId" value="${selectedSubject.id}" /><input type="hidden" name="topicId" value="${selectedTopic?.id ?? ""}" />
          <div class="admin-editor-heading"><div><span class="section-overline">${creatingTopic ? "TẠO CHỦ ĐỀ MỚI" : "ĐANG CHỈNH SỬA"}</span><h3>${creatingTopic ? "Nội dung chủ đề" : escapeHtml(selectedTopic.title)}</h3></div>${selectedTopic ? `<button type="button" class="admin-danger-link" data-action="admin-delete-topic" data-topic="${selectedTopic.id}">Xóa chủ đề</button>` : ""}</div>
          <label class="admin-field"><span>Tên chủ đề</span><input name="title" maxlength="100" required value="${escapeHtml(selectedTopic?.title ?? "")}" /></label>
          <label class="admin-field"><span>Mô tả</span><input name="description" maxlength="180" required value="${escapeHtml(selectedTopic?.description ?? "")}" /></label>
          <div class="admin-question-list"><div class="admin-question-list-heading"><div><strong>Ngân hàng câu hỏi</strong><small>${editorQuestions.length} câu · mỗi câu có 4 lựa chọn và lời giải</small></div><button type="button" class="button button--outline admin-add-question" data-action="admin-add-question">＋ Thêm câu hỏi</button></div>${editorQuestions.map((question, index) => renderAdminQuestionCard(question, index, editorQuestions.length)).join("")}</div>
          <div class="admin-editor-actions"><button class="button button--primary" type="submit">${creatingTopic ? "Tạo chủ đề" : "Lưu chủ đề"}</button><button class="button button--outline" type="button" data-action="admin-new-topic">Tạo chủ đề mới</button></div>
        </form>` : `<div class="admin-empty admin-no-topic">Môn học này chưa có chủ đề. Tạo chủ đề để bắt đầu xây dựng nội dung.</div>`}
      </section>`;
  } else if (tab === "classes" && apiMode) {
    panel = `<section class="admin-panel" aria-labelledby="admin-classes-title"><div class="admin-panel-heading"><div><h2 id="admin-classes-title">Quản lý lớp học</h2><p>Tạo lớp, phân khối và xem mã lớp dùng khi cấp tài khoản.</p></div></div>
      <form id="admin-class-form" class="admin-create-row"><label class="admin-field"><span>Tên lớp</span><input name="name" maxlength="80" placeholder="Ví dụ: 9A1" required /></label><label class="admin-field"><span>Khối</span><select name="grade">${Array.from({ length: 7 }, (_, i) => i + 6).map((grade) => `<option value="${grade}">Lớp ${grade}</option>`).join("")}</select></label><button class="button button--primary" type="submit">＋ Tạo lớp</button></form>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Lớp</th><th>Học sinh</th><th>Mã lớp</th><th>Thao tác</th></tr></thead><tbody>${classes.length ? classes.map((item) => `<tr><td><form class="admin-class-edit" data-class-id="${escapeHtml(item.id)}"><input name="name" aria-label="Tên lớp" value="${escapeHtml(item.name)}" maxlength="80" required /><select name="grade" aria-label="Khối">${Array.from({ length: 7 }, (_, i) => i + 6).map((grade) => `<option value="${grade}" ${Number(item.grade) === grade ? "selected" : ""}>Lớp ${grade}</option>`).join("")}</select><button class="button button--outline" type="submit">Lưu</button></form></td><td>${item.learnerCount}</td><td><code>${escapeHtml(item.joinCode)}</code></td><td><button type="button" class="admin-danger-link" data-action="admin-delete-class" data-class-id="${escapeHtml(item.id)}" ${item.learnerCount ? "disabled title=\"Chuyển học sinh sang lớp khác trước\"" : ""}>Xóa</button></td></tr>`).join("") : `<tr><td colspan="4" class="admin-empty-cell">${overview?.loading ? "Đang tải lớp học…" : "Chưa có lớp. Tạo lớp để bắt đầu cấp tài khoản học sinh."}</td></tr>`}</tbody></table></div></section>`;
  } else if (tab === "learners" && apiMode) {
    panel = `<section class="admin-panel" aria-labelledby="admin-learners-title">    <div class="admin-panel-heading"><div><h2 id="admin-learners-title">Tài khoản người học</h2><p>Tạo hoặc cập nhật tài khoản; mật khẩu mới chỉ hiển thị lúc nhập và không thể xem lại.</p></div><button type="button" class="button button--outline" data-action="admin-export-learner-csv">Tải CSV</button></div>
      <form id="admin-learner-form" class="admin-create-learner"><label class="admin-field"><span>Tên đăng nhập</span><input name="username" minlength="3" maxlength="40" pattern="[a-z0-9][a-z0-9_.-]{2,39}" autocomplete="off" required /></label><label class="admin-field"><span>Tên hiển thị</span><input name="displayName" minlength="2" maxlength="32" required /></label><label class="admin-field"><span>Mật khẩu tạm (từ 12 ký tự)</span><input name="password" type="password" minlength="12" maxlength="128" autocomplete="new-password" required /></label><label class="admin-field"><span>Lớp</span><select name="classId"><option value="">Chưa xếp lớp</option>${classes.map((item) => `<option value="${escapeHtml(item.id)}">Lớp ${item.grade} · ${escapeHtml(item.name)}</option>`).join("")}</select></label><label class="admin-field"><span>Khối</span><select name="grade">${Array.from({ length: 7 }, (_, i) => i + 6).map((grade) => `<option value="${grade}">Lớp ${grade}</option>`).join("")}</select></label><button class="button button--primary" type="submit">＋ Tạo tài khoản</button></form>
      <div class="admin-learner-toolbar"><label class="admin-field"><span>Lọc theo lớp</span><select data-action="admin-class-filter"><option value="">Tất cả lớp</option>${classes.map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === selectedClassId ? "selected" : ""}>Lớp ${item.grade} · ${escapeHtml(item.name)}</option>`).join("")}</select></label><span>${learners.length} tài khoản</span></div>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Tài khoản / học sinh</th><th>Lớp</th><th>Tiến độ</th><th>Cập nhật tài khoản</th></tr></thead><tbody>${learners.length ? learners.map((learner) => `<tr><td><strong>${escapeHtml(learner.displayName)}</strong><small>@${escapeHtml(learner.username)} · khối ${learner.grade}</small><button type="button" class="admin-history-button" data-action="admin-view-history" data-learner-id="${escapeHtml(learner.id)}">${selectedLearnerId === learner.id ? "Lịch sử đã tải" : "Xem lịch sử"}</button></td><td>${escapeHtml(learner.className ?? "Chưa xếp lớp")}</td><td>${learner.completed} lượt · ${learner.totalAnswered ? Math.round(learner.correct / learner.totalAnswered * 100) : 0}% · ${learner.experiencePoints} XP</td><td><form class="admin-learner-edit" data-learner-id="${escapeHtml(learner.id)}"><input name="displayName" aria-label="Tên hiển thị" value="${escapeHtml(learner.displayName)}" maxlength="32" required /><select name="grade" aria-label="Khối">${Array.from({ length: 7 }, (_, i) => i + 6).map((grade) => `<option value="${grade}" ${Number(learner.grade) === grade ? "selected" : ""}>${grade}</option>`).join("")}</select><select name="classId" aria-label="Lớp"><option value="">Chưa xếp lớp</option>${classes.map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === learner.classId ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}</select><input name="dailyGoal" type="hidden" value="${learner.dailyGoal}" /><input name="password" type="password" minlength="12" maxlength="128" autocomplete="new-password" aria-label="Mật khẩu mới nếu cần" placeholder="Mật khẩu mới (tùy chọn)" /><button class="button button--outline" type="submit">Lưu</button><button class="admin-danger-link" type="button" data-action="admin-delete-learner" data-learner-id="${escapeHtml(learner.id)}">Xóa</button></form></td></tr>${selectedLearnerId === learner.id ? `<tr class="admin-history-row"><td colspan="4"><strong>Lịch sử gần đây của ${escapeHtml(learner.displayName)}</strong><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Ngày</th><th>Môn</th><th>Chủ đề</th><th>Chế độ</th><th>Kết quả</th><th>XP</th></tr></thead><tbody>${learnerHistory.length ? learnerHistory.map((entry) => `<tr><td>${escapeHtml(entry.date)}</td><td>${escapeHtml(subjects.find((subject) => subject.id === entry.subjectId)?.name ?? "Môn đã lưu trữ")}</td><td>${escapeHtml(subjects.flatMap((subject) => subject.topics).find((topic) => topic.id === entry.topicId)?.title ?? "Chủ đề đã lưu trữ")}</td><td>${entry.mode === "match" ? "Ghép thẻ" : entry.mode === "review" ? "Ôn tập" : "Quiz"}</td><td>${entry.correct}/${entry.total}</td><td>${entry.experiencePoints}</td></tr>`).join("") : `<tr><td colspan="6" class="admin-empty-cell">Chưa có lịch sử học.</td></tr>`}</tbody></table></div></td></tr>` : ""}`).join("") : `<tr><td colspan="4" class="admin-empty-cell">${overview?.loading ? "Đang tải tài khoản…" : "Chưa có tài khoản học sinh. Tạo tài khoản phía trên."}</td></tr>`}</tbody></table></div></section>`;
  } else if (tab === "learners") {
    const accuracy = progress.totalAnswered ? Math.round(progress.correct / progress.totalAnswered * 100) : 0;
    panel = `<section class="admin-panel" aria-labelledby="admin-learners-title"><div class="admin-panel-heading"><div><h2 id="admin-learners-title">Người học trên thiết bị này</h2><p>Đây là hồ sơ trình duyệt hiện tại, không phải danh sách tài khoản toàn hệ thống.</p></div><button type="button" class="button button--outline" data-action="admin-export-csv">Tải CSV tiến độ</button></div>
      <div class="admin-learner-card"><span class="avatar">${escapeHtml([...progress.displayName][0].toLocaleUpperCase("vi-VN"))}</span><div class="admin-learner-name"><strong>${escapeHtml(progress.displayName)}</strong><span>Lớp ${escapeHtml(progress.grade)} · Hồ sơ cục bộ</span></div><div><strong>${progress.completed}</strong><small>lượt học</small></div><div><strong>${accuracy}%</strong><small>chính xác</small></div><div><strong>${progress.experiencePoints}</strong><small>XP</small></div></div>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Ngày</th><th>Môn / chủ đề</th><th>Chế độ</th><th>Kết quả</th><th>XP</th></tr></thead><tbody>${history.length ? history.map((entry) => `<tr><td>${escapeHtml(entry.date)}</td><td><strong>${escapeHtml(entry.subjectName)}</strong><small>${escapeHtml(entry.topicTitle)}</small></td><td>${entry.mode === "match" ? "Ghép thẻ" : entry.mode === "review" ? "Ôn tập" : "Quiz"}</td><td>${entry.correct}/${entry.total}</td><td>${entry.experiencePoints}</td></tr>`).join("") : `<tr><td colspan="5" class="admin-empty-cell">Chưa có lượt học nào được lưu trên thiết bị này.</td></tr>`}</tbody></table></div>
      </section>`;
  } else if (tab === "administrators" && apiMode) {
    panel = `<section class="admin-panel" aria-labelledby="admin-administrators-title">
      <div class="admin-panel-heading"><div><h2 id="admin-administrators-title">Tài khoản quản trị viên</h2><p>Chỉ quản trị viên đã đăng nhập mới có thể tạo tài khoản có quyền quản trị.</p></div></div>
      <form id="admin-administrator-form" class="admin-create-learner admin-create-administrator">
        <label class="admin-field"><span>Tên đăng nhập</span><input name="username" minlength="3" maxlength="40" pattern="[a-z0-9][a-z0-9_.-]{2,39}" autocomplete="off" required /></label>
        <label class="admin-field"><span>Tên hiển thị</span><input name="displayName" minlength="2" maxlength="32" required /></label>
        <label class="admin-field"><span>Mật khẩu (ít nhất 12 ký tự)</span><input name="password" type="password" minlength="12" maxlength="128" autocomplete="new-password" required /></label>
        <label class="admin-field"><span>Nhập lại mật khẩu</span><input name="passwordConfirm" type="password" minlength="12" maxlength="128" autocomplete="new-password" required /></label>
        <button class="button button--primary" type="submit">＋ Tạo quản trị viên</button>
      </form>
      <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Quản trị viên</th><th>Tên đăng nhập</th><th>Ngày tạo</th></tr></thead><tbody>${administrators.length ? administrators.map((item) => `<tr><td>${escapeHtml(item.displayName)}</td><td>@${escapeHtml(item.username)}</td><td>${escapeHtml(item.createdAt ? new Date(item.createdAt).toLocaleDateString("vi-VN") : "—")}</td></tr>`).join("") : `<tr><td colspan="3" class="admin-empty-cell">Chưa tải được danh sách quản trị viên.</td></tr>`}</tbody></table></div>
      <p class="admin-storage-note">Không thể tự đăng ký quyền quản trị. Hãy chỉ cấp tài khoản này cho người đáng tin cậy.</p>
    </section>`;
  } else if (tab === "data") {
    panel = apiMode
      ? `<section class="admin-panel" aria-labelledby="admin-data-title"><div class="admin-panel-heading"><div><h2 id="admin-data-title">Dữ liệu & sao lưu</h2><p>Dữ liệu thật được lưu tại PostgreSQL; sao lưu cơ sở dữ liệu ở máy chủ/hosting.</p></div><button class="button button--primary" type="button" data-action="admin-export">Tải nội dung môn học</button></div>
        <div class="admin-content-import"><label class="button button--outline admin-upload-button">Nhập tệp môn học JSON<input type="file" accept="application/json,.json" data-action="admin-import-curriculum" /></label><small>Chọn tệp chứa danh sách môn học. Tệp được kiểm tra trước khi cập nhật dữ liệu trên máy chủ.</small></div>
        <div class="admin-data-grid"><article class="admin-data-card"><span>01</span><h3>Sao lưu toàn bộ PostgreSQL</h3><p>Chạy <code>docker compose exec -T db pg_dump -U eduquest eduquest &gt; eduquest-backup.sql</code> trong môi trường an toàn.</p></article>
        <article class="admin-data-card"><span>02</span><h3>Khôi phục cơ sở dữ liệu</h3><p>Sau khi kiểm tra tệp sao lưu: <code>docker compose exec -T db psql -U eduquest eduquest &lt; eduquest-backup.sql</code>. Không tải bản sao lưu có dữ liệu cá nhân vào Git.</p></article>
        <article class="admin-data-card admin-data-card--warning"><span>03</span><h3>Quản lý dữ liệu học sinh</h3><p>Xem, chỉnh sửa, xuất hoặc xóa tài khoản trong mục “Người học”. Dữ liệu cá nhân chỉ hiển thị cho quản trị viên đăng nhập.</p></article>
        <article class="admin-data-card"><span>04</span><h3>Chính sách lưu trữ</h3><p>Phiên đăng nhập 7 ngày, lịch sử mỗi người học giữ tối đa 100 lượt trên giao diện; PostgreSQL lưu hồ sơ và lịch sử đến khi xóa tài khoản.</p></article></div></section>`
      : `<section class="admin-panel" aria-labelledby="admin-data-title"><div class="admin-panel-heading"><div><h2 id="admin-data-title">Dữ liệu & sao lưu</h2><p>Sao lưu tiến độ và nội dung tùy chỉnh để chuyển hoặc khôi phục thủ công.</p></div></div>
        <div class="admin-data-grid"><article class="admin-data-card"><span>01</span><h3>Sao lưu toàn bộ</h3><p>Tải xuống hồ sơ, lịch sử học và nội dung đã chỉnh sửa trong một tệp JSON.</p><button class="button button--primary" type="button" data-action="admin-export">Tải bản sao lưu</button></article>
        <article class="admin-data-card"><span>02</span><h3>Khôi phục bản sao lưu</h3><p>Nhập tệp EduQuest JSON hợp lệ. Dữ liệu hiện tại sẽ được thay thế sau khi xác nhận.</p><label class="button button--outline admin-upload-button">Chọn tệp JSON<input type="file" accept="application/json,.json" data-action="admin-import" /></label></article>
        <article class="admin-data-card admin-data-card--warning"><span>03</span><h3>Khôi phục nội dung mẫu</h3><p>Xóa các thay đổi cục bộ ở môn học và chủ đề, không tác động đến tiến độ học tập.</p><button class="button button--outline" type="button" data-action="admin-reset-content">Khôi phục nội dung</button></article>
        <article class="admin-data-card admin-data-card--warning"><span>04</span><h3>Xóa tiến độ thiết bị</h3><p>Xóa hồ sơ học tập và lịch sử trên trình duyệt này. Tải bản sao lưu trước nếu cần.</p><button class="button button--danger" type="button" data-action="admin-reset-progress">Xóa tiến độ</button></article></div>
        <p class="admin-storage-note">Các thao tác dữ liệu chỉ ảnh hưởng đến trình duyệt hiện tại. Chưa có đồng bộ đám mây hay phân quyền quản trị.</p></section>`;
  } else {
    const activeDays = new Set(history.map((entry) => entry.date)).size;
    const accuracy = progress.totalAnswered ? Math.round(progress.correct / progress.totalAnswered * 100) : 0;
    const popular = subjects.map((subject) => ({ subject, runs: history.filter((entry) => entry.subjectId === subject.id).length })).sort((a, b) => b.runs - a.runs).slice(0, 5);
    const statLearners = apiMode ? totalLearners : 0;
    const statClasses = apiMode ? totalClasses : 0;
    const statAccuracy = apiMode ? systemAccuracy : accuracy;
    const usage = apiMode
      ? subjects.map((subject) => ({ subject, runs: Number(overview?.usage?.find((item) => item.subjectId === subject.id)?.sessions ?? 0) })).sort((a, b) => b.runs - a.runs).slice(0, 5)
      : popular;
    panel = `<div class="admin-stat-grid"><article class="admin-stat"><span>${apiMode ? "NGƯỜI HỌC" : "MÔN HỌC"}</span><strong>${apiMode ? statLearners : subjects.length}</strong><small>${apiMode ? `${statClasses} lớp đang quản lý` : "nhóm môn hiện có"}</small></article><article class="admin-stat"><span>CHỦ ĐỀ</span><strong>${topicCount}</strong><small>${questionCount} câu hỏi</small></article><article class="admin-stat"><span>LƯỢT HỌC</span><strong>${apiMode ? totalSessions : progress.completed}</strong><small>${apiMode ? "trên toàn hệ thống" : `${activeDays} ngày có hoạt động`}</small></article><article class="admin-stat"><span>ĐỘ CHÍNH XÁC</span><strong>${statAccuracy}%</strong><small>${apiMode ? "trung bình toàn hệ thống" : `${progress.experiencePoints} XP tích lũy`}</small></article></div>
      <div class="admin-overview-grid"><section class="admin-panel"><div class="admin-panel-heading"><div><h2>Sử dụng theo môn</h2><p>${apiMode ? "Lượt học đã lưu trên máy chủ." : "Lượt học đã lưu trong trình duyệt này."}</p></div></div><div class="admin-usage-list">${usage.map(({ subject, runs }) => `<div><span>${escapeHtml(subject.name)}</span><strong>${runs}</strong><i><span style="width:${(apiMode ? totalSessions : history.length) ? Math.max(runs / (apiMode ? totalSessions : history.length) * 100, runs ? 8 : 0) : 0}%"></span></i></div>`).join("")}</div>${!(apiMode ? totalSessions : history.length) ? `<p class="admin-empty">Biểu đồ sẽ có dữ liệu sau khi người học hoàn thành thử thách.</p>` : ""}</section>
      <section class="admin-panel"><div class="admin-panel-heading"><div><h2>Tác vụ nhanh</h2><p>Quản lý nội dung, lớp và tài khoản.</p></div></div><div class="admin-quick-actions"><button type="button" data-action="admin-tab" data-tab="content">✎ <span><strong>Quản lý nội dung</strong><small>Sửa câu hỏi, tạo hoặc xóa chủ đề</small></span></button><button type="button" data-action="admin-tab" data-tab="library">❒ <span><strong>Quản lý thư viện</strong><small>Sửa, thêm, ẩn bài đọc cho học sinh</small></span></button>${apiMode ? `<button type="button" data-action="admin-tab" data-tab="classes">▦ <span><strong>Quản lý lớp học</strong><small>Tạo lớp, sửa thông tin, cấp mã lớp</small></span></button>` : ""}<button type="button" data-action="admin-tab" data-tab="learners">◉ <span><strong>Xem tiến độ người học</strong><small>${apiMode ? "Quản lý tài khoản và lớp trên máy chủ" : "Lịch sử lưu trên thiết bị này"}</small></span></button><button type="button" data-action="admin-tab" data-tab="data">⇧ <span><strong>Sao lưu dữ liệu</strong><small>Tải xuống hoặc nhập bản sao lưu</small></span></button></div></section></div>`;
  }

  return `<section class="admin-page"><header class="admin-page-heading"><div><p class="section-overline">BẢNG ĐIỀU KHIỂN</p><h1 tabindex="-1">Quản trị EduQuest</h1><p>Quản lý nội dung học tập và xem tình hình sử dụng${apiMode ? " của toàn hệ thống." : " bản thử nghiệm."}</p></div><span class="admin-demo-badge">${apiMode ? "ĐÃ KẾT NỐI MÁY CHỦ" : "BẢN THỬ NGHIỆM"}</span></header>${localNotice}${tabBar}${notice ? `<p class="admin-feedback" role="status">${escapeHtml(notice)}</p>` : ""}${panel}</section>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}
