// https://www.hackerrank.com/challenges/counting-valleys/problem
function countingValleys(n, s) {
    s = s.split('');
    let el = 0;
    let valleys = 0;
    for (let i = 0; i < n; i++) {
        let char = s[i];
        char === 'U' ? el++ : el--;
        el === 0 && char === 'U' ? valleys++ : 0;
    }
    return valleys;
}