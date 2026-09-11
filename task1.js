const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 },
];

function calculateAverage (data) {
    const total = data.reduce((geo, people) => geo + people.score, 0)

    return total / data.length;

}

console.log(calculateAverage(grades))