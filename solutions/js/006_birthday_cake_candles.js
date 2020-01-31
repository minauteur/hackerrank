// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
function birthdayCakeCandles(ar) {
    let max = Math.max(...ar);
    return ar.filter((item) => {
        return item == max;
    }).length;
}

