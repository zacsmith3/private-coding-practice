const scores: number[] = [
    1250,
    850,
    2100,
    450,
    1750,
    3000
];

const highScoreCount = scores.filter(
    (score) => score >= 1500
).length;