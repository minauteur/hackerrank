// https://www.hackerrank.com/challenges/pairs/problem
function pairs(k, arr) {
    let pairs = 0;
    const m = new Map();
    for (let i = 0; i < arr.length; i++) {
        m.has(arr[i] - k) && pairs++;
        m.has(arr[i] + k) && pairs++;
        m.set(arr[i], true);
    }
    return pairs;
}