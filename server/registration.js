export function validPassword(value) {
  return typeof value === "string" && value.length >= 12 && value.length <= 128;
}

export function validUsername(value) {
  return typeof value === "string" && /^[a-z0-9][a-z0-9_.-]{2,39}$/.test(value);
}

export function validDisplayName(value) {
  if (typeof value !== "string") return false;
  const length = value.trim().replace(/\s+/g, " ").length;
  return length >= 2 && length <= 32;
}

export function normalizeRegistrationInput(input) {
  const username = typeof input?.username === "string" ? input.username.trim().toLowerCase() : "";
  const displayName = typeof input?.displayName === "string"
    ? input.displayName.trim().replace(/\s+/g, " ")
    : "";
  const password = input?.password;
  const grade = input?.grade;
  const classCode = typeof input?.classCode === "string"
    ? input.classCode.trim().toUpperCase()
    : "";
  if (!validUsername(username) || !validDisplayName(displayName) || !validPassword(password)
    || !Number.isInteger(grade) || grade < 6 || grade > 12
    || (classCode && !/^[A-Z0-9]{6,12}$/.test(classCode))) return null;
  return { username, displayName, password, grade, classCode };
}
