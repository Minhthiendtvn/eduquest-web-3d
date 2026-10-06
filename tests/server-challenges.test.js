import assert from "node:assert/strict";
import test from "node:test";
import { buildChallenge, buildReviewChallenge, evaluateChallenge } from "../server/challenges.js";
import { shapeLearnerCurriculum } from "../server/curriculum.js";
import { subjects } from "../src/content.js";

const topic = {
  id: "test-topic",
  questions: Array.from({ length: 4 }, (_, index) => ({
    prompt: `Câu hỏi ${index + 1}`,
    answers: [`Đúng ${index + 1}`, "Sai A", "Sai B", "Sai C"],
    correct: 0,
    explanation: `Giải thích ${index + 1}`,
  })),
};

test("quiz challenges shuffle choices without changing the answer key", () => {
  const challenge = buildChallenge(topic, "quiz");

  assert.equal(challenge.questions.length, 4);
  for (const question of challenge.questions) {
    const original = topic.questions.find((item) => item.prompt === question.prompt);
    assert.equal(question.answers[question.correct], original.answers[original.correct]);
    assert.equal(question.answers.length, 4);
  }
});

test("matching challenges retain the keyed meaning for each term", () => {
  const challenge = buildChallenge(topic, "match");

  assert.equal(challenge.rounds.length, 4);
  for (const round of challenge.rounds) {
    const original = topic.questions.find((item) => item.prompt === round.term);
    assert.equal(round.choices[round.correct].meaning, original.answers[original.correct]);
    assert.equal(round.choices.length, 4);
  }
});

test("edited starter questions replace the curated matching set", () => {
  const math = subjects.find((subject) => subject.id === "math");
  const editedTopic = structuredClone(math.topics[0]);
  editedTopic.questions[0].prompt = "Câu hỏi quản trị đã sửa";
  editedTopic.questions[0].answers[editedTopic.questions[0].correct] = "Đáp án quản trị đã sửa";
  const challenge = buildChallenge(editedTopic, "match");
  const editedRound = challenge.rounds.find((round) => round.term === "Câu hỏi quản trị đã sửa");

  assert.ok(editedRound);
  assert.equal(editedRound.choices[editedRound.correct].meaning, "Đáp án quản trị đã sửa");
});

test("review challenges shuffle choices while keeping the original answer correct", () => {
  const challenge = buildReviewChallenge([{
    prompt: "Câu đã sai",
    options: ["A", "B", "C", "D"],
    correct: "C",
    explanation: "Đáp án C là chính xác.",
  }]);

  assert.equal(challenge.length, 1);
  assert.equal(challenge[0].answers[challenge[0].correct], "C");
});

test("server evaluation derives score and review data from the answer key", () => {
  const challenge = [{
    prompt: "Câu đầu",
    answers: ["Đúng", "Sai A", "Sai B", "Sai C"],
    correct: 0,
    explanation: "Đáp án đầu.",
  }, {
    term: "Thuật ngữ",
    choices: [{ meaning: "Sai" }, { meaning: "Đúng" }, { meaning: "Sai 2" }, { meaning: "Sai 3" }],
    correct: 1,
    explanation: "Ghép với ý nghĩa thứ hai.",
  }];
  const result = evaluateChallenge(challenge, [0, 0]);

  assert.equal(result.correct, 1);
  assert.equal(result.total, 2);
  assert.equal(result.mistakes.length, 1);
  assert.equal(result.mistakes[0].prompt, "Ghép ý nghĩa phù hợp với: Thuật ngữ");
  assert.equal(result.mistakes[0].chosen, "Sai");
  assert.equal(result.mistakes[0].correct, "Đúng");
  assert.equal(evaluateChallenge(challenge, [0]), null);
  assert.equal(evaluateChallenge(challenge, [0, 4]), null);
});

test("learner curriculum omits answer keys without mutating administrator content", () => {
  const curriculum = structuredClone(subjects);
  const firstQuestion = curriculum[0].topics[0].questions[0];
  const shaped = shapeLearnerCurriculum(curriculum);

  assert.equal("correct" in shaped[0].topics[0].questions[0], false);
  assert.equal(typeof firstQuestion.correct, "number");
});
