import assert from "node:assert/strict";
import test from "node:test";
import app from "../server/app.js";
import { pool } from "../server/database.js";

test("AI Tutor endpoint enforces authentication, CSRF, curriculum, quota and server grade", async (t) => {
  const originalQuery = pool.query;
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.ANTHROPIC_API_KEY;
  const originalLog = console.info;
  let session = null;
  let exhausted = false;
  let calls = 0;
  let payload;
  pool.query = async (sql) => {
    if (sql.includes("FROM app_sessions")) return { rows: session ? [session] : [] };
    if (sql.includes("INSERT INTO app_sessions")) return { rows: [] };
    if (sql.includes("FROM app_curriculum")) return { rows: [{ content: [{ id: "math", name: "Toán", topics: [
      { id: "algebra", title: "Đại số", description: "Phương trình" },
    ] }] }] };
    if (sql.includes("app_tutor_quotas")) return { rowCount: exhausted ? 0 : 1 };
    if (sql.includes("FROM learning_sessions")) return { rows: [{ correct: 2, total: 5 }] };
    throw new Error("Unexpected test query");
  };
  globalThis.fetch = async (url, options) => {
    if (String(url).startsWith("https://api.anthropic.com")) {
      calls++;
      payload = JSON.parse(options.body);
      return Response.json({ content: [{ type: "text", text: "Gợi ý học tập" }], usage: { input_tokens: 10, output_tokens: 5 } });
    }
    return originalFetch(url, options);
  };
  console.info = () => {};
  process.env.ANTHROPIC_API_KEY = "test-only-credential";
  const server = app.listen(0, "127.0.0.1");
  await new Promise((resolve) => server.once("listening", resolve));
  t.after(async () => {
    await new Promise((resolve) => server.close(resolve));
    pool.query = originalQuery;
    globalThis.fetch = originalFetch;
    console.info = originalLog;
    if (originalKey === undefined) delete process.env.ANTHROPIC_API_KEY;
    else process.env.ANTHROPIC_API_KEY = originalKey;
    await pool.end();
  });
  const url = `http://127.0.0.1:${server.address().port}/api/app/tutor`;
  const body = { subjectId: "math", topicId: "algebra", question: "Hỏi bài", grade: 12 };
  const request = (data = body, csrf = "valid") => originalFetch(url, { method: "POST",
    headers: { "Content-Type": "application/json", "X-CSRF-Token": csrf, Cookie: "eduquest_session=test-session" },
    body: JSON.stringify(data) });
  assert.equal((await request()).status, 401);
  const login = () => { session = { user_id: `user-${Math.random()}`, role: "learner", csrf_token: "valid", grade: 8 }; };
  login();
  assert.equal((await request(body, "invalid")).status, 403);
  assert.equal((await request({ ...body, question: "" })).status, 400);
  assert.equal((await request({ ...body, topicId: "unknown" })).status, 404);
  assert.equal(calls, 0);
  login();
  exhausted = true;
  assert.equal((await request()).status, 429);
  assert.equal(calls, 0);
  exhausted = false;
  const response = await request();
  assert.equal(response.status, 200);
  assert.equal((await response.json()).answer, "Gợi ý học tập");
  assert.equal(JSON.parse(payload.messages[0].content).grade, 8);
  delete process.env.ANTHROPIC_API_KEY;
  assert.equal((await request()).status, 503);
  process.env.ANTHROPIC_API_KEY = "test-only-credential";
  login();
  for (let i = 0; i < 5; i++) assert.equal((await request()).status, 200);
  const before = calls;
  assert.equal((await request()).status, 429);
  assert.equal(calls, before);
});
