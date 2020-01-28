//https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    return [...new Array(Math.floor(gcd(b) / lcm(a)))]
        .map((_, i) => lcm(a) * (i + 1))
        .filter(a => gcd(b) % a === 0)
        .length;
}

function gcd2(a, b) {
    if (!b) return a;
    return gcd2(b, a % b);
}

function lcm2(a, b) {
    return a * b / gcd2(a, b);
}

function gcd(arr) {
    return arr.reduce(gcd2);
}

function lcm(arr) {
    return arr.reduce(lcm2);
}
