const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 },
];

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

console.table(addLetterGrade(grades));
