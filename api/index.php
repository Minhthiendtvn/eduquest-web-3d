<?php
declare(strict_types=1);

$configPath = dirname(__DIR__, 2) . '/eduquest-config.php';
if (!is_file($configPath)) {
    respond(503, ['error' => 'Máy chủ chưa được cấu hình cơ sở dữ liệu.']);
}
$config = require $configPath;
if (!is_array($config)) {
    respond(503, ['error' => 'Cấu hình máy chủ không hợp lệ.']);
}

date_default_timezone_set($config['timezone'] ?? 'Asia/Ho_Chi_Minh');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, private');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('X-Frame-Options: DENY');

function respond(int $status, array $payload = []): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store, private');
    if ($status === 204) {
        exit;
    }
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

function requestBody(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || strlen($raw) > 1_048_576) {
        respond(413, ['error' => 'Dữ liệu gửi vượt quá giới hạn cho phép.']);
    }
    if ($raw === '') {
        return [];
    }
    $value = json_decode($raw, true);
    if (!is_array($value) || json_last_error() !== JSON_ERROR_NONE) {
        respond(400, ['error' => 'Nội dung JSON không hợp lệ.']);
    }
    return $value;
}

function db(): PDO
{
    global $config;
    static $connection = null;
    if ($connection instanceof PDO) {
        return $connection;
    }
    $host = (string)($config['database_host'] ?? 'localhost');
    $name = (string)($config['database_name'] ?? '');
    $user = (string)($config['database_user'] ?? '');
    $password = (string)($config['database_password'] ?? '');
    if ($name === '' || $user === '' || !preg_match('/^[a-zA-Z0-9_.-]+$/', $name)) {
        throw new RuntimeException('MySQL connection settings are missing or invalid.');
    }
    $connection = new PDO(
        "mysql:host={$host};dbname={$name};charset=utf8mb4",
        $user,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ],
    );
    $connection->exec("SET time_zone = '+00:00'");
    return $connection;
}

function query(string $sql, array $params = []): PDOStatement
{
    $statement = db()->prepare($sql);
    $statement->execute($params);
    return $statement;
}

function uuid(): string
{
    $bytes = random_bytes(16);
    $bytes[6] = chr((ord($bytes[6]) & 0x0f) | 0x40);
    $bytes[8] = chr((ord($bytes[8]) & 0x3f) | 0x80);
    $hex = bin2hex($bytes);
    return substr($hex, 0, 8) . '-' . substr($hex, 8, 4) . '-' . substr($hex, 12, 4)
        . '-' . substr($hex, 16, 4) . '-' . substr($hex, 20);
}

function randomCode(int $length = 8): string
{
    $alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    $code = '';
    for ($index = 0; $index < $length; $index++) {
        $code .= $alphabet[random_int(0, strlen($alphabet) - 1)];
    }
    return $code;
}

function validUsername(mixed $value): bool
{
    return is_string($value) && preg_match('/^[a-z0-9][a-z0-9_.-]{2,39}$/', $value) === 1;
}

function validPassword(mixed $value): bool
{
    return is_string($value) && strlen($value) >= 12 && strlen($value) <= 128;
}

function normalizedDisplayName(mixed $value): ?string
{
    if (!is_string($value)) {
        return null;
    }
    $name = trim(preg_replace('/\s+/u', ' ', $value) ?? '');
    $length = function_exists('mb_strlen') ? mb_strlen($name, 'UTF-8') : strlen($name);
    return $length >= 2 && $length <= 32 ? $name : null;
}

function validDate(mixed $value): bool
{
    return is_string($value) && preg_match('/^\d{4}-\d{2}-\d{2}$/', $value) === 1;
}

function dayDistance(?string $later, ?string $earlier): int
{
    if (!$later || !$earlier) {
        return PHP_INT_MAX;
    }
    $laterDate = DateTimeImmutable::createFromFormat('!Y-m-d', $later);
    $earlierDate = DateTimeImmutable::createFromFormat('!Y-m-d', $earlier);
    if (!$laterDate || !$earlierDate) {
        return PHP_INT_MAX;
    }
    return (int)$earlierDate->diff($laterDate)->format('%r%a');
}

function shapeUser(array $row): array
{
    return [
        'id' => $row['id'],
        'username' => $row['username'],
        'role' => $row['role'],
        'displayName' => $row['display_name'],
        'grade' => (string)$row['grade'],
        'dailyGoal' => (int)$row['daily_goal'],
        'classId' => $row['class_id'] ?? null,
    ];
}

function decodeJson(mixed $value, array $fallback = []): array
{
    if (is_array($value)) {
        return $value;
    }
    if (!is_string($value) || $value === '') {
        return $fallback;
    }
    $decoded = json_decode($value, true);
    return is_array($decoded) ? $decoded : $fallback;
}

function shapeCurriculumForLearners(array $subjects): array
{
    foreach ($subjects as &$subject) {
        if (!isset($subject['topics']) || !is_array($subject['topics'])) {
            continue;
        }
        foreach ($subject['topics'] as &$topic) {
            if (!isset($topic['questions']) || !is_array($topic['questions'])) {
                continue;
            }
            foreach ($topic['questions'] as &$question) {
                unset($question['correct']);
            }
            unset($question);
        }
        unset($topic);
    }
    unset($subject);
    return $subjects;
}

function currentSession(): ?array
{
    $cookieName = sessionCookieName();
    $token = $_COOKIE[$cookieName] ?? '';
    if (!is_string($token) || strlen($token) > 128 || $token === '') {
        return null;
    }
    $statement = query(
        'SELECT s.token_hash, s.csrf_token, s.user_id, u.username, u.role, u.display_name, u.grade, u.daily_goal
         FROM app_sessions s LEFT JOIN app_users u ON u.id = s.user_id
         WHERE s.token_hash = ? AND s.expires_at > UTC_TIMESTAMP()',
        [hash('sha256', $token)],
    );
    $session = $statement->fetch();
    return $session ?: null;
}

function sessionCookieName(): string
{
    global $config;
    return !empty($config['secure_cookies']) ? '__Host-eduquest_session' : 'eduquest_session';
}

function setSessionCookie(string $token): void
{
    global $config;
    setcookie(sessionCookieName(), $token, [
        'expires' => time() + 604800,
        'path' => '/',
        'secure' => !empty($config['secure_cookies']),
        'httponly' => true,
        'samesite' => 'Strict',
    ]);
}

