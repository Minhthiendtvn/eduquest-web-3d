import { randomInt } from "node:crypto";
import { matchSets, subjects as starterSubjects } from "../src/content.js";

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = randomInt(index + 1);
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

export function buildChallenge(topic, mode) {
  if (mode === "quiz") {
    const questions = shuffle(topic.questions).map((question) => {
      const answers = shuffle(question.answers.map((text, index) => ({ text, index })));
      return {
        prompt: question.prompt,
        answers: answers.map((answer) => answer.text),
        correct: answers.findIndex((answer) => answer.index === question.correct),
        explanation: question.explanation,
      };
    });
    return { questions, data: questions };
  }

  const starterTopic = starterSubjects.flatMap((subject) => subject.topics).find((item) => item.id === topic.id);
  const hasUnchangedStarterQuestions = starterTopic
    && JSON.stringify(starterTopic.questions) === JSON.stringify(topic.questions);
  const pairs = hasUnchangedStarterQuestions && matchSets[topic.id] ? matchSets[topic.id] : topic.questions.map((question) => ({
    term: question.prompt,
    meaning: question.answers[question.correct],
    explanation: question.explanation,
  }));
  const rounds = pairs.map((pair) => {
    const choices = shuffle([pair, ...shuffle(pairs.filter((candidate) => candidate !== pair)).slice(0, 3)]);
    return {
      term: pair.term,
      explanation: pair.explanation,
      choices: choices.map((choice) => ({ meaning: choice.meaning })),
      correct: choices.indexOf(pair),
    };
  });
  return { rounds, data: rounds };
}

export function buildReviewChallenge(mistakes) {
  return mistakes.slice(0, 5).flatMap((mistake) => {
    if (!Array.isArray(mistake.options) || mistake.options.length !== 4
      || new Set(mistake.options).size !== 4 || !mistake.options.includes(mistake.correct)) return [];
    const answers = shuffle(mistake.options.map((text) => ({ text, correct: text === mistake.correct })));
    return [{
      prompt: mistake.prompt,
      answers: answers.map((answer) => answer.text),
      correct: answers.findIndex((answer) => answer.correct),
      explanation: mistake.explanation,
    }];
  });
}

export function evaluateChallenge(challenge, selectedAnswers) {
  if (!Array.isArray(selectedAnswers) || selectedAnswers.length !== challenge.length
    || selectedAnswers.some((answer) => !Number.isInteger(answer) || answer < 0 || answer > 3)) {
    return null;
  }
  const correct = selectedAnswers.reduce(
    (count, answer, index) => count + Number(answer === challenge[index].correct),
    0,
  );
  const mistakes = challenge.flatMap((question, index) => {
    const chosenIndex = selectedAnswers[index];
    if (chosenIndex === question.correct) return [];
    const options = question.choices
      ? question.choices.map((choice) => choice.meaning)
      : question.answers;
    return [{
      prompt: question.choices ? `Ghép ý nghĩa phù hợp với: ${question.term}` : question.prompt,
      chosen: options[chosenIndex],
      correct: options[question.correct],
      explanation: question.explanation,
      options,
      correctIndex: question.correct,
    }];
  });
  return { correct, total: challenge.length, mistakes };
}
