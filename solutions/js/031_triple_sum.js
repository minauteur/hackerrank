//https://www.hackerrank.com/challenges/triple-sum/problem

var addKeys = function (tmp, a, code) {
    for (let i = a.length - 1; i >= 0; i -= 1) {
        tmp[(a[i] * 10) + code] = code;
    }
};

function triplets(a, b, c) {
    let tmp = {},
        total = 0,
        aTimes = 0,
        bTimes = 0,
        times = { 1: 0, 2: 0 };
    addKeys(tmp, a, 1);
    addKeys(tmp, c, 2);
    addKeys(tmp, b, 3);
    for (let key in tmp) {
        if (tmp.hasOwnProperty(key)) {
            let value = tmp[key];
            if (typeof times[value] === 'undefined') {
                total += times[1] * times[2];
            } else {
                times[value] += 1;
            }
        }
    }
    return total;
}
