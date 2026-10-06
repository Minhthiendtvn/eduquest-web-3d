import test from "node:test";
import assert from "node:assert/strict";
import { calculateExperienceReward, getExperienceLevel } from "../src/progress.js";

test("levels advance every 100 XP and keep the final title", () => {
  assert.deepEqual(getExperienceLevel(0), {
    level: 1,
    pointsInLevel: 0,
    pointsPerLevel: 100,
    nextLevelAt: 100,
    title: "Người mới",
  });
  assert.equal(getExperienceLevel(99).pointsInLevel, 99);
  assert.equal(getExperienceLevel(100).level, 2);
  assert.equal(getExperienceLevel(500).title, "Huyền thoại");
  assert.throws(() => getExperienceLevel(-1), RangeError);
});

test("new quiz and matching rounds award correct-answer XP and a 60% bonus", () => {
  assert.deepEqual(calculateExperienceReward({
    mode: "quiz",
    correct: 2,
    total: 5,
    dailyCount: 1,
    dailyGoal: 3,
    dailyRewardClaimed: false,
  }), { experienceEarned: 20, dailyRewardEarned: false });
  assert.deepEqual(calculateExperienceReward({
    mode: "match",
    correct: 3,
    total: 5,
    dailyCount: 1,
    dailyGoal: 3,
    dailyRewardClaimed: false,
  }), { experienceEarned: 40, dailyRewardEarned: false });
});

test("review rounds use the lower XP rate without a challenge bonus", () => {
  assert.deepEqual(calculateExperienceReward({
    mode: "review",
    correct: 5,
    total: 5,
    dailyCount: 1,
    dailyGoal: 3,
    dailyRewardClaimed: false,
  }), { experienceEarned: 25, dailyRewardEarned: false });
});

test("the new-challenge bonus uses exact accuracy, not rounded display accuracy", () => {
  assert.equal(calculateExperienceReward({
    mode: "quiz",
    correct: 59,
    total: 99,
    dailyCount: 1,
    dailyGoal: 3,
    dailyRewardClaimed: false,
  }).experienceEarned, 590);
});

test("daily goal XP is awarded once when the goal is reached", () => {
  const rewardInput = {
    mode: "quiz",
    correct: 3,
    total: 5,
    dailyCount: 3,
    dailyGoal: 3,
    dailyRewardClaimed: false,
  };
  assert.deepEqual(calculateExperienceReward(rewardInput), {
    experienceEarned: 60,
    dailyRewardEarned: true,
  });
  assert.deepEqual(calculateExperienceReward({
    ...rewardInput,
    dailyCount: 4,
    dailyRewardClaimed: true,
  }), { experienceEarned: 40, dailyRewardEarned: false });
  assert.equal(calculateExperienceReward({
    ...rewardInput,
    dailyCount: 2,
  }).dailyRewardEarned, false);
});

test("reward calculation rejects invalid rounds and modes", () => {
  const validInput = {
    mode: "quiz",
    correct: 3,
    total: 5,
    dailyCount: 1,
    dailyGoal: 3,
    dailyRewardClaimed: false,
  };
  assert.throws(() => calculateExperienceReward({ ...validInput, total: 0 }), RangeError);
  assert.throws(() => calculateExperienceReward({ ...validInput, correct: 6 }), RangeError);
  assert.throws(() => calculateExperienceReward({ ...validInput, mode: "unknown" }), RangeError);
});