function issueSession(?string $userId = null): array
{
    $token = rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
    $csrfToken = rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
    $tokenHash = hash('sha256', $token);
    query(
        'INSERT INTO app_sessions (token_hash, user_id, csrf_token, expires_at)
         VALUES (?, ?, ?, DATE_ADD(UTC_TIMESTAMP(), INTERVAL 7 DAY))',
        [$tokenHash, $userId, $csrfToken],
    );
    setSessionCookie($token);
    return ['token_hash' => $tokenHash, 'csrf_token' => $csrfToken, 'user_id' => $userId];
}

function requireCsrf(array $session, array $body): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin !== '') {
        $originHost = parse_url($origin, PHP_URL_HOST);
        $originPort = parse_url($origin, PHP_URL_PORT);
        $host = strtolower((string)($_SERVER['HTTP_HOST'] ?? ''));
        $expectedHost = strtolower((string)$originHost . ($originPort ? ':' . $originPort : ''));
        $scheme = parse_url($origin, PHP_URL_SCHEME);
        if (!in_array($scheme, ['http', 'https'], true) || $host !== $expectedHost) {
            respond(403, ['error' => 'Phiên bảo mật không hợp lệ. Tải lại trang và thử lại.']);
        }
    }
    if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site'
        || !isset($_SERVER['HTTP_X_CSRF_TOKEN'])
        || !hash_equals((string)$session['csrf_token'], (string)$_SERVER['HTTP_X_CSRF_TOKEN'])) {
        respond(403, ['error' => 'Phiên bảo mật không hợp lệ. Tải lại trang và thử lại.']);
    }
}

function requireAuthentication(?array $session): array
{
    if (!$session || empty($session['user_id']) || empty($session['role'])) {
        respond(401, ['error' => 'Vui lòng đăng nhập để tiếp tục.']);
    }
    return $session;
}

function requireAdministrator(?array $session): array
{
    $session = requireAuthentication($session);
    if ($session['role'] !== 'admin') {
        respond(403, ['error' => 'Bạn không có quyền thực hiện thao tác quản trị.']);
    }
    return $session;
}

