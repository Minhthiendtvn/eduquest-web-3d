import test from "node:test";
import assert from "node:assert/strict";
import { callClaude, estimatedCost, reserveTutorQuota, tutorSettings, validateTutorInput } from "../server/tutor.js";
import { renderTutor } from "../src/tutor.js";

const input = { question: "Giải thích phương trình?", subjectId: "math", topicId: "algebra" };
const context = { grade: 8, subject: { name: "Toán" }, topic: { title: "Đại số", description: "Phương trình" } };
const env = { ANTHROPIC_API_KEY: "test-credential-never-real" };
const providerResult = { model: "claude-haiku-4-5-20251001", content: [{ type: "text", text: "Hãy thử bước đầu." }],
  usage: { input_tokens: 100, output_tokens: 20 }, stop_reason: "end_turn" };

test("tutor rejects empty, oversized and malformed input and settings", () => {
  for (const body of [null, [], { ...input, question: "  " }, { ...input, question: "x".repeat(2001) },
    { ...input, subjectId: {} }, { ...input, topicId: "bad/path" }]) {
    assert.throws(() => validateTutorInput(body), { status: 400 });
  }
  assert.deepEqual(validateTutorInput({ ...input, question: "  hỏi  " }), { ...input, question: "hỏi", mode: "ask", hintLevel: 1, attempt: "" });
  assert.throws(() => tutorSettings({ AI_TUTOR_MAX_TOKENS: "Infinity" }), { status: 503 });
});

test("tutor sends trusted grade/context and only logs usage, never prompt or credential", async () => {
  const logs = [];
  const result = await callClaude(input, context, { env, log: (entry) => logs.push(entry), fetchImpl: async (url, options) => {
    assert.equal(url, "https://api.anthropic.com/v1/messages");
    assert.equal(options.headers["x-api-key"], env.ANTHROPIC_API_KEY);
    assert.equal(options.redirect, "error");
    assert.ok(options.signal);
    const payload = JSON.parse(options.body);
    assert.equal(payload.max_tokens, 1024);
    assert.equal(JSON.parse(payload.messages[0].content).grade, 8);
    assert.equal(JSON.parse(payload.messages[0].content).topic, "Đại số");
    return Response.json(providerResult);
  } });
  assert.equal(result.answer, "Hãy thử bước đầu.");
  assert.equal(JSON.parse(logs[0]).inputTokens, 100);
  assert.equal(JSON.parse(logs[0]).estimatedCostUsd, null);
  assert.ok(!logs.join('').includes(input.question));
  assert.ok(!logs.join('').includes(env.ANTHROPIC_API_KEY));
  assert.equal(estimatedCost({ inputTokens: 100, outputTokens: 20 }, {
    ANTHROPIC_INPUT_USD_PER_MILLION: "1", ANTHROPIC_OUTPUT_USD_PER_MILLION: "5" }), 0.0002);
});

test("tutor sanitizes failures, handles timeout, missing key, malformed data and truncation", async () => {
  let called = false;
  await assert.rejects(callClaude(input, context, { env: {}, fetchImpl: () => { called = true; } }), { status: 503 });
  assert.equal(called, false);
  for (const [fetchImpl, status] of [
    [async () => new Response(env.ANTHROPIC_API_KEY, { status: 401 }), 502],
    [async () => new Response(env.ANTHROPIC_API_KEY, { status: 429 }), 429],
    [async () => { throw new DOMException(env.ANTHROPIC_API_KEY, "TimeoutError"); }, 504],
    [async () => { throw new Error(env.ANTHROPIC_API_KEY); }, 502],
    [async () => Response.json({ content: [] }), 502],
  ]) {
    await assert.rejects(callClaude(input, context, { env, fetchImpl }), (error) => {
      assert.equal(error.status, status);
      assert.ok(!error.message.includes(env.ANTHROPIC_API_KEY)); return true;
    });
  }
  const result = await callClaude(input, context, { env, log: () => {}, fetchImpl: async () =>
    Response.json({ ...providerResult, stop_reason: "max_tokens" }) });
  assert.equal(result.truncated, true);
});

test("persistent daily quota rejects exhausted allowance without calling Claude", async () => {
  let query;
  await reserveTutorQuota({ query: async (...args) => { query = args; return { rowCount: 1 }; } }, "user", "2026-10-08", 20);
  assert.deepEqual(query[1], ["user", "2026-10-08", 20]);
  assert.match(query[0], /WHERE app_tutor_quotas.request_count < \$3/);
  await assert.rejects(reserveTutorQuota({ query: async () => ({ rowCount: 0 }) }, "user", "2026-10-08", 20), { status: 429 });
});

test("tutor escapes provider output and disables paid requests in static demo", () => {
  const html = renderTutor({ subjects: [{ id: "math", name: "Toán", topics: [{ id: "algebra", title: "Đại số" }] }],
    tutor: { ...input, answer: '<img src=x onerror="alert(1)">', error: '', busy: false }, grade: "8", available: false });
  assert.ok(!html.includes('<img'));
  assert.match(html, /&lt;img/);
  assert.match(html, /type="submit" disabled/);
});


test("v2 validates modes, hint bounds and student attempts", () => {
  for (const changes of [{ mode: "admin" }, { hintLevel: 0 }, { hintLevel: 4 }, { hintLevel: "2" },
    { attempt: {} }, { attempt: "x".repeat(2001) }, { mode: "check", attempt: " " }]) {
    assert.throws(() => validateTutorInput({ ...input, ...changes }), { status: 400 });
  }
  assert.equal(validateTutorInput({ ...input, mode: "solution" }).mode, "solution");
});

test("v2 passes bounded curriculum and anonymized performance with Socratic instructions", async () => {
  await callClaude(validateTutorInput({ ...input, mode: "hint", hintLevel: 3, attempt: "Em trừ 5" }),
    { ...context, recentPerformance: [{ correct: 1, total: 5 }], topic: { ...context.topic,
      questions: Array.from({ length: 10 }, () => ({ prompt: "x".repeat(2000), explanation: "y".repeat(2000), secret: "hidden" })) } },
    { env, log: () => {}, fetchImpl: async (_, options) => {
      const payload = JSON.parse(options.body);
      const data = JSON.parse(payload.messages[0].content);
      assert.equal(data.mode, "hint"); assert.equal(data.hintLevel, 3);
      assert.equal(data.attempt, "Em trừ 5"); assert.equal(data.references.length, 5);
      assert.equal(data.references[0].prompt.length, 1000);
      assert.ok(!options.body.includes("hidden"));
      assert.deepEqual(data.recentPerformance, [{ correct: 1, total: 5 }]);
      assert.match(payload.system, /Chỉ mode solution/);
      return Response.json(providerResult);
    } });
});
