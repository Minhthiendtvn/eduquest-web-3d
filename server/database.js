import bcrypt from "bcryptjs";
import pg from "pg";
import { randomUUID } from "node:crypto";
import { subjects } from "../src/content.js";
import { validateCurriculum } from "../src/admin.js";

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: Number(process.env.DB_POOL_MAX ?? 10),
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
});

const schema = `
  CREATE TABLE IF NOT EXISTS app_tutor_settings (
    id smallint PRIMARY KEY CHECK (id = 1), show_context boolean NOT NULL DEFAULT false
  );
  CREATE TABLE IF NOT EXISTS app_users (
    id text PRIMARY KEY,
    username text NOT NULL UNIQUE,
    password_hash text NOT NULL,
    role text NOT NULL CHECK (role IN ('admin', 'learner')),
    display_name text NOT NULL,
    grade smallint NOT NULL CHECK (grade BETWEEN 6 AND 12),
    daily_goal smallint NOT NULL DEFAULT 3 CHECK (daily_goal BETWEEN 1 AND 5),
    class_id text,
    completed integer NOT NULL DEFAULT 0 CHECK (completed >= 0),
    correct integer NOT NULL DEFAULT 0 CHECK (correct >= 0),
    total_answered integer NOT NULL DEFAULT 0 CHECK (total_answered >= 0),
    experience_points integer NOT NULL DEFAULT 0 CHECK (experience_points >= 0),
    best_score integer NOT NULL DEFAULT 0 CHECK (best_score BETWEEN 0 AND 100),
    daily_count integer NOT NULL DEFAULT 0 CHECK (daily_count >= 0),
    daily_date date NOT NULL DEFAULT CURRENT_DATE,
    streak integer NOT NULL DEFAULT 0 CHECK (streak >= 0),
    best_streak integer NOT NULL DEFAULT 0 CHECK (best_streak >= 0),
    last_study_date date,
    daily_reward_date date,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
  );
  CREATE TABLE IF NOT EXISTS app_classes (
    id text PRIMARY KEY,
    name text NOT NULL,
    grade smallint NOT NULL CHECK (grade BETWEEN 6 AND 12),
    join_code text NOT NULL UNIQUE,
    created_at timestamptz NOT NULL DEFAULT now()
  );
  DO $$ BEGIN
    ALTER TABLE app_users ADD CONSTRAINT app_users_class_id_fkey
      FOREIGN KEY (class_id) REFERENCES app_classes(id) ON DELETE SET NULL;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END $$;
  CREATE INDEX IF NOT EXISTS app_users_class_idx ON app_users(class_id, role);
  CREATE TABLE IF NOT EXISTS app_sessions (
    token_hash text PRIMARY KEY,
    user_id text REFERENCES app_users(id) ON DELETE CASCADE,
    csrf_token text NOT NULL,
    expires_at timestamptz NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
  );
  CREATE INDEX IF NOT EXISTS app_sessions_expiry_idx ON app_sessions(expires_at);
  CREATE TABLE IF NOT EXISTS app_tutor_quotas (
    user_id text NOT NULL REFERENCES app_users(id) ON DELETE CASCADE,
    usage_day date NOT NULL,
    request_count integer NOT NULL CHECK (request_count > 0),
    PRIMARY KEY (user_id, usage_day)
  );
  CREATE TABLE IF NOT EXISTS app_curriculum (
    id smallint PRIMARY KEY CHECK (id = 1),
    content jsonb NOT NULL,
    updated_by text REFERENCES app_users(id) ON DELETE SET NULL,
    updated_at timestamptz NOT NULL DEFAULT now()
  );
  CREATE TABLE IF NOT EXISTS app_library_overrides (
    lesson_id text PRIMARY KEY,
    content jsonb,
    updated_by text REFERENCES app_users(id) ON DELETE SET NULL,
    updated_at timestamptz NOT NULL DEFAULT now()
  );
  CREATE TABLE IF NOT EXISTS learning_sessions (
    id text PRIMARY KEY,
    user_id text NOT NULL REFERENCES app_users(id) ON DELETE CASCADE,
    subject_id text NOT NULL,
    topic_id text NOT NULL,
    mode text NOT NULL CHECK (mode IN ('quiz', 'match', 'review')),
    correct integer NOT NULL CHECK (correct >= 0),
    total integer NOT NULL CHECK (total > 0 AND total <= 100),
    experience_points integer NOT NULL CHECK (experience_points >= 0),
    mistakes jsonb NOT NULL DEFAULT '[]'::jsonb,
    played_at timestamptz NOT NULL DEFAULT now(),
    study_date date NOT NULL
  );
  ALTER TABLE learning_sessions ADD COLUMN IF NOT EXISTS daily_reward_earned boolean NOT NULL DEFAULT false;
  CREATE INDEX IF NOT EXISTS learning_sessions_user_date_idx ON learning_sessions(user_id, played_at DESC);
  CREATE INDEX IF NOT EXISTS learning_sessions_subject_idx ON learning_sessions(subject_id, topic_id);
  ALTER TABLE learning_sessions ADD COLUMN IF NOT EXISTS source_session_id text REFERENCES learning_sessions(id) ON DELETE SET NULL;
  CREATE UNIQUE INDEX IF NOT EXISTS learning_sessions_review_source_idx
    ON learning_sessions(source_session_id) WHERE mode = 'review' AND source_session_id IS NOT NULL;
  CREATE TABLE IF NOT EXISTS app_challenges (
    id text PRIMARY KEY,
    user_id text NOT NULL REFERENCES app_users(id) ON DELETE CASCADE,
    subject_id text NOT NULL,
    topic_id text NOT NULL,
    mode text NOT NULL CHECK (mode IN ('quiz', 'match', 'review')),
    challenge_data jsonb NOT NULL,
    answers jsonb NOT NULL DEFAULT '[]'::jsonb,
    source_session_id text,
    expires_at timestamptz NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
  );
  ALTER TABLE app_challenges ADD COLUMN IF NOT EXISTS answers jsonb NOT NULL DEFAULT '[]'::jsonb;
  CREATE INDEX IF NOT EXISTS app_challenges_user_expiry_idx ON app_challenges(user_id, expires_at);
`;

