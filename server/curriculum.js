export function shapeLearnerCurriculum(subjects) {
  return subjects.map((subject) => ({
    ...subject,
    topics: subject.topics.map((topic) => ({
      ...topic,
      questions: topic.questions.map(({ correct, ...question }) => question),
    })),
  }));
}
