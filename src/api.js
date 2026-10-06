let csrfToken = "";

export function setCsrfToken(token) {
  csrfToken = typeof token === "string" ? token : "";
}

export async function apiRequest(path, { method = "GET", body, csrf = false } = {}) {
  const headers = new Headers();
  if (body !== undefined) headers.set("Content-Type", "application/json");
  if (csrf) {
    if (!csrfToken) throw new Error("Phiên bảo mật đã hết hạn. Hãy tải lại trang rồi thử lại.");
    headers.set("X-CSRF-Token", csrfToken);
  }
  const response = await fetch(`/api${path}`, {
    method,
    headers,
    credentials: "same-origin",
    cache: "no-store",
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (response.status === 204) return null;
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401) window.dispatchEvent(new CustomEvent("eduquest:session-expired"));
    throw new Error(typeof result.error === "string" ? result.error : `Yêu cầu thất bại (${response.status}).`);
  }
  return result;
}
