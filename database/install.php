<?php
declare(strict_types=1);

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

$configPath = dirname(__DIR__, 2) . '/eduquest-config.php';
if (!is_file($configPath)) {
    fwrite(STDERR, "Missing private config file: {$configPath}\n");
    exit(1);
}
$config = require $configPath;
if (!is_array($config)) {
    fwrite(STDERR, "The private config file must return an array.\n");
    exit(1);
}
date_default_timezone_set((string)($config['timezone'] ?? 'Asia/Ho_Chi_Minh'));

$host = (string)($config['database_host'] ?? 'localhost');
$name = (string)($config['database_name'] ?? '');
$user = (string)($config['database_user'] ?? '');
$password = (string)($config['database_password'] ?? '');
$adminUsername = strtolower(trim((string)($config['initial_admin_username'] ?? 'admin')));
$adminPassword = (string)($config['initial_admin_password'] ?? '');
$curriculumPath = __DIR__ . '/mysql-starter-curriculum.json';
$schemaPath = __DIR__ . '/mysql-schema.sql';

if ($name === '' || $user === '' || !preg_match('/^[a-z0-9][a-z0-9_.-]{2,39}$/', $adminUsername)
    || !is_file($curriculumPath) || !is_file($schemaPath)) {
    fwrite(STDERR, "Check MySQL credentials, initial admin username, schema, and curriculum files.\n");
    exit(1);
}

try {
    $pdo = new PDO(
        "mysql:host={$host};dbname={$name};charset=utf8mb4",
        $user,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ],
    );
    $pdo->exec("SET time_zone = '+00:00'");
    $schema = file_get_contents($schemaPath);
    foreach (explode(';', (string)$schema) as $statement) {
        if (trim($statement) !== '') {
            $pdo->exec($statement);
        }
    }

    $adminQuery = $pdo->prepare('SELECT id, role FROM app_users WHERE username = ?');
    $adminQuery->execute([$adminUsername]);
    $existingAdmin = $adminQuery->fetch();
    if ($existingAdmin && $existingAdmin['role'] !== 'admin') {
        throw new RuntimeException('The initial admin username already belongs to a learner; choose another username.');
    }
    if (!$existingAdmin) {
        if (strlen($adminPassword) < 14 || strlen($adminPassword) > 128) {
            throw new RuntimeException('Set the initial admin password to 14-128 characters before first installation.');
        }
        $bytes = random_bytes(16);
        $bytes[6] = chr((ord($bytes[6]) & 0x0f) | 0x40);
        $bytes[8] = chr((ord($bytes[8]) & 0x3f) | 0x80);
        $hex = bin2hex($bytes);
        $adminId = substr($hex, 0, 8) . '-' . substr($hex, 8, 4) . '-' . substr($hex, 12, 4)
            . '-' . substr($hex, 16, 4) . '-' . substr($hex, 20);
        $insertAdmin = $pdo->prepare(
            "INSERT INTO app_users (id, username, password_hash, role, display_name, grade, daily_date)
             VALUES (?, ?, ?, 'admin', 'Quản trị viên', 9, ?)",
        );
        $insertAdmin->execute([$adminId, $adminUsername, password_hash($adminPassword, PASSWORD_DEFAULT), date('Y-m-d')]);
        fwrite(STDOUT, "Created initial administrator: {$adminUsername}\n");
    } else {
        fwrite(STDOUT, "Initial administrator already exists; password was not changed.\n");
    }

    $curriculum = json_decode((string)file_get_contents($curriculumPath), true, 512, JSON_THROW_ON_ERROR);
    if (!is_array($curriculum) || count($curriculum) === 0) {
        throw new RuntimeException('Starter curriculum file is empty or invalid.');
    }
    $seedCurriculum = $pdo->prepare(
        'INSERT INTO app_curriculum (id, content) VALUES (1, ?)
         ON DUPLICATE KEY UPDATE id = VALUES(id)',
    );
    $seedCurriculum->execute([json_encode($curriculum, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR)]);
    $pdo->exec('DELETE FROM app_sessions WHERE expires_at < UTC_TIMESTAMP()');
    $pdo->exec('DELETE FROM app_challenges WHERE expires_at < UTC_TIMESTAMP()');
    fwrite(STDOUT, 'MySQL schema and starter curriculum are ready. Keep the private config outside public_html and remove its initial admin password after setup if desired; changing it does not rotate the stored password.' . PHP_EOL);
} catch (Throwable $error) {
    fwrite(STDERR, 'EduQuest MySQL install failed: ' . $error->getMessage() . PHP_EOL);
    exit(1);
}
