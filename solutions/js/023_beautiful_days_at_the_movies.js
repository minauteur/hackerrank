// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
function beautifulDays(i, j, k) {
    let beautiful_days = [];
    for (i; i <= j; i++) {
        let s_r = parseInt(i.toString().split('').reverse().join(''));
        if ((i - s_r) % k === 0) {
            beautiful_days.length++
        };
    }
    return beautiful_days.length;


}