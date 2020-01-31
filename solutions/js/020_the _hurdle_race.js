// https://www.hackerrank.com/challenges/the-hurdle-race/problem
function hurdleRace(k, height) {
    let high = Math.max(...height);
    return (high - k > 0 ? high - k : 0);
}

