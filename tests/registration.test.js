import assert from "node:assert/strict";
import test from "node:test";
import { normalizeRegistrationInput } from "../server/registration.js";

const validInput = {
  username: "  HOC_SINH9  ",
  displayName: "  Nguyễn   An ",
  password: "mot-mat-khau-that-dai",
  grade: 9,
  classCode: "ab12cd34",
};

test("registration normalizes learner details and optional class join code", () => {
  assert.deepEqual(normalizeRegistrationInput(validInput), {
    username: "hoc_sinh9",
    displayName: "Nguyễn An",
    password: "mot-mat-khau-that-dai",
    grade: 9,
    classCode: "AB12CD34",
  });
  assert.equal(normalizeRegistrationInput({ ...validInput, classCode: "" }).classCode, "");
});

test("registration rejects invalid usernames, weak passwords, names, grades, and class codes", () => {
  assert.equal(normalizeRegistrationInput({ ...validInput, username: "x" }), null);
  assert.equal(normalizeRegistrationInput({ ...validInput, password: "short" }), null);
  assert.equal(normalizeRegistrationInput({ ...validInput, displayName: " " }), null);
  assert.equal(normalizeRegistrationInput({ ...validInput, grade: 13 }), null);
  assert.equal(normalizeRegistrationInput({ ...validInput, classCode: "??" }), null);
});

test("registration never accepts a requested role from the client", () => {
  const registration = normalizeRegistrationInput({ ...validInput, role: "admin" });

  assert.ok(registration);
  assert.equal("role" in registration, false);
});
