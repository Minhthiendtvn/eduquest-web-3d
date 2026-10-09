<?php
declare(strict_types=1);
require_once __DIR__ . '/../api/curriculum-structure.php';
$cases = [
    ['science', 'grade-10-mechanics', 10, 'Vật lí'],
    ['science', 'grade-11-chemical-equilibrium', 11, 'Hóa học'],
    ['science', 'grade-12-ecology-systems', 12, 'Sinh học'],
    ['science', 'grade-6-matter', 6, 'Khoa học tự nhiên'],
    ['history', 'grade-6-history', 6, 'Lịch sử và Địa lí'],
    ['music', 'grade-9-music', 9, 'Nghệ thuật (Âm nhạc, Mĩ thuật)'],
    ['civics', 'grade-10-civics', 10, 'Giáo dục kinh tế và pháp luật'],
    ['science', 'custom', 10, 'Khoa học liên môn – tham khảo'],
];
foreach ($cases as [$source, $id, $grade, $expected]) {
    if (curriculumSubjectName($source, ['id' => $id], $grade, 'fallback') !== $expected) throw new RuntimeException('Curriculum classification mismatch');
}
echo "PHP curriculum structure tests passed.\n";