function rateLimit(string $key, int $limit, int $windowSeconds): void
{
    $ip = (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown');
    $bucket = (string)floor(time() / $windowSeconds);
    $rateKey = hash('sha256', $key . "\0" . $ip . "\0" . $bucket);
    $expiresAt = gmdate('Y-m-d H:i:s', time() + $windowSeconds * 2);
    query(
        'INSERT INTO app_rate_limits (rate_key, request_count, expires_at)
         VALUES (?, 1, ?)
         ON DUPLICATE KEY UPDATE request_count = request_count + 1',
        [$rateKey, $expiresAt],
    );
    $count = (int)query('SELECT request_count FROM app_rate_limits WHERE rate_key = ?', [$rateKey])->fetchColumn();
    if ($count > $limit) {
        respond(429, ['error' => 'Bạn đã gửi quá nhiều yêu cầu trong thời gian ngắn. Hãy thử lại sau.']);
    }
    if (random_int(1, 100) === 1) {
        query('DELETE FROM app_rate_limits WHERE expires_at < UTC_TIMESTAMP()');
    }
}

function validateCurriculum(mixed $subjects): ?string
{
    if (!is_array($subjects) || count($subjects) < 1 || count($subjects) > 100) {
        return 'Danh mục môn học phải là một danh sách có dữ liệu.';
    }
    $subjectIds = [];
    $topicIds = [];
    foreach ($subjects as $subject) {
        if (!is_array($subject) || !is_string($subject['id'] ?? null)
            || !preg_match('/^[a-z0-9-]{2,60}$/', $subject['id'])) {
            return 'Mỗi môn học cần có mã gồm chữ thường, số hoặc dấu gạch ngang.';
        }
        if (isset($subjectIds[$subject['id']])) {
            return 'Mã môn học đang bị trùng.';
        }
        $subjectIds[$subject['id']] = true;
        if (!is_string($subject['name'] ?? null) || trim($subject['name']) === '' || strlen($subject['name']) > 80
            || !is_string($subject['color'] ?? null) || !preg_match('/^[a-z-]{2,24}$/', $subject['color'])
            || !is_string($subject['symbol'] ?? null) || strlen($subject['symbol']) > 48
            || !is_array($subject['topics'] ?? null) || count($subject['topics']) < 1) {
            return 'Thông tin môn học chưa đầy đủ.';
        }
        foreach ($subject['topics'] as $topic) {
            if (!is_array($topic) || !is_string($topic['id'] ?? null)
                || !preg_match('/^[a-z0-9-]{2,80}$/', $topic['id'])) {
                return 'Chủ đề có mã không hợp lệ.';
            }
            if (isset($topicIds[$topic['id']])) {
                return 'Mã chủ đề đang bị trùng.';
            }
            $topicIds[$topic['id']] = true;
            if (!is_string($topic['title'] ?? null) || trim($topic['title']) === '' || strlen($topic['title']) > 100
                || !is_string($topic['description'] ?? null) || trim($topic['description']) === '' || strlen($topic['description']) > 180
                || !is_string($topic['level'] ?? null) || strlen($topic['level']) > 40
                || !is_string($topic['duration'] ?? null) || strlen($topic['duration']) > 40
                || !is_array($topic['questions'] ?? null) || count($topic['questions']) < 4 || count($topic['questions']) > 100) {
                return 'Chủ đề cần tên, mô tả và tối thiểu 4 câu hỏi.';
            }
            foreach ($topic['questions'] as $index => $question) {
                if (!is_array($question) || !is_string($question['prompt'] ?? null)
                    || trim($question['prompt']) === '' || strlen($question['prompt']) > 500
                    || !is_array($question['answers'] ?? null) || count($question['answers']) !== 4
                    || !is_int($question['correct'] ?? null) || $question['correct'] < 0 || $question['correct'] > 3
                    || !is_string($question['explanation'] ?? null) || trim($question['explanation']) === ''
                    || strlen($question['explanation']) > 1000) {
                    return 'Câu hỏi cần nội dung, 4 đáp án, đáp án đúng và lời giải.';
                }
                $answers = [];
                foreach ($question['answers'] as $answer) {
                    if (!is_string($answer) || trim($answer) === '' || strlen($answer) > 300) {
                        return 'Mỗi đáp án cần có nội dung hợp lệ.';
                    }
                    $answers[] = $answer;
                }
                if (count(array_unique($answers)) !== 4) {
                    return 'Mỗi câu hỏi cần có 4 đáp án khác nhau.';
                }
            }
        }
    }
    return null;
}

function shuffleSecure(array $values): array
{
    for ($index = count($values) - 1; $index > 0; $index--) {
        $other = random_int(0, $index);
        [$values[$index], $values[$other]] = [$values[$other], $values[$index]];
    }
    return $values;
}

function makeQuiz(array $topic): array
{
    $questions = [];
    foreach (shuffleSecure($topic['questions']) as $question) {
        $answers = [];
        foreach ($question['answers'] as $index => $text) {
            $answers[] = ['text' => $text, 'correct' => $index === (int)$question['correct']];
        }
        $answers = shuffleSecure($answers);
        $correct = 0;
        $visibleAnswers = [];
        foreach ($answers as $index => $answer) {
            $visibleAnswers[] = $answer['text'];
            if ($answer['correct']) {
                $correct = $index;
            }
        }
        $questions[] = [
            'prompt' => $question['prompt'],
            'answers' => $visibleAnswers,
            'correct' => $correct,
            'explanation' => $question['explanation'],
        ];
    }
    return $questions;
}

function makeMatch(array $topic): array
{
    $pairs = [];
    foreach ($topic['questions'] as $question) {
        $pairs[] = [
            'term' => $question['prompt'],
            'meaning' => $question['answers'][(int)$question['correct']],
            'explanation' => $question['explanation'],
        ];
    }
    $rounds = [];
    foreach ($pairs as $pair) {
        $others = array_values(array_filter($pairs, static fn(array $candidate): bool => $candidate['term'] !== $pair['term']));
        $choices = shuffleSecure(array_merge([$pair], array_slice(shuffleSecure($others), 0, 3)));
        $correct = 0;
        $visibleChoices = [];
        foreach ($choices as $index => $choice) {
            $visibleChoices[] = ['meaning' => $choice['meaning']];
            if ($choice['term'] === $pair['term']) {
                $correct = $index;
            }
        }
        $rounds[] = [
            'term' => $pair['term'],
            'explanation' => $pair['explanation'],
            'choices' => $visibleChoices,
            'correct' => $correct,
        ];
    }
    return $rounds;
}

function makeReview(array $mistakes): array
{
    $questions = [];
    foreach (array_slice($mistakes, 0, 5) as $mistake) {
        if (!is_array($mistake) || !is_array($mistake['options'] ?? null)
            || count($mistake['options']) !== 4 || count(array_unique($mistake['options'])) !== 4
            || !in_array($mistake['correct'] ?? null, $mistake['options'], true)) {
            continue;
        }
        $answers = [];
        foreach ($mistake['options'] as $answer) {
            $answers[] = ['text' => $answer, 'correct' => $answer === $mistake['correct']];
        }
        $answers = shuffleSecure($answers);
        $visible = [];
        $correct = 0;
        foreach ($answers as $index => $answer) {
            $visible[] = $answer['text'];
            if ($answer['correct']) {
                $correct = $index;
            }
        }
        $questions[] = [
            'prompt' => $mistake['prompt'],
            'answers' => $visible,
            'correct' => $correct,
            'explanation' => $mistake['explanation'],
        ];
    }
    return $questions;
}

function evaluateChallenge(array $challenge, array $answers): ?array
{
    if (count($challenge) < 1 || count($answers) !== count($challenge)) {
        return null;
    }
    $correct = 0;
    $mistakes = [];
    foreach ($challenge as $index => $question) {
        $choice = $answers[$index] ?? null;
        if (!is_int($choice) || $choice < 0 || $choice > 3) {
            return null;
        }
        if ($choice === (int)$question['correct']) {
            $correct++;
            continue;
        }
        if (isset($question['choices'])) {
            $options = array_map(static fn(array $item): string => (string)$item['meaning'], $question['choices']);
            $prompt = 'Ghép ý nghĩa phù hợp với: ' . $question['term'];
        } else {
            $options = $question['answers'];
            $prompt = $question['prompt'];
        }
        $mistakes[] = [
            'prompt' => $prompt,
            'chosen' => $options[$choice],
            'correct' => $options[(int)$question['correct']],
            'explanation' => $question['explanation'],
            'options' => $options,
            'correctIndex' => (int)$question['correct'],
        ];
    }
    return ['correct' => $correct, 'total' => count($challenge), 'mistakes' => $mistakes];
}

function rewardFor(string $mode, int $correct, int $total, int $dailyCount, int $dailyGoal, bool $claimed): array
{
    $challengeXp = $mode === 'review'
        ? $correct * 5
        : $correct * 10 + ($correct / $total >= 0.6 ? 10 : 0);
    $dailyReward = $dailyCount >= $dailyGoal && !$claimed;
    return [
        'experienceEarned' => $challengeXp + ($dailyReward ? 20 : 0),
        'dailyRewardEarned' => $dailyReward,
    ];
}

function getAppData(array $session): array
{
    $userStatement = query(
        'SELECT u.*, c.name AS class_name FROM app_users u
         LEFT JOIN app_classes c ON c.id = u.class_id WHERE u.id = ?',
        [$session['user_id']],
    );
    $user = $userStatement->fetch();
    if (!$user) {
        respond(401, ['error' => 'Tài khoản này không còn khả dụng.']);
    }
    $curriculum = query('SELECT content FROM app_curriculum WHERE id = 1')->fetchColumn();
    $historyStatement = query(
        "SELECT id, subject_id AS subjectId, topic_id AS topicId, mode, correct, total,
                experience_points AS experiencePoints, mistakes, DATE_FORMAT(study_date, '%Y-%m-%d') AS date
         FROM learning_sessions WHERE user_id = ? ORDER BY played_at DESC LIMIT 100",
        [$session['user_id']],
    );
    $history = [];
    foreach ($historyStatement->fetchAll() as $entry) {
        $entry['correct'] = (int)$entry['correct'];
        $entry['total'] = (int)$entry['total'];
        $entry['experiencePoints'] = (int)$entry['experiencePoints'];
        $entry['mistakes'] = decodeJson($entry['mistakes']);
        $history[] = $entry;
    }
    $today = date('Y-m-d');
    $subjects = decodeJson($curriculum);
    return [
        'user' => array_merge(shapeUser($user), ['className' => $user['class_name']]),
        'progress' => [
            'completed' => (int)$user['completed'],
            'correct' => (int)$user['correct'],
            'totalAnswered' => (int)$user['total_answered'],
            'experiencePoints' => (int)$user['experience_points'],
            'bestScore' => (int)$user['best_score'],
            'dailyCount' => ($user['daily_date'] === $today) ? (int)$user['daily_count'] : 0,
            'date' => $today,
            'streak' => dayDistance($today, $user['last_study_date']) <= 1 ? (int)$user['streak'] : 0,
            'bestStreak' => (int)$user['best_streak'],
            'lastStudyDate' => $user['last_study_date'],
            'dailyRewardDate' => $user['daily_reward_date'],
            'displayName' => $user['display_name'],
            'grade' => (string)$user['grade'],
            'dailyGoal' => (int)$user['daily_goal'],
            'recent' => array_map(static fn(array $entry): int => (int)round($entry['correct'] / $entry['total'] * 100), array_slice($history, 0, 5)),
            'history' => $history,
        ],
        'subjects' => shapeCurriculumForLearners($subjects),
    ];
}

function apiPath(): string
{
    $path = parse_url((string)($_SERVER['REQUEST_URI'] ?? '/api'), PHP_URL_PATH) ?: '/api';
    if (str_starts_with($path, '/api/')) {
        return substr($path, 4);
    }
    return $path === '/api' ? '/' : $path;
}

$method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));
$path = apiPath();
$body = in_array($method, ['POST', 'PUT', 'PATCH', 'DELETE'], true) ? requestBody() : [];

