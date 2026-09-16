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


function findTopStudent(data) {
    const sc = data.map(student => student.score);
    const maxscore = Math.max( ...sc)
    const topstudent = data.find (student => student.score === maxscore)
    return topstudent.name
}

function filterFailed(data, passScore) {
    return data

        .filter (people => people.score >= passScore)
        .map(people => people.name);
}


function addLetterGrade(data) {

    for (let i = 0; i < data.length; i++) {
        if (grades[i].score >= 90) {
            grades[i].letterGrade = 'A'
        }

        if (grades[i].score >= 75 && grades[i].score <= 89 ) {
            grades[i].letterGrade = 'B'
        }

        if(grades[i].score <= 75) {
            grades[i].letterGrade = 'C'
        }
    }
    return data
}

console.log(calculateAverage(grades))
console.log(findTopStudent(grades))
console.log(filterFailed(grades, 60))
console.table(addLetterGrade(grades));