// https://www.hackerrank.com/challenges/angry-professor/problem
function angryProfessor(k, a) {
    return (a.filter(i => i <= 0).length >= k ? "NO" : "YES");

}
