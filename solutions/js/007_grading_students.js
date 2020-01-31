// https://www.hackerrank.com/challenges/grading/problem
function gradingStudents(grades) {
    let rnd_grades = [];
    for (let i = 0; i < grades.length; i++) {
        let g = grades[i];
        if (g < 38) {
            rnd_grades.push(g);
        } else {
            let g_mod = (5 - (g % 5));
            if ((g_mod < 3) ? rnd_grades.push((g_mod+g)):rnd_grades.push(g));
        }
    }
    return rnd_grades;
}
