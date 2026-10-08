<?php
declare(strict_types=1);
require_once __DIR__ . '/../api/private-env.php';

function check(bool $condition): void
{
    if (!$condition) throw new RuntimeException('Private environment test failed.');
}
function rejected(callable $action): void
{
    try { $action(); } catch (RuntimeException $error) {
        check(!str_contains($error->getMessage(), 'test-only-value'));
        return;
    }
    throw new RuntimeException('Expected private environment rejection.');
}

$parsed = parsePrivateTutorEnv("\xEF\xBB\xBF# comment\r\nANTHROPIC_API_KEY=\"test-only-value\" # comment\r\nexport AI_TUTOR_DAILY_LIMIT='12'\nANTHROPIC_MODEL=example-model # comment\nDATABASE_URL=ignored\n");
check($parsed['ANTHROPIC_API_KEY'] === 'test-only-value');
check($parsed['AI_TUTOR_DAILY_LIMIT'] === '12');
check($parsed['ANTHROPIC_MODEL'] === 'example-model');
check(!isset($parsed['DATABASE_URL']));
check(parsePrivateTutorEnv('ANTHROPIC_MODEL=${LITERAL}')['ANTHROPIC_MODEL'] === '${LITERAL}');
rejected(fn() => parsePrivateTutorEnv('ANTHROPIC_API_KEY="test-only-value'));
rejected(fn() => parsePrivateTutorEnv("ANTHROPIC_API_KEY=test-only-value\0"));
rejected(fn() => parsePrivateTutorEnv('ANTHROPIC_API_KEY="test-only-value" extra'));

$temp = sys_get_temp_dir() . '/eduquest-env-test-' . bin2hex(random_bytes(8));
mkdir($temp);
mkdir($temp . '/public');
try {
    check(readPrivateTutorEnv($temp . '/missing.env', $temp . '/public') === []);
    file_put_contents($temp . '/private.env', 'ANTHROPIC_API_KEY=test-only-value');
    check(readPrivateTutorEnv($temp . '/private.env', $temp . '/public')['ANTHROPIC_API_KEY'] === 'test-only-value');
    file_put_contents($temp . '/public/.env', 'ANTHROPIC_API_KEY=test-only-value');
    rejected(fn() => readPrivateTutorEnv($temp . '/public/.env', $temp . '/public'));
    file_put_contents($temp . '/oversized.env', str_repeat('x', 16385));
    rejected(fn() => readPrivateTutorEnv($temp . '/oversized.env', $temp . '/public'));
    putenv('ANTHROPIC_API_KEY=environment-test-value');
    check(tutorEnv('ANTHROPIC_API_KEY') === 'environment-test-value');
    check(tutorEnv('DATABASE_URL') === false);
    putenv('ANTHROPIC_API_KEY');
    $code = 'require $argv[1]; $config = ["tutor_env_file" => $argv[2]]; '
        . 'putenv("ANTHROPIC_API_KEY"); '
        . 'if (tutorEnv("ANTHROPIC_API_KEY") !== "test-only-value") throw new RuntimeException("Fallback failed"); '
        . 'putenv("ANTHROPIC_API_KEY=worker-test-value"); '
        . 'if (tutorEnv("ANTHROPIC_API_KEY") !== "worker-test-value") throw new RuntimeException("Precedence failed");';
    $process = proc_open([PHP_BINARY, '-r', $code, __DIR__ . '/../api/private-env.php', $temp . '/private.env'],
        [0 => ['pipe', 'r'], 1 => ['pipe', 'w'], 2 => ['pipe', 'w']], $pipes);
    check(is_resource($process));
    fclose($pipes[0]);
    $stdout = stream_get_contents($pipes[1]);
    $stderr = stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);
    check(proc_close($process) === 0 && $stdout === '' && $stderr === '');
} finally {
    foreach (['private.env', 'oversized.env', 'public/.env'] as $file) {
        if (is_file($temp . '/' . $file)) unlink($temp . '/' . $file);
    }
    rmdir($temp . '/public');
    rmdir($temp);
}
echo "Private PHP environment tests passed.\n";
