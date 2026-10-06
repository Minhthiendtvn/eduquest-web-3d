import test from "node:test";
import assert from "node:assert/strict";
import { matchSets, subjects } from "../src/content.js";

const expectedSubjects = [
  "math",
  "science",
  "literature",
  "english",
  "history",
  "geography",
  "informatics",
  "technology",
  "civics",
  "physical-education",
  "music",
  "visual-arts",
  "national-defense",
  "career-experience",
];

test("covers the core subjects offered to secondary students", () => {
  assert.deepEqual(subjects.map((subject) => subject.id), expectedSubjects);
});

test("every subject and topic has unique IDs", () => {
  const subjectIds = subjects.map((subject) => subject.id);
  assert.equal(new Set(subjectIds).size, subjectIds.length);

  for (const subject of subjects) {
    assert.ok(subject.name.trim(), `${subject.id} name`);
    assert.ok(subject.description.trim(), `${subject.id} description`);
    assert.ok(subject.category.trim(), `${subject.id} category`);
    const topicIds = subject.topics.map((topic) => topic.id);
    assert.equal(new Set(topicIds).size, topicIds.length, `${subject.id} topic IDs`);
    assert.ok(topicIds.length, `${subject.id} topics`);
  }
});

test("every topic has complete quiz and matching content", () => {
  for (const subject of subjects) {
    for (const topic of subject.topics) {
      assert.equal(topic.questions.length, 5, `${topic.id} quiz question count`);
      for (const [index, question] of topic.questions.entries()) {
        assert.ok(question.prompt.trim(), `${topic.id} question ${index + 1} prompt`);
        assert.equal(question.answers.length, 4, `${topic.id} question ${index + 1} choices`);
        assert.ok(question.answers.every((answer) => typeof answer === "string"), `${topic.id} question ${index + 1} choice text`);
        assert.equal(new Set(question.answers).size, 4, `${topic.id} question ${index + 1} unique choices`);
        assert.ok(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < question.answers.length, `${topic.id} question ${index + 1} correct answer`);
        assert.ok(question.explanation.trim(), `${topic.id} question ${index + 1} explanation`);
      }

      const pairs = matchSets[topic.id];
      assert.ok(pairs, `${topic.id} matching content`);
      assert.equal(pairs.length, 5, `${topic.id} matching pair count`);
      assert.equal(new Set(pairs.map((pair) => pair.meaning)).size, pairs.length, `${topic.id} unique meanings`);
      assert.ok(pairs.every((pair) => pair.term.trim() && pair.explanation.trim()), `${topic.id} matching explanations`);
    }
  }
  const topicIds = subjects.flatMap((subject) => subject.topics.map((topic) => topic.id));
  assert.deepEqual(Object.keys(matchSets).sort(), topicIds.sort(), "matching data must exist only for registered topics");
});