export async function initializeDatabase() {
  await pool.query(schema);
  const adminUsername = String(process.env.ADMIN_USERNAME ?? "admin").trim().toLowerCase();
  const adminPassword = String(process.env.ADMIN_PASSWORD ?? "");
  if (!/^[a-z0-9][a-z0-9_.-]{2,39}$/.test(adminUsername)) {
    throw new Error("ADMIN_USERNAME must be 3-40 lowercase letters, numbers, dots, underscores, or hyphens.");
  }
  if (adminPassword.length < 14 || adminPassword.length > 128) {
    throw new Error("Set ADMIN_PASSWORD to a unique password between 14 and 128 characters before starting EduQuest.");
  }

  const existingAdmin = await pool.query("SELECT role FROM app_users WHERE username = $1", [adminUsername]);
  if (existingAdmin.rowCount) {
    if (existingAdmin.rows[0].role !== "admin") {
      throw new Error("ADMIN_USERNAME is already assigned to a learner account. Configure a different administrator username.");
    }
  } else {
    const id = randomUUID();
    const passwordHash = await bcrypt.hash(adminPassword, 12);
    await pool.query(
      `INSERT INTO app_users (id, username, password_hash, role, display_name, grade)
       VALUES ($1, $2, $3, 'admin', 'Quản trị viên', 9)`,
      [id, adminUsername, passwordHash],
    );
    console.info(`Created initial EduQuest administrator "${adminUsername}".`);
  }

  const curriculumError = validateCurriculum(subjects);
  if (curriculumError) throw new Error(`Starter curriculum is invalid: ${curriculumError}`);
  await pool.query(
    "INSERT INTO app_curriculum (id, content) VALUES (1, $1::jsonb) ON CONFLICT (id) DO NOTHING",
    [JSON.stringify(subjects)],
  );
  await pool.query("DELETE FROM app_sessions WHERE expires_at < now()");
  await pool.query("DELETE FROM app_challenges WHERE expires_at < now()");
}
