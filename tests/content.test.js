import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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

const addedTopicIds = [
  "statistics-and-chance",
  "ecosystems-and-energy",
  "poetry-and-images",
  "english-present-perfect",
  "dai-viet-civilization",
  "map-skills-and-scale",
  "algorithms-and-code",
  "energy-and-sustainable-design",
  "smart-spending",
  "fitness-foundations",
  "music-notation-and-dynamics",
  "perspective-and-space",
  "fire-safety-and-evacuation",
  "career-exploration",
  "ratios-and-percentages",
  "linear-equations",
  "matter-and-mixtures",
  "earth-moon-and-seasons",
  "narrative-perspective",
  "argument-and-evidence",
  "english-future-plans",
  "english-modal-advice",
  "ancient-cultures-of-viet-nam",
  "vietnam-in-the-twentieth-century",
  "population-and-settlement",
  "climate-and-climate-change",
  "data-and-spreadsheets",
  "networks-and-online-safety",
  "structures-and-mechanisms",
  "food-and-agricultural-technology",
  "rights-and-responsibilities",
  "needs-wants-and-saving",
  "team-sports-and-fair-play",
  "healthy-training-habits",
  "instruments-and-timbre",
  "melody-harmony-and-rhythm",
  "color-wheel-and-contrast",
  "texture-and-printmaking",
  "earthquake-preparedness",
  "first-aid-and-emergency-help",
  "study-planning-and-time",
  "strengths-and-transferable-skills",
];

test("covers the core subjects offered to secondary students", () => {
  assert.deepEqual(subjects.map((subject) => subject.id), expectedSubjects);
});

test("adds a playable starter topic to every subject", () => {
  const topics = subjects.flatMap((subject) => subject.topics);
  assert.equal(topics.length, 298);
  for (const topicId of addedTopicIds) {
    assert.ok(topics.some((topic) => topic.id === topicId), `${topicId} exists`);
  }
});

const allSubjectIds = [
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

for (const grade of [6, 7, 8, 9]) {
  test(`grade ${grade} has 52 clearly labelled topics and 260 original questions`, () => {
    const topics = subjects.flatMap((subject) => subject.topics)
      .filter((topic) => topic.id.startsWith(`grade-${grade}-`));
    assert.equal(topics.length, 52);
    assert.equal(topics.reduce((total, topic) => total + topic.questions.length, 0), 260);
    for (const topic of topics) {
      assert.equal(topic.level, `LỚP ${grade}`);
      assert.ok(topic.title.startsWith(`Lớp ${grade} · `));
    }
    assert.deepEqual(
      subjects.filter((subject) => subject.topics.some((topic) => topic.id.startsWith(`grade-${grade}-`)))
        .map((subject) => subject.id),
      allSubjectIds,
    );
  });
}

for (const grade of [10, 11, 12]) {
  test(`grade ${grade} has ten clearly labelled topics and fifty original questions`, () => {
    const topics = subjects.flatMap((subject) => subject.topics)
      .filter((topic) => topic.id.startsWith(`grade-${grade}-`));
    assert.equal(topics.length, 10);
    assert.equal(topics.reduce((total, topic) => total + topic.questions.length, 0), 50);
    for (const topic of topics) {
      assert.equal(topic.level, `LỚP ${grade}`);
      assert.ok(topic.title.startsWith(`Lớp ${grade} · `));
    }
    assert.deepEqual(
      subjects.filter((subject) => subject.topics.some((topic) => topic.id.startsWith(`grade-${grade}-`)))
        .map((subject) => subject.id),
      ["math", "science", "literature", "english", "history", "geography", "informatics"],
    );
  });
}

test("MySQL installer curriculum stays in sync with the starter content", () => {
  const mysqlCurriculum = JSON.parse(
    readFileSync(new URL("../database/mysql-starter-curriculum.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(mysqlCurriculum, subjects);
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
      const correctAnswers = topic.questions.map((question) => question.answers[question.correct]);
      assert.equal(new Set(correctAnswers).size, correctAnswers.length, `${topic.id} matching answers must be distinct`);

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
