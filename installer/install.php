<?php
declare(strict_types=1);

$configPath = dirname(__DIR__) . '/eduquest-config.php';
$dataDirectory = __DIR__ . '/eduquest-install';

ini_set('display_errors', '0');
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store, private');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('X-Frame-Options: DENY');
header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'");

function escapeHtml(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function renderPage(string $title, string $content, int $status = 200): never
{
    http_response_code($status);
    echo '<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">';
    echo '<title>' . escapeHtml($title) . ' · EduQuest</title><style>
        :root{color-scheme:light;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:#f3f7ff;color:#18233d}
        *{box-sizing:border-box}body{margin:0;min-height:100vh;padding:32px 16px;display:grid;place-items:center}
        main{width:min(100%,680px);background:#fff;border:1px solid #dce6f6;border-radius:24px;padding:clamp(22px,5vw,42px);box-shadow:0 18px 60px #264b8517}
        h1{font-size:clamp(1.6rem,4vw,2.2rem);margin:0 0 8px;color:#203c87}p{line-height:1.65;color:#52617b}
        .badge{display:inline-block;color:#2856be;background:#edf3ff;border-radius:999px;padding:6px 12px;font-weight:700;font-size:.85rem;margin-bottom:16px}
        .grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.field{display:grid;gap:6px;margin:12px 0}
        label{font-size:.92rem;font-weight:650}input{width:100%;padding:12px;border:1px solid #bbc9df;border-radius:10px;font:inherit;color:inherit}
        input:focus{outline:3px solid #99b8ff;outline-offset:1px}.wide{grid-column:1/-1}
        .check{display:flex;align-items:flex-start;gap:10px;margin:16px 0}.check input{width:18px;height:18px;margin:2px 0}
        button{width:100%;border:0;border-radius:12px;padding:14px 18px;background:#315fd2;color:white;font:inherit;font-weight:750;cursor:pointer;margin-top:10px}
        button:hover{background:#234cad}.notice{border-radius:12px;padding:13px 15px;background:#fff5e8;color:#77460a;margin:18px 0}
        .error{background:#fff0ef;color:#922e2a}.success{background:#e9f8ef;color:#176439}
        code{overflow-wrap:anywhere}small{color:#66738b}a{color:#234cad;font-weight:650}
        @media(max-width:560px){.grid{grid-template-columns:1fr}.wide{grid-column:auto}}
        @media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation:none!important;transition:none!important}}
    </style><main><span class="badge">EduQuest · Cài đặt hosting</span>' . $content . '</main></html>';
    exit;
}

function makeCsrfToken(): string
{
    if (!isset($_SESSION['installer_csrf'])) {
        $_SESSION['installer_csrf'] = bin2hex(random_bytes(32));
    }
    return (string)$_SESSION['installer_csrf'];
}

function formPage(string $csrf, string $error = '', array $values = []): never
{
    $registrationEnabled = ($values['registration_enabled'] ?? '1') === '1';
    $secureCookies = ($values['secure_cookies'] ?? '1') === '1';
    $errorMarkup = $error === '' ? '' : '<div class="notice error" role="alert">' . escapeHtml($error) . '</div>';
    $checkedRegistration = $registrationEnabled ? ' checked' : '';
    $checkedSecure = $secureCookies ? ' checked' : '';
    $html = '<h1>Cài đặt EduQuest</h1><p>Nhập thông tin MySQL trong cPanel. Bộ cài sẽ tạo các bảng, nạp nội dung học và tạo tài khoản quản trị viên.</p>'
        . '<div class="notice">Hãy bật HTTPS trước khi cài đặt. Sau khi hoàn tất, bộ cài sẽ tự khóa và xóa các tệp cài đặt phụ.</div>'
        . $errorMarkup
        . '<form method="post" autocomplete="off"><input type="hidden" name="csrf" value="' . escapeHtml($csrf) . '">'
        . '<h2>Thông tin MySQL</h2><div class="grid">'
        . field('Máy chủ MySQL', 'database_host', (string)($values['database_host'] ?? 'localhost'), 'localhost', 'text', false)
        . field('Tên database', 'database_name', (string)($values['database_name'] ?? ''), 'cpaneluser_eduquest', 'text', true)
        . field('Tên user database', 'database_user', (string)($values['database_user'] ?? ''), 'cpaneluser_app', 'text', true)
        . field('Mật khẩu database', 'database_password', '', 'Nhập mật khẩu MySQL', 'password', true)
        . '</div><h2>Tài khoản quản trị</h2><div class="grid">'
        . field('Tên đăng nhập admin', 'admin_username', (string)($values['admin_username'] ?? ''), 'Ví dụ: eduquestadmin', 'text', true)
        . field('Mật khẩu admin', 'admin_password', '', 'Ít nhất 14 ký tự', 'password', true)
        . '</div><label class="check"><input type="checkbox" name="registration_enabled" value="1"' . $checkedRegistration . '><span>Cho phép học sinh tự đăng ký tài khoản</span></label>'
        . '<label class="check"><input type="checkbox" name="secure_cookies" value="1"' . $checkedSecure . '><span>Website đã cài HTTPS (khuyến nghị bật)</span></label>'
        . '<button type="submit">Kiểm tra và cài đặt</button></form>'
        . '<p><small>Thông tin database được lưu ngoài thư mục website. Mật khẩu admin chỉ được lưu dưới dạng mã băm trong MySQL.</small></p>';
    renderPage('Cài đặt', $html);
}

function field(string $label, string $name, string $value, string $placeholder, string $type, bool $wide): string
{
    $valueAttribute = $type === 'password' ? '' : ' value="' . escapeHtml($value) . '"';
    $autocomplete = $type === 'password' ? ' autocomplete="new-password"' : '';
    return '<div class="field' . ($wide ? ' wide' : '') . '"><label for="' . escapeHtml($name) . '">' . escapeHtml($label)
        . '</label><input id="' . escapeHtml($name) . '" name="' . escapeHtml($name) . '" type="' . escapeHtml($type)
        . '"' . $valueAttribute . ' placeholder="' . escapeHtml($placeholder) . '"' . $autocomplete
        . ' required maxlength="' . ($type === 'password' ? '128' : '255') . '"></div>';
}

function validateIdentifier(string $value, string $label, int $maxLength = 64): string
{
    if (strlen($value) > $maxLength || preg_match('/^[A-Za-z0-9_$]+$/', $value) !== 1) {
        throw new RuntimeException($label . ' không hợp lệ. Hãy sao chép chính xác tên trong cPanel.');
    }
    return $value;
}

function schemaStatements(string $schema): array
{
    $statements = array_values(array_filter(array_map('trim', explode(';', $schema))));
    if (count($statements) !== 7) {
        throw new RuntimeException('Không đọc được đầy đủ cấu trúc database. Hãy tải lại gói cài đặt.');
    }
    return $statements;
}

function writePrivateConfig(string $path, array $config): void
{
    $handle = @fopen($path, 'x');
    if ($handle === false) {
        throw new RuntimeException('Không thể tạo tệp cấu hình ngoài public_html. Hãy kiểm tra quyền ghi thư mục tài khoản hoặc nhờ Vietnix hỗ trợ.');
    }
    try {
        $contents = "<?php\nreturn " . var_export($config, true) . ";\n";
        if (fwrite($handle, $contents) !== strlen($contents) || !fflush($handle)) {
            throw new RuntimeException('Không ghi đầy đủ được tệp cấu hình. Hãy thử lại hoặc nhờ Vietnix kiểm tra dung lượng/quyền ghi.');
        }
    } catch (Throwable $error) {
        fclose($handle);
        @unlink($path);
        throw $error;
    }
    fclose($handle);
    if (!@chmod($path, 0600)) {
        @unlink($path);
        throw new RuntimeException('Tạo được cấu hình nhưng không khóa được quyền đọc. Hãy liên hệ Vietnix để cấp quyền file riêng tư rồi thử lại.');
    }
}

$isHttps = (!empty($_SERVER['HTTPS']) && strtolower((string)$_SERVER['HTTPS']) !== 'off')
    || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'secure' => $isHttps,
    'httponly' => true,
    'samesite' => 'Strict',
]);
session_start();

if (is_file($configPath)) {
    renderPage(
        'Đã cài đặt',
        '<h1>EduQuest đã được cài đặt</h1><p>Tệp cấu hình database đã tồn tại. Bộ cài đã bị khóa để bảo vệ dữ liệu.</p><p>Nếu bạn vừa cài xong, hãy xóa thủ công <code>install.php</code> khỏi <code>public_html</code>. Không xóa tệp cấu hình bên ngoài thư mục website.</p>',
        410,
    );
}

$method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));
$csrf = makeCsrfToken();
if ($method !== 'POST') {
    formPage($csrf);
}

$submittedCsrf = (string)($_POST['csrf'] ?? '');
if (!hash_equals($csrf, $submittedCsrf)) {
    formPage($csrf, 'Phiên cài đặt hết hạn hoặc không hợp lệ. Tải lại trang rồi thử lại.');
}

$values = [
    'database_host' => trim((string)($_POST['database_host'] ?? 'localhost')),
    'database_name' => trim((string)($_POST['database_name'] ?? '')),
    'database_user' => trim((string)($_POST['database_user'] ?? '')),
    'admin_username' => strtolower(trim((string)($_POST['admin_username'] ?? ''))),
    'registration_enabled' => isset($_POST['registration_enabled']) ? '1' : '0',
    'secure_cookies' => isset($_POST['secure_cookies']) ? '1' : '0',
];
$databasePassword = (string)($_POST['database_password'] ?? '');
$adminPassword = (string)($_POST['admin_password'] ?? '');
$lockPath = dirname($configPath) . '/.eduquest-install.lock';
$lockHandle = @fopen($lockPath, 'x');
if ($lockHandle === false && is_file($lockPath) && (time() - (int)filemtime($lockPath)) > 900) {
    @unlink($lockPath);
    $lockHandle = @fopen($lockPath, 'x');
}
if ($lockHandle === false) {
    formPage($csrf, 'Một tiến trình cài đặt khác đang chạy hoặc khóa cài đặt còn sót lại. Kiểm tra lại website trước khi thử tiếp.', $values);
}
fwrite($lockHandle, (string)getmypid());
fclose($lockHandle);

try {
    if (!$isHttps && $values['secure_cookies'] === '1') {
        throw new RuntimeException('Bạn đã bật cookie bảo mật nhưng trang cài đặt chưa chạy HTTPS. Hãy bật SSL/HTTPS trước, hoặc bỏ chọn mục HTTPS để thử tạm (không khuyến nghị cho website thật).');
    }
    if (preg_match('/^[A-Za-z0-9_.:-]{1,255}$/', $values['database_host']) !== 1) {
        throw new RuntimeException('Địa chỉ máy chủ MySQL không hợp lệ. Thường giá trị là localhost.');
    }
    validateIdentifier($values['database_name'], 'Tên database');
    validateIdentifier($values['database_user'], 'Tên user database');
    if (!preg_match('/^[a-z0-9][a-z0-9_.-]{2,39}$/', $values['admin_username'])) {
        throw new RuntimeException('Tên admin cần dài 3-40 ký tự, bắt đầu bằng chữ/số và chỉ dùng chữ thường, số, dấu chấm, gạch dưới hoặc gạch ngang.');
    }
    if (strlen($databasePassword) > 256 || strlen($adminPassword) < 14 || strlen($adminPassword) > 128) {
        throw new RuntimeException('Mật khẩu database quá dài hoặc mật khẩu admin chưa đạt yêu cầu 14-128 ký tự.');
    }
    if (!extension_loaded('pdo_mysql')) {
        throw new RuntimeException('Hosting chưa bật tiện ích PHP PDO_MYSQL. Hãy bật trong cPanel hoặc nhờ Vietnix hỗ trợ.');
    }

    $schemaPath = $dataDirectory . '/mysql-schema.sql';
    $curriculumPath = $dataDirectory . '/curriculum.php';
    if (!is_file($schemaPath) || !is_file($curriculumPath)) {
        throw new RuntimeException('Thiếu dữ liệu cài đặt trong gói. Hãy tải lên cả thư mục eduquest-install cùng install.php.');
    }
    $schema = file_get_contents($schemaPath);
    if ($schema === false) {
        throw new RuntimeException('Không đọc được dữ liệu cài đặt. Hãy kiểm tra quyền file trong thư mục eduquest-install.');
    }
    $curriculum = require $curriculumPath;
    if (!is_array($curriculum) || count($curriculum) < 1) {
        throw new RuntimeException('Dữ liệu môn học không hợp lệ. Hãy tải lại gói cài đặt.');
    }

    $pdo = new PDO(
        'mysql:host=' . $values['database_host'] . ';dbname=' . $values['database_name'] . ';charset=utf8mb4',
        $values['database_user'],
        $databasePassword,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ],
    );
    $pdo->exec("SET time_zone = '+00:00'");
    foreach (schemaStatements($schema) as $statement) {
        $pdo->exec($statement);
    }

    $adminQuery = $pdo->prepare('SELECT id, role, password_hash FROM app_users WHERE username = ?');
    $adminQuery->execute([$values['admin_username']]);
    $existingAdmin = $adminQuery->fetch();
    if ($existingAdmin) {
        if ($existingAdmin['role'] !== 'admin' || !password_verify($adminPassword, (string)$existingAdmin['password_hash'])) {
            throw new RuntimeException('Tên admin này đã tồn tại trong database nhưng mật khẩu không khớp. Hãy dùng database trống hoặc chọn tài khoản admin đã tạo trước đó.');
        }
    } else {
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
        $insertAdmin->execute([
            $adminId,
            $values['admin_username'],
            password_hash($adminPassword, PASSWORD_DEFAULT),
            date('Y-m-d'),
        ]);
    }

    $seedCurriculum = $pdo->prepare(
        'INSERT INTO app_curriculum (id, content) VALUES (1, ?)
         ON DUPLICATE KEY UPDATE id = VALUES(id)',
    );
    $seedCurriculum->execute([json_encode($curriculum, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR)]);

    writePrivateConfig($configPath, [
        'database_host' => $values['database_host'],
        'database_name' => $values['database_name'],
        'database_user' => $values['database_user'],
        'database_password' => $databasePassword,
        'timezone' => 'Asia/Ho_Chi_Minh',
        'secure_cookies' => $values['secure_cookies'] === '1',
        'registration_enabled' => $values['registration_enabled'] === '1',
    ]);

    $installerRemoved = @unlink(__FILE__);
    $schemaRemoved = @unlink($schemaPath);
    $curriculumRemoved = @unlink($curriculumPath);
    $dataDirectoryRemoved = @rmdir($dataDirectory);
    @unlink($lockPath);
    $cleanupMessage = $installerRemoved && $schemaRemoved && $curriculumRemoved && $dataDirectoryRemoved
        ? '<p>Tệp cài đặt và dữ liệu tạm đã được xóa.</p>'
        : '<div class="notice">Nếu hosting chưa tự xóa, hãy xóa <code>install.php</code> và thư mục <code>eduquest-install</code> khỏi <code>public_html</code>.</div>';
    renderPage(
        'Cài đặt thành công',
        '<h1>EduQuest đã sẵn sàng!</h1><div class="notice success">Database đã kết nối, nội dung học đã được nạp và tài khoản quản trị đã tạo.</div><p>Đăng nhập tại trang chủ bằng tên admin bạn vừa chọn. Tệp cấu hình bí mật nằm ngoài <code>public_html</code>.</p>' . $cleanupMessage . '<p><a href="/">Mở trang chủ EduQuest</a></p>',
    );
} catch (Throwable $error) {
    @unlink($lockPath);
    $requestId = bin2hex(random_bytes(6));
    error_log('[EduQuest installer ' . $requestId . '] ' . $error->getMessage());
    $message = $error instanceof PDOException
        ? 'Không kết nối hoặc khởi tạo được MySQL. Kiểm tra tên database, user, mật khẩu và quyền All Privileges trong cPanel.'
        : $error->getMessage();
    formPage($csrf, $message . ' Mã tham chiếu: ' . $requestId, $values);
}
