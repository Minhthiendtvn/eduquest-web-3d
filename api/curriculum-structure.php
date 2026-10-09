<?php
declare(strict_types=1);
function curriculumSubjectName(string $sourceId, array $topic, int $grade, string $fallback): string
{
    static $data = null;
    $data ??= json_decode(file_get_contents(__DIR__ . '/curriculum-structure.json'), true, 512, JSON_THROW_ON_ERROR);
    $id = $sourceId;
    if ($grade >= 10 && $sourceId === 'science') {
        $id = 'interdisciplinary';
        $key = preg_replace('/^(?:library-science|grade)-(?:10|11|12)-/', '', $topic['id'] ?? '');
        foreach ($data['fields'] as $field => $keys) if (in_array($key, $keys, true)) $id = $field;
    } elseif ($grade < 10 && in_array($sourceId, ['history', 'geography'], true)) $id = 'history-geography';
    elseif ($grade < 10 && in_array($sourceId, ['music', 'visual-arts'], true)) $id = 'arts';
    elseif ($grade < 10 && $sourceId === 'national-defense') $id = 'safety-reference';
    elseif ($grade >= 10 && $sourceId === 'civics') $id = 'economic-law';
    return $data['metadata'][$id][0] ?? $fallback;
}
