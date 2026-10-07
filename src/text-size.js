export const TEXT_SIZE_KEY = "eduquest-text-size-v1";
export const DEFAULT_TEXT_SIZE = 1.1;
export const TEXT_SIZE_LEVELS = [1, DEFAULT_TEXT_SIZE, 1.2, 1.3];

export function readTextSize(storage) {
  const saved = Number(storage.getItem(TEXT_SIZE_KEY));
  return TEXT_SIZE_LEVELS.includes(saved) ? saved : DEFAULT_TEXT_SIZE;
}

export function adjustTextSize(current, direction) {
  const currentIndex = TEXT_SIZE_LEVELS.indexOf(current);
  if (currentIndex === -1) return DEFAULT_TEXT_SIZE;
  const step = Math.sign(Number(direction));
  if (!step) return current;
  const nextIndex = Math.max(0, Math.min(TEXT_SIZE_LEVELS.length - 1, currentIndex + step));
  return TEXT_SIZE_LEVELS[nextIndex];
}

export function applyTextSize(root, size) {
  root.style.setProperty("--text-scale", String(size));
}
