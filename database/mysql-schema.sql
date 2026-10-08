CREATE TABLE IF NOT EXISTS app_classes (
  id CHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  grade TINYINT UNSIGNED NOT NULL,
  join_code CHAR(8) NOT NULL UNIQUE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX app_classes_created_idx (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS app_users (
  id CHAR(36) NOT NULL PRIMARY KEY,
  username VARCHAR(40) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'learner') NOT NULL,
  display_name VARCHAR(32) NOT NULL,
  grade TINYINT UNSIGNED NOT NULL,
  daily_goal TINYINT UNSIGNED NOT NULL DEFAULT 3,
  class_id CHAR(36) NULL,
  completed INT UNSIGNED NOT NULL DEFAULT 0,
  correct INT UNSIGNED NOT NULL DEFAULT 0,
  total_answered INT UNSIGNED NOT NULL DEFAULT 0,
  experience_points INT UNSIGNED NOT NULL DEFAULT 0,
  best_score TINYINT UNSIGNED NOT NULL DEFAULT 0,
  daily_count INT UNSIGNED NOT NULL DEFAULT 0,
  daily_date DATE NOT NULL DEFAULT '1970-01-01',
  streak INT UNSIGNED NOT NULL DEFAULT 0,
  best_streak INT UNSIGNED NOT NULL DEFAULT 0,
  last_study_date DATE NULL,
  daily_reward_date DATE NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX app_users_class_idx (class_id, role),
  CONSTRAINT app_users_class_fk FOREIGN KEY (class_id)
    REFERENCES app_classes(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS app_sessions (
  token_hash CHAR(64) NOT NULL PRIMARY KEY,
  user_id CHAR(36) NULL,
  csrf_token CHAR(43) NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX app_sessions_expiry_idx (expires_at),
  INDEX app_sessions_user_idx (user_id),
  CONSTRAINT app_sessions_user_fk FOREIGN KEY (user_id)
    REFERENCES app_users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS app_curriculum (
  id TINYINT UNSIGNED NOT NULL PRIMARY KEY,
  content JSON NOT NULL,
  updated_by CHAR(36) NULL,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT app_curriculum_updated_by_fk FOREIGN KEY (updated_by)
    REFERENCES app_users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS app_library_overrides (
  lesson_id VARCHAR(120) NOT NULL PRIMARY KEY,
  content JSON NULL,
  updated_by CHAR(36) NULL,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT app_library_overrides_updated_by_fk FOREIGN KEY (updated_by)
    REFERENCES app_users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS learning_sessions (
  id CHAR(36) NOT NULL PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  subject_id VARCHAR(80) NOT NULL,
  topic_id VARCHAR(80) NOT NULL,
  mode ENUM('quiz', 'match', 'review') NOT NULL,
  correct SMALLINT UNSIGNED NOT NULL,
  total SMALLINT UNSIGNED NOT NULL,
  experience_points INT UNSIGNED NOT NULL,
  mistakes JSON NOT NULL,
  daily_reward_earned TINYINT(1) NOT NULL DEFAULT 0,
  source_session_id CHAR(36) NULL UNIQUE,
  played_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  study_date DATE NOT NULL,
  INDEX learning_sessions_user_date_idx (user_id, played_at),
  INDEX learning_sessions_subject_idx (subject_id, topic_id),
  CONSTRAINT learning_sessions_user_fk FOREIGN KEY (user_id)
    REFERENCES app_users(id) ON DELETE CASCADE,
  CONSTRAINT learning_sessions_review_source_fk FOREIGN KEY (source_session_id)
    REFERENCES learning_sessions(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS app_challenges (
  id CHAR(36) NOT NULL PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  subject_id VARCHAR(80) NOT NULL,
  topic_id VARCHAR(80) NOT NULL,
  mode ENUM('quiz', 'match', 'review') NOT NULL,
  challenge_data JSON NOT NULL,
  answers JSON NOT NULL,
  source_session_id CHAR(36) NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX app_challenges_user_expiry_idx (user_id, expires_at),
  CONSTRAINT app_challenges_user_fk FOREIGN KEY (user_id)
    REFERENCES app_users(id) ON DELETE CASCADE,
  CONSTRAINT app_challenges_source_fk FOREIGN KEY (source_session_id)
    REFERENCES learning_sessions(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS app_rate_limits (
  rate_key CHAR(64) NOT NULL PRIMARY KEY,
  request_count INT UNSIGNED NOT NULL DEFAULT 0,
  expires_at DATETIME NOT NULL,
  INDEX app_rate_limits_expiry_idx (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
