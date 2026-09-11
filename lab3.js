const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 },
];

function findTopStudent(data) {
    const sc = data.map(student => student.score);
    const maxscore = Math.max( ...sc)
    const topstudent = data.find (student => student.score === maxscore)
    return topstudent.name
}
console.log(findTopStudent(grades))