try {
    if ($method === 'GET' && $path === '/health') {
        db()->query('SELECT 1');
        respond(200, ['status' => 'ok', 'app' => 'EduQuest', 'mode' => 'mysql']);
    }

    if ($method === 'GET' && $path === '/auth/session') {
        $session = currentSession();
        if (!$session) {
            $session = issueSession();
        }
        respond(200, [
            'csrfToken' => $session['csrf_token'],
            'registrationEnabled' => ($config['registration_enabled'] ?? true) !== false,
            'user' => !empty($session['user_id']) ? [
                'id' => $session['user_id'],
                'username' => $session['username'],
                'role' => $session['role'],
                'displayName' => $session['display_name'],
                'grade' => (string)$session['grade'],
                'dailyGoal' => (int)$session['daily_goal'],
            ] : null,
        ]);
    }

    if ($method === 'POST' && in_array($path, ['/auth/login', '/auth/register', '/auth/logout'], true)) {
        $session = currentSession() ?? issueSession();
        requireCsrf($session, $body);

        if ($path === '/auth/login') {
            rateLimit('login', 12, 900);
            $username = strtolower(trim((string)($body['username'] ?? '')));
            $password = (string)($body['password'] ?? '');
            $user = validUsername($username)
                ? query('SELECT * FROM app_users WHERE username = ?', [$username])->fetch()
                : false;
            $hash = $user ? (string)$user['password_hash'] : '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.';
            if (!password_verify(substr($password, 0, 128), $hash)
                || !$user || strlen($password) < 12 || strlen($password) > 128) {
                respond(401, ['error' => 'Tên đăng nhập hoặc mật khẩu chưa chính xác.']);
            }
            query('DELETE FROM app_sessions WHERE token_hash = ?', [$session['token_hash']]);
            $newSession = issueSession((string)$user['id']);
            respond(200, ['csrfToken' => $newSession['csrf_token'], 'user' => shapeUser($user)]);
        }

        if ($path === '/auth/register') {
            rateLimit('register', 5, 3600);
            if (($config['registration_enabled'] ?? true) === false) {
                respond(403, ['error' => 'Đăng ký tài khoản hiện đang tạm đóng. Hãy liên hệ quản trị viên.']);
            }
            $username = strtolower(trim((string)($body['username'] ?? '')));
            $displayName = normalizedDisplayName($body['displayName'] ?? null);
            $password = $body['password'] ?? null;
            $grade = filter_var($body['grade'] ?? null, FILTER_VALIDATE_INT);
            $classCode = strtoupper(trim((string)($body['classCode'] ?? '')));
            if (!validUsername($username) || $displayName === null || !validPassword($password)
                || $grade === false || $grade < 6 || $grade > 12
                || ($classCode !== '' && !preg_match('/^[A-Z0-9]{6,12}$/', $classCode))) {
                respond(400, ['error' => 'Vui lòng kiểm tra tên đăng nhập, tên hiển thị, khối lớp, mật khẩu và mã lớp.']);
            }
            $connection = db();
            try {
                $connection->beginTransaction();
                $classId = null;
                if ($classCode !== '') {
                    $classStatement = $connection->prepare('SELECT id, grade FROM app_classes WHERE join_code = ? FOR UPDATE');
                    $classStatement->execute([$classCode]);
                    $class = $classStatement->fetch();
                    if (!$class || (int)$class['grade'] !== $grade) {
                        $connection->rollBack();
                        respond(400, ['error' => 'Mã lớp không hợp lệ hoặc không thuộc khối lớp bạn đã chọn.']);
                    }
                    $classId = $class['id'];
                }
                $statement = $connection->prepare(
                    "INSERT INTO app_users (id, username, password_hash, role, display_name, grade, class_id)
                     VALUES (?, ?, ?, 'learner', ?, ?, ?)",
                );
                $statement->execute([uuid(), $username, password_hash($password, PASSWORD_DEFAULT), $displayName, $grade, $classId]);
                $connection->commit();
                respond(201, [
                    'registered' => true,
                    'username' => $username,
                    'message' => 'Tạo tài khoản thành công. Hãy đăng nhập để bắt đầu học nhé.',
                ]);
            } catch (PDOException $error) {
                if ($connection->inTransaction()) {
                    $connection->rollBack();
                }
                if ($error->getCode() === '23000') {
                    respond(409, ['error' => 'Tên đăng nhập này đã được sử dụng. Hãy chọn tên khác nhé.']);
                }
                throw $error;
            }
        }

        query('DELETE FROM app_sessions WHERE token_hash = ?', [$session['token_hash']]);
        setcookie(sessionCookieName(), '', [
            'expires' => time() - 3600,
            'path' => '/',
            'secure' => !empty($config['secure_cookies']),
            'httponly' => true,
            'samesite' => 'Strict',
        ]);
        respond(204);
    }

    $session = currentSession();

    if ($method === 'GET' && $path === '/app') {
        respond(200, getAppData(requireAuthentication($session)));
    }

    if ($method === 'PATCH' && $path === '/app/profile') {
        $session = requireAuthentication($session);
        requireCsrf($session, $body);
        $displayName = normalizedDisplayName($body['displayName'] ?? null);
        $grade = filter_var($body['grade'] ?? null, FILTER_VALIDATE_INT);
        $dailyGoal = filter_var($body['dailyGoal'] ?? null, FILTER_VALIDATE_INT);
        if ($displayName === null || $grade === false || $grade < 6 || $grade > 12
            || $dailyGoal === false || $dailyGoal < 1 || $dailyGoal > 5) {
            respond(400, ['error' => 'Tên hiển thị, khối lớp hoặc mục tiêu hằng ngày chưa hợp lệ.']);
        }
        query(
            'UPDATE app_users SET display_name = ?, grade = ?, daily_goal = ?, updated_at = UTC_TIMESTAMP() WHERE id = ?',
            [$displayName, $grade, $dailyGoal, $session['user_id']],
        );
        $user = query('SELECT * FROM app_users WHERE id = ?', [$session['user_id']])->fetch();
        respond(200, ['user' => shapeUser($user)]);
    }

    if ($method === 'POST' && $path === '/app/challenges') {
        $session = requireAuthentication($session);
        requireCsrf($session, $body);
        rateLimit('challenge', 60, 3600);
        $subjectId = $body['subjectId'] ?? null;
        $topicId = $body['topicId'] ?? null;
        $mode = $body['mode'] ?? null;
        if (!is_string($subjectId) || !preg_match('/^[a-z0-9][a-z0-9-]{1,79}$/', $subjectId)
            || !is_string($topicId) || !preg_match('/^[a-z0-9][a-z0-9-]{1,79}$/', $topicId)
            || !in_array($mode, ['quiz', 'match', 'review'], true)) {
            respond(400, ['error' => 'Chủ đề hoặc chế độ thử thách chưa hợp lệ.']);
        }
        $curriculum = decodeJson(query('SELECT content FROM app_curriculum WHERE id = 1')->fetchColumn());
        $topic = null;
        foreach ($curriculum as $subject) {
            if (($subject['id'] ?? null) !== $subjectId) {
                continue;
            }
            foreach ($subject['topics'] ?? [] as $candidate) {
                if (($candidate['id'] ?? null) === $topicId) {
                    $topic = $candidate;
                    break 2;
                }
            }
        }
        if (!$topic) {
            respond(404, ['error' => 'Không tìm thấy chủ đề.']);
        }
        $sourceSessionId = null;
        if ($mode === 'review') {
            $sourceSessionId = $body['sourceSessionId'] ?? null;
            if (!is_string($sourceSessionId) || !preg_match('/^[0-9a-f-]{36}$/i', $sourceSessionId)) {
                respond(400, ['error' => 'Không tìm thấy lượt học gốc để ôn tập.']);
            }
            $source = query(
                "SELECT mistakes FROM learning_sessions
                 WHERE id = ? AND user_id = ? AND subject_id = ? AND topic_id = ? AND mode IN ('quiz', 'match')",
                [$sourceSessionId, $session['user_id'], $subjectId, $topicId],
            )->fetch();
            if (!$source) {
                respond(404, ['error' => 'Lượt học gốc không có câu sai để ôn tập.']);
            }
            if (query('SELECT id FROM learning_sessions WHERE source_session_id = ? LIMIT 1', [$sourceSessionId])->fetch()) {
                respond(409, ['error' => 'Bạn đã ôn tập các câu sai từ lượt này rồi.']);
            }
            $challengeData = makeReview(decodeJson($source['mistakes']));
            if (!$challengeData) {
                respond(400, ['error' => 'Không thể tạo lượt ôn tập từ câu hỏi đã lưu.']);
            }
            $responseData = ['questions' => array_map(static function (array $item): array {
                unset($item['correct']);
                return $item;
            }, $challengeData)];
        } elseif ($mode === 'quiz') {
            $challengeData = makeQuiz($topic);
            $responseData = ['questions' => array_map(static function (array $item): array {
                unset($item['correct']);
                return $item;
            }, $challengeData)];
        } else {
            $challengeData = makeMatch($topic);
            $responseData = ['rounds' => array_map(static function (array $item): array {
                unset($item['correct']);
                return $item;
            }, $challengeData)];
        }
        $challengeId = uuid();
        query(
            'INSERT INTO app_challenges (id, user_id, subject_id, topic_id, mode, challenge_data, answers, expires_at, source_session_id)
             VALUES (?, ?, ?, ?, ?, ?, ?, DATE_ADD(UTC_TIMESTAMP(), INTERVAL 2 HOUR), ?)',
            [
                $challengeId,
                $session['user_id'],
                $subjectId,
                $topicId,
                $mode,
                json_encode($challengeData, JSON_UNESCAPED_UNICODE),
                '[]',
                $sourceSessionId,
            ],
        );
        respond(201, array_merge(['challengeId' => $challengeId, 'mode' => $mode], $responseData));
    }

    if ($method === 'POST' && preg_match('#^/app/challenges/([0-9a-f-]{36})/answer$#i', $path, $matches)) {
        $session = requireAuthentication($session);
        requireCsrf($session, $body);
        $connection = db();
        $connection->beginTransaction();
        try {
            $statement = $connection->prepare(
                'SELECT challenge_data, answers FROM app_challenges
                 WHERE id = ? AND user_id = ? AND expires_at > UTC_TIMESTAMP() FOR UPDATE',
            );
            $statement->execute([$matches[1], $session['user_id']]);
            $challenge = $statement->fetch();
            if (!$challenge) {
                $connection->rollBack();
                respond(404, ['error' => 'Thử thách đã hết hạn hoặc không còn khả dụng.']);
            }
            $data = decodeJson($challenge['challenge_data']);
            $answers = decodeJson($challenge['answers']);
            $index = $body['index'] ?? null;
            $choice = $body['choice'] ?? null;
            if (!is_int($index) || $index !== count($answers) || $index < 0 || $index >= count($data)
                || !is_int($choice) || $choice < 0 || $choice > 3) {
                $connection->rollBack();
                respond(400, ['error' => 'Câu trả lời không theo thứ tự hoặc chưa hợp lệ.']);
            }
            $answers[] = $choice;
            $update = $connection->prepare('UPDATE app_challenges SET answers = ? WHERE id = ?');
            $update->execute([json_encode($answers), $matches[1]]);
            $connection->commit();
            respond(200, [
                'index' => $index,
                'isCorrect' => $choice === (int)$data[$index]['correct'],
                'correctIndex' => (int)$data[$index]['correct'],
                'explanation' => $data[$index]['explanation'],
                'complete' => count($answers) === count($data),
            ]);
        } catch (Throwable $error) {
            if ($connection->inTransaction()) {
                $connection->rollBack();
            }
            throw $error;
        }
    }

    if ($method === 'POST' && $path === '/app/progress') {
        $session = requireAuthentication($session);
        requireCsrf($session, $body);
        $challengeId = $body['challengeId'] ?? null;
        if (!is_string($challengeId) || !preg_match('/^[0-9a-f-]{36}$/i', $challengeId)) {
            respond(400, ['error' => 'Kết quả thử thách không hợp lệ.']);
        }
        $connection = db();
        $connection->beginTransaction();
        try {
            $savedStatement = $connection->prepare(
                'SELECT correct, total, experience_points, daily_reward_earned, mistakes
                 FROM learning_sessions WHERE id = ? AND user_id = ?',
            );
            $savedStatement->execute([$challengeId, $session['user_id']]);
            $saved = $savedStatement->fetch();
            if ($saved) {
                $connection->commit();
                respond(200, [
                    'saved' => true,
                    'duplicate' => true,
                    'correct' => (int)$saved['correct'],
                    'total' => (int)$saved['total'],
                    'experienceEarned' => (int)$saved['experience_points'],
                    'dailyRewardEarned' => (bool)$saved['daily_reward_earned'],
                    'mistakes' => decodeJson($saved['mistakes']),
                ]);
            }
            $challengeStatement = $connection->prepare(
                'SELECT subject_id, topic_id, mode, challenge_data, answers, source_session_id
                 FROM app_challenges WHERE id = ? AND user_id = ? AND expires_at > UTC_TIMESTAMP() FOR UPDATE',
            );
            $challengeStatement->execute([$challengeId, $session['user_id']]);
            $challenge = $challengeStatement->fetch();
            if (!$challenge) {
                $connection->rollBack();
                respond(404, ['error' => 'Thử thách đã hết hạn hoặc đã được dùng.']);
            }
            $evaluation = evaluateChallenge(
                decodeJson($challenge['challenge_data']),
                decodeJson($challenge['answers']),
            );
            if (!$evaluation) {
                $connection->rollBack();
                respond(400, ['error' => 'Hãy hoàn thành toàn bộ câu hỏi trước khi lưu kết quả.']);
            }
            $userStatement = $connection->prepare(
                'SELECT daily_goal, daily_count, daily_date, daily_reward_date, last_study_date, streak, best_streak
                 FROM app_users WHERE id = ? FOR UPDATE',
            );
            $userStatement->execute([$session['user_id']]);
            $learner = $userStatement->fetch();
            if (!$learner) {
                throw new RuntimeException('Learner account disappeared during progress save.');
            }
            $today = date('Y-m-d');
            $dailyCount = $learner['daily_date'] === $today ? (int)$learner['daily_count'] + 1 : 1;
            $dailyRewardClaimed = $learner['daily_reward_date'] === $today;
            $reward = rewardFor(
                $challenge['mode'],
                $evaluation['correct'],
                $evaluation['total'],
                $dailyCount,
                (int)$learner['daily_goal'],
                $dailyRewardClaimed,
            );
            $streak = (int)$learner['streak'];
            $lastStudyDate = $learner['last_study_date'];
            $bestStreak = (int)$learner['best_streak'];
            if ($lastStudyDate !== $today) {
                $streak = dayDistance($today, $lastStudyDate) === 1 ? $streak + 1 : 1;
                $lastStudyDate = $today;
                $bestStreak = max($bestStreak, $streak);
            }
            $insert = $connection->prepare(
                'INSERT INTO learning_sessions
                 (id, user_id, subject_id, topic_id, mode, correct, total, experience_points, mistakes, study_date, source_session_id, daily_reward_earned)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            );
            $insert->execute([
                $challengeId,
                $session['user_id'],
                $challenge['subject_id'],
                $challenge['topic_id'],
                $challenge['mode'],
                $evaluation['correct'],
                $evaluation['total'],
                $reward['experienceEarned'],
                json_encode($evaluation['mistakes'], JSON_UNESCAPED_UNICODE),
                $today,
                $challenge['source_session_id'],
                $reward['dailyRewardEarned'] ? 1 : 0,
            ]);
            $delete = $connection->prepare('DELETE FROM app_challenges WHERE id = ?');
            $delete->execute([$challengeId]);
            $update = $connection->prepare(
                'UPDATE app_users SET completed = completed + 1, correct = correct + ?, total_answered = total_answered + ?,
                    experience_points = experience_points + ?, best_score = GREATEST(best_score, ?),
                    daily_count = ?, daily_date = ?, daily_reward_date = IF(?, ?, daily_reward_date),
                    streak = ?, best_streak = ?, last_study_date = ?, updated_at = UTC_TIMESTAMP()
                 WHERE id = ?',
            );
            $update->execute([
                $evaluation['correct'],
                $evaluation['total'],
                $reward['experienceEarned'],
                (int)round($evaluation['correct'] / $evaluation['total'] * 100),
                $dailyCount,
                $today,
                $reward['dailyRewardEarned'] ? 1 : 0,
                $today,
                $streak,
                $bestStreak,
                $lastStudyDate,
                $session['user_id'],
            ]);
            $connection->commit();
            respond(201, array_merge(
                ['saved' => true, 'duplicate' => false],
                $evaluation,
                $reward,
            ));
        } catch (Throwable $error) {
            if ($connection->inTransaction()) {
                $connection->rollBack();
            }
            throw $error;
        }
    }

    if ($path === '/admin/overview' && $method === 'GET') {
        requireAdministrator($session);
        $counts = query(
            "SELECT (SELECT COUNT(*) FROM app_users WHERE role = 'learner') AS learners,
                    (SELECT COUNT(*) FROM app_classes) AS classes,
                    (SELECT COUNT(*) FROM learning_sessions) AS sessions,
                    COALESCE((SELECT ROUND(100 * SUM(correct) / NULLIF(SUM(total), 0)) FROM learning_sessions), 0) AS accuracy",
        )->fetch();
        foreach ($counts as $key => $value) {
            $counts[$key] = (int)$value;
        }
        $usage = query(
            'SELECT subject_id AS subjectId, COUNT(*) AS sessions FROM learning_sessions
             GROUP BY subject_id ORDER BY sessions DESC LIMIT 5',
        )->fetchAll();
        foreach ($usage as &$item) {
            $item['sessions'] = (int)$item['sessions'];
        }
        unset($item);
        respond(200, array_merge($counts, ['usage' => $usage]));
    }

    if ($path === '/admin/classes' && $method === 'GET') {
        requireAdministrator($session);
        $classes = query(
            "SELECT c.id, c.name, c.grade, c.join_code AS joinCode, c.created_at AS createdAt,
                    COUNT(u.id) AS learnerCount
             FROM app_classes c LEFT JOIN app_users u ON u.class_id = c.id AND u.role = 'learner'
             GROUP BY c.id, c.name, c.grade, c.join_code, c.created_at ORDER BY c.created_at DESC",
        )->fetchAll();
        foreach ($classes as &$class) {
            $class['grade'] = (int)$class['grade'];
            $class['learnerCount'] = (int)$class['learnerCount'];
        }
        unset($class);
        respond(200, ['classes' => $classes]);
    }

    if ($path === '/admin/classes' && $method === 'POST') {
        $session = requireAdministrator($session);
        requireCsrf($session, $body);
        rateLimit('admin-create', 50, 3600);
        $name = trim((string)($body['name'] ?? ''));
        $grade = filter_var($body['grade'] ?? null, FILTER_VALIDATE_INT);
        if (strlen($name) < 2 || strlen($name) > 80 || $grade === false || $grade < 6 || $grade > 12) {
            respond(400, ['error' => 'Tên lớp cần từ 2 đến 80 ký tự và khối lớp từ 6 đến 12.']);
        }
        for ($attempt = 0; $attempt < 3; $attempt++) {
            $class = ['id' => uuid(), 'joinCode' => randomCode()];
            try {
                query('INSERT INTO app_classes (id, name, grade, join_code) VALUES (?, ?, ?, ?)', [
                    $class['id'], $name, $grade, $class['joinCode'],
                ]);
                respond(201, ['class' => array_merge($class, ['name' => $name, 'grade' => $grade, 'learnerCount' => 0])]);
            } catch (PDOException $error) {
                if ($error->getCode() !== '23000' || $attempt === 2) {
                    throw $error;
                }
            }
        }
    }

    if (preg_match('#^/admin/classes/([0-9a-f-]{36})$#i', $path, $matches)) {
        $session = requireAdministrator($session);
        requireCsrf($session, $body);
        if ($method === 'PATCH') {
            $name = trim((string)($body['name'] ?? ''));
            $grade = filter_var($body['grade'] ?? null, FILTER_VALIDATE_INT);
            if (strlen($name) < 2 || strlen($name) > 80 || $grade === false || $grade < 6 || $grade > 12) {
                respond(400, ['error' => 'Tên lớp hoặc khối lớp chưa hợp lệ.']);
            }
            query('UPDATE app_classes SET name = ?, grade = ? WHERE id = ?', [$name, $grade, $matches[1]]);
            $row = query('SELECT id, name, grade, join_code AS joinCode FROM app_classes WHERE id = ?', [$matches[1]])->fetch();
            if (!$row) {
                respond(404, ['error' => 'Không tìm thấy lớp học.']);
            }
            $row['grade'] = (int)$row['grade'];
            respond(200, ['class' => $row]);
        }
        if ($method === 'DELETE') {
            $deleted = query(
                'DELETE FROM app_classes WHERE id = ? AND NOT EXISTS (SELECT 1 FROM app_users WHERE class_id = ?)',
                [$matches[1], $matches[1]],
            );
            if ($deleted->rowCount() === 0) {
                respond(409, ['error' => 'Không thể xóa lớp không tồn tại hoặc còn học sinh. Hãy chuyển học sinh sang lớp khác trước.']);
            }
            respond(204);
        }
    }

    if ($path === '/admin/administrators' && $method === 'GET') {
        requireAdministrator($session);
        respond(200, ['administrators' => query(
            "SELECT id, username, display_name AS displayName, created_at AS createdAt
             FROM app_users WHERE role = 'admin' ORDER BY created_at, username",
        )->fetchAll()]);
    }

    if ($path === '/admin/administrators' && $method === 'POST') {
        $session = requireAdministrator($session);
        requireCsrf($session, $body);
        rateLimit('admin-create', 50, 3600);
        $username = strtolower(trim((string)($body['username'] ?? '')));
        $displayName = normalizedDisplayName($body['displayName'] ?? null);
        $password = $body['password'] ?? null;
        if (!validUsername($username) || $displayName === null || !validPassword($password)) {
            respond(400, ['error' => 'Tên đăng nhập chưa hợp lệ hoặc mật khẩu cần có từ 12 đến 128 ký tự.']);
        }
        try {
            query(
                "INSERT INTO app_users (id, username, password_hash, role, display_name, grade)
                 VALUES (?, ?, ?, 'admin', ?, 9)",
                [uuid(), $username, password_hash($password, PASSWORD_DEFAULT), $displayName],
            );
        } catch (PDOException $error) {
            if ($error->getCode() === '23000') {
                respond(409, ['error' => 'Tên đăng nhập này đã được sử dụng. Hãy chọn tên khác nhé.']);
            }
            throw $error;
        }
        respond(201, ['administrator' => query(
            'SELECT id, username, display_name AS displayName, created_at AS createdAt FROM app_users WHERE username = ?',
            [$username],
        )->fetch()]);
    }

    if ($path === '/admin/learners' && $method === 'GET') {
        requireAdministrator($session);
        $classId = isset($_GET['classId']) && $_GET['classId'] !== '' ? (string)$_GET['classId'] : null;
        $learners = query(
            "SELECT u.id, u.username, u.display_name AS displayName, u.grade, u.daily_goal AS dailyGoal,
                    u.class_id AS classId, c.name AS className, u.completed, u.correct,
                    u.total_answered AS totalAnswered, u.experience_points AS experiencePoints,
                    u.best_score AS bestScore, u.streak, u.best_streak AS bestStreak, u.created_at AS createdAt
             FROM app_users u LEFT JOIN app_classes c ON c.id = u.class_id
             WHERE u.role = 'learner' AND (? IS NULL OR u.class_id = ?)
             ORDER BY u.display_name, u.username",
            [$classId, $classId],
        )->fetchAll();
        foreach ($learners as &$learner) {
            foreach (['grade', 'dailyGoal', 'completed', 'correct', 'totalAnswered', 'experiencePoints', 'bestScore', 'streak', 'bestStreak'] as $field) {
                $learner[$field] = (int)$learner[$field];
            }
        }
        unset($learner);
        respond(200, ['learners' => $learners]);
    }

    if ($path === '/admin/learners' && $method === 'POST') {
        $session = requireAdministrator($session);
        requireCsrf($session, $body);
        rateLimit('admin-create', 50, 3600);
        $username = strtolower(trim((string)($body['username'] ?? '')));
        $displayName = normalizedDisplayName($body['displayName'] ?? null);
        $password = $body['password'] ?? null;
        $grade = filter_var($body['grade'] ?? null, FILTER_VALIDATE_INT);
        $dailyGoal = filter_var($body['dailyGoal'] ?? 3, FILTER_VALIDATE_INT);
        $classId = !empty($body['classId']) ? (string)$body['classId'] : null;
        if (!validUsername($username) || $displayName === null || !validPassword($password)
            || $grade === false || $grade < 6 || $grade > 12
            || $dailyGoal === false || $dailyGoal < 1 || $dailyGoal > 5) {
            respond(400, ['error' => 'Tên tài khoản, mật khẩu tạm (ít nhất 12 ký tự), tên hiển thị hoặc cài đặt học tập chưa hợp lệ.']);
        }
        if ($classId && !query('SELECT id FROM app_classes WHERE id = ?', [$classId])->fetch()) {
            respond(400, ['error' => 'Lớp học được chọn không tồn tại.']);
        }
        try {
            query(
                "INSERT INTO app_users (id, username, password_hash, role, display_name, grade, daily_goal, class_id)
                 VALUES (?, ?, ?, 'learner', ?, ?, ?, ?)",
                [uuid(), $username, password_hash($password, PASSWORD_DEFAULT), $displayName, $grade, $dailyGoal, $classId],
            );
        } catch (PDOException $error) {
            if ($error->getCode() === '23000') {
                respond(409, ['error' => 'Tên đăng nhập đã tồn tại. Hãy chọn tên khác.']);
            }
            throw $error;
        }
        respond(201, ['learner' => query(
            'SELECT id, username, display_name AS displayName, grade, daily_goal AS dailyGoal, class_id AS classId
             FROM app_users WHERE username = ?',
            [$username],
        )->fetch()]);
    }

    if (preg_match('#^/admin/learners/([0-9a-f-]{36})/history$#i', $path, $matches) && $method === 'GET') {
        requireAdministrator($session);
        $history = query(
            "SELECT id, subject_id AS subjectId, topic_id AS topicId, mode, correct, total,
                    experience_points AS experiencePoints, mistakes, DATE_FORMAT(study_date, '%Y-%m-%d') AS date,
                    played_at AS playedAt
             FROM learning_sessions WHERE user_id = ? ORDER BY played_at DESC LIMIT 100",
            [$matches[1]],
        )->fetchAll();
        foreach ($history as &$entry) {
            $entry['correct'] = (int)$entry['correct'];
            $entry['total'] = (int)$entry['total'];
            $entry['experiencePoints'] = (int)$entry['experiencePoints'];
            $entry['mistakes'] = decodeJson($entry['mistakes']);
        }
        unset($entry);
        respond(200, ['history' => $history]);
    }

    if (preg_match('#^/admin/learners/([0-9a-f-]{36})$#i', $path, $matches)) {
        $session = requireAdministrator($session);
        requireCsrf($session, $body);
        if ($method === 'PATCH') {
            $displayName = normalizedDisplayName($body['displayName'] ?? null);
            $grade = filter_var($body['grade'] ?? null, FILTER_VALIDATE_INT);
            $dailyGoal = filter_var($body['dailyGoal'] ?? null, FILTER_VALIDATE_INT);
            $classId = !empty($body['classId']) ? (string)$body['classId'] : null;
            $password = $body['password'] ?? null;
            if ($displayName === null || $grade === false || $grade < 6 || $grade > 12
                || $dailyGoal === false || $dailyGoal < 1 || $dailyGoal > 5
                || ($password !== null && !validPassword($password))) {
                respond(400, ['error' => 'Thông tin học sinh hoặc mật khẩu mới chưa hợp lệ.']);
            }
            if ($classId && !query('SELECT id FROM app_classes WHERE id = ?', [$classId])->fetch()) {
                respond(400, ['error' => 'Lớp học được chọn không tồn tại.']);
            }
            $hash = $password !== null && $password !== '' ? password_hash($password, PASSWORD_DEFAULT) : null;
            $connection = db();
            $connection->beginTransaction();
            try {
                $statement = $connection->prepare(
                    "UPDATE app_users SET display_name = ?, grade = ?, daily_goal = ?, class_id = ?,
                        password_hash = COALESCE(?, password_hash), updated_at = UTC_TIMESTAMP()
                     WHERE id = ? AND role = 'learner'",
                );
                $statement->execute([$displayName, $grade, $dailyGoal, $classId, $hash, $matches[1]]);
                if ($statement->rowCount() === 0 && !query("SELECT id FROM app_users WHERE id = ? AND role = 'learner'", [$matches[1]])->fetch()) {
                    $connection->rollBack();
                    respond(404, ['error' => 'Không tìm thấy học sinh.']);
                }
                if ($hash !== null) {
                    $revoke = $connection->prepare('DELETE FROM app_sessions WHERE user_id = ?');
                    $revoke->execute([$matches[1]]);
                }
                $connection->commit();
            } catch (Throwable $error) {
                if ($connection->inTransaction()) {
                    $connection->rollBack();
                }
                throw $error;
            }
            respond(200, ['learner' => query(
                'SELECT id, username, display_name AS displayName, grade, daily_goal AS dailyGoal, class_id AS classId
                 FROM app_users WHERE id = ?',
                [$matches[1]],
            )->fetch()]);
        }
        if ($method === 'DELETE') {
            $deleted = query("DELETE FROM app_users WHERE id = ? AND role = 'learner'", [$matches[1]]);
            if ($deleted->rowCount() === 0) {
                respond(404, ['error' => 'Không tìm thấy học sinh.']);
            }
            respond(204);
        }
    }

    if ($path === '/admin/curriculum' && $method === 'GET') {
        requireAdministrator($session);
        $row = query('SELECT content, updated_at AS updatedAt FROM app_curriculum WHERE id = 1')->fetch();
        respond(200, ['subjects' => decodeJson($row['content'] ?? null), 'updatedAt' => $row['updatedAt'] ?? null]);
    }

    if ($path === '/admin/curriculum' && $method === 'PUT') {
        $session = requireAdministrator($session);
        requireCsrf($session, $body);
        $subjects = $body['subjects'] ?? null;
        $error = validateCurriculum($subjects);
        if ($error !== null) {
            respond(400, ['error' => $error]);
        }
        query('UPDATE app_curriculum SET content = ?, updated_by = ?, updated_at = UTC_TIMESTAMP() WHERE id = 1', [
            json_encode($subjects, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
            $session['user_id'],
        ]);
        $updatedAt = query('SELECT updated_at FROM app_curriculum WHERE id = 1')->fetchColumn();
        respond(200, ['saved' => true, 'updatedAt' => $updatedAt]);
    }

    if (str_starts_with($path, '/admin/')) {
        requireAdministrator($session);
    }
    respond(404, ['error' => 'Không tìm thấy API.']);
} catch (Throwable $error) {
    $requestId = uuid();
    error_log(sprintf('[%s] %s %s: %s', $requestId, $method, $path, $error->getMessage()));
    respond(500, ['error' => 'Máy chủ gặp sự cố khi xử lý yêu cầu.', 'requestId' => $requestId]);
}
