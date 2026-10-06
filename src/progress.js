const pointsPerLevel = 100;
const levelTitles = ["Người mới", "Nhà khám phá", "Nhà thám hiểm", "Bậc thầy tri thức", "Huyền thoại"];

export function getExperienceLevel(experiencePoints) {
  if (!Number.isInteger(experiencePoints) || experiencePoints < 0) {
    throw new RangeError("Điểm kinh nghiệm phải là số nguyên không âm.");
  }

  const level = Math.floor(experiencePoints / pointsPerLevel) + 1;
  const pointsInLevel = experiencePoints % pointsPerLevel;
  return {
    level,
    pointsInLevel,
    pointsPerLevel,
    nextLevelAt: level * pointsPerLevel,
    title: levelTitles[Math.min(level - 1, levelTitles.length - 1)],
  };
}

export function calculateExperienceReward({
  mode,
  correct,
  total,
  dailyCount,
  dailyGoal,
  dailyRewardClaimed,
}) {
  if (!["quiz", "match", "review"].includes(mode)) {
    throw new RangeError("Chế độ thử thách không hợp lệ.");
  }
  if (!Number.isInteger(total) || total < 1 || !Number.isInteger(correct) || correct < 0 || correct > total) {
    throw new RangeError("Số câu đúng và tổng số câu không hợp lệ.");
  }
  if (!Number.isInteger(dailyCount) || dailyCount < 1 || !Number.isInteger(dailyGoal) || dailyGoal < 1) {
    throw new RangeError("Tiến độ mục tiêu hằng ngày không hợp lệ.");
  }

  const challengeXP = mode === "review"
    ? correct * 5
    : correct * 10 + (correct / total >= 0.6 ? 10 : 0);
  const dailyRewardEarned = dailyCount >= dailyGoal && !dailyRewardClaimed;

  return {
    experienceEarned: challengeXP + (dailyRewardEarned ? 20 : 0),
    dailyRewardEarned,
  };
}
