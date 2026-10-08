<?php
declare(strict_types=1);

const TUTOR_ENV_NAMES = [
    'ANTHROPIC_API_KEY', 'ANTHROPIC_MODEL', 'AI_TUTOR_MAX_TOKENS',
    'AI_TUTOR_TIMEOUT_MS', 'AI_TUTOR_DAILY_LIMIT',
    'ANTHROPIC_INPUT_USD_PER_MILLION', 'ANTHROPIC_OUTPUT_USD_PER_MILLION',
];

function parsePrivateTutorEnv(string $contents): array
{
    if (preg_match('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', $contents)) {
        throw new RuntimeException('Private AI Tutor environment file has invalid syntax.');
    }
    $values = [];
    foreach (preg_split('/\r\n|\n|\r/', preg_replace('/^\xEF\xBB\xBF/', '', $contents)) as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#')) continue;
        if (!preg_match('/^(?:export\s+)?([A-Z][A-Z0-9_]*)\s*=\s*(.*)$/D', $line, $match)) {
            throw new RuntimeException('Private AI Tutor environment file has invalid syntax.');
        }
        if (!in_array($match[1], TUTOR_ENV_NAMES, true)) continue;
        $value = trim($match[2]);
        if (str_starts_with($value, '"') || str_starts_with($value, "'")) {
            $quote = $value[0];
            $end = strpos($value, $quote, 1);
            if ($end === false || !preg_match('/^\s*(?:#.*)?$/D', substr($value, $end + 1))) {
                throw new RuntimeException('Private AI Tutor environment file has invalid syntax.');
            }
            $value = substr($value, 1, $end - 1);
        } else {
            $value = rtrim(preg_replace('/\s+#.*$/', '', $value));
        }
        // Literal values only: no interpolation, escapes, code execution, or multiline values.
        if (preg_match('/[\x00-\x1F\x7F]/', $value)) {
            throw new RuntimeException('Private AI Tutor environment file has invalid syntax.');
        }
        $values[$match[1]] = $value;
    }
    return $values;
}

function readPrivateTutorEnv(string $path, string $publicRoot): array
{
    if (!file_exists($path)) return [];
    $resolved = realpath($path);
    $root = realpath($publicRoot);
    if ($resolved === false || $root === false) {
        throw new RuntimeException('Private AI Tutor environment file is unavailable.');
    }
    $resolved = str_replace('\\', '/', $resolved);
    $root = rtrim(str_replace('\\', '/', $root), '/');
    if (PHP_OS_FAMILY === 'Windows') { $resolved = strtolower($resolved); $root = strtolower($root); }
    if ($resolved === $root || str_starts_with($resolved, $root . '/')
        || preg_match('~/(?:public_html|htdocs|httpdocs)(?:/|$)~i', $resolved) || !is_file($path)) {
        throw new RuntimeException('AI Tutor environment file must be outside the public web directory.');
    }
    $size = @filesize($path);
    if ($size === false || $size > 16384) throw new RuntimeException('Private AI Tutor environment file is unavailable.');
    $contents = @file_get_contents($path, false, null, 0, 16385);
    if ($contents === false || strlen($contents) > 16384) {
        throw new RuntimeException('Private AI Tutor environment file is unavailable.');
    }
    return parsePrivateTutorEnv($contents);
}

function tutorEnv(string $name): string|false
{
    global $config;
    if (!in_array($name, TUTOR_ENV_NAMES, true)) return false;
    $value = getenv($name);
    if ($value !== false && $value !== '') return $value;
    static $privateValues = null;
    // Same private directory as eduquest-config.php; never search inside the web root.
    $path = $config['tutor_env_file'] ?? dirname(__DIR__, 2) . '/.env';
    if (!is_string($path) || !preg_match('~^(?:/|[A-Za-z]:[\\\\/])~', $path)) {
        throw new RuntimeException('Private AI Tutor environment path must be absolute.');
    }
    $privateValues ??= readPrivateTutorEnv($path, dirname(__DIR__));
    return $privateValues[$name] ?? $value;
}
