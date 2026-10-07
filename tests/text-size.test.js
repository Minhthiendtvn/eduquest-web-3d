import test from "node:test";
import assert from "node:assert/strict";
import { adjustTextSize, applyTextSize, DEFAULT_TEXT_SIZE, readTextSize, TEXT_SIZE_KEY, TEXT_SIZE_LEVELS } from "../src/text-size.js";

test("text size defaults safely and restores supported saved choices", () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
  assert.equal(readTextSize(storage), DEFAULT_TEXT_SIZE);
  storage.setItem(TEXT_SIZE_KEY, "1.1");
  assert.equal(readTextSize(storage), 1.1);
  storage.setItem(TEXT_SIZE_KEY, "1.35");
  assert.equal(readTextSize(storage), DEFAULT_TEXT_SIZE);
});

test("text size controls are bounded to readable preset levels", () => {
  assert.equal(adjustTextSize(DEFAULT_TEXT_SIZE, -1), 1);
  assert.equal(adjustTextSize(DEFAULT_TEXT_SIZE, 1), 1.2);
  assert.equal(adjustTextSize(1, -1), 1);
  assert.equal(adjustTextSize(1.3, 1), 1.3);
  assert.equal(adjustTextSize(0.75, 1), DEFAULT_TEXT_SIZE);
  assert.equal(adjustTextSize(DEFAULT_TEXT_SIZE, Number.NaN), DEFAULT_TEXT_SIZE);
  assert.deepEqual(TEXT_SIZE_LEVELS, [1, 1.1, 1.2, 1.3]);
});

test("text size applies through the shared CSS scale", () => {
  let applied;
  applyTextSize({ style: { setProperty: (key, value) => { applied = [key, value]; } } }, 1.1);
  assert.deepEqual(applied, ["--text-scale", "1.1"]);
});
