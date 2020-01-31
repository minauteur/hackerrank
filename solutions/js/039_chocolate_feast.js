//https://www.hackerrank.com/challenges/chocolate-feast/problem
function chocolateFeast(n, c, m) {

    let availableWrappers = Math.floor(n / c);
    let eaten = availableWrappers;

    while ((availableWrappers / m) >= 1) {
        let wrappers = Math.floor(availableWrappers / m);
        eaten += wrappers;
        availableWrappers = wrappers + (availableWrappers % m);
    }

    return eaten;
}