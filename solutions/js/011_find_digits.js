// https://www.hackerrank.com/challenges/find-digits/problem
function findDigits(n) {
    let n_s = JSON.stringify(n).split('');
    n_s.forEach(e => parseInt(e));
    let count = 0;
    for (let i = 0; i < n_s.length; i++) {
        let digit = n_s[i];
        if ((n % digit) === 0 ? count++ : count = count);
    }
    return count;
}

