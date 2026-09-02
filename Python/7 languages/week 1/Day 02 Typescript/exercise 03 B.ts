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

const scoreCount = scores.length;
const totalScore = scores.reduce(
    (total, score) => total + score,
    0
);

const averageScore = totalScore / scoreCount;

console.log("Number of Scores: " + scoreCount);
console.log("Average Scores: " + averageScore);
console.log("High Scores (>= 1500): " + highScoreCount);