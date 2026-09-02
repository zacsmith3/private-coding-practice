const scores: number[] = [
    1250,
    850,
    2100,
    450,
    1750,
    3000
];

function countScores(scores: number[]): number {
    let count: number = 0;
    scores.forEach((score) => {count++;});
    return count;
}

function totalScores(scores: number[]): number {
    let total: number = 0;
    scores.forEach((score) => {total += score;});
    return total;
}

function averageScores(scores: number[]): number {
    let total: number = totalScores(scores);
    let count: number = countScores(scores);
    return total / count;
}

function highScores(scores: number[], threshold: number): number {
    let count: number = 0;
    scores.forEach((score) => {
        if (score >= threshold) {
            count++;
        }
    });
    return count;
}

console.log("Number of Scores: " + countScores(scores));
console.log("Average Scores: " + averageScores(scores));

const threshold: number = 1500;
console.log("High Scores (>= " + threshold + "): " + highScores(scores, threshold));