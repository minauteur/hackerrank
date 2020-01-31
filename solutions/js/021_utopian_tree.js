// https://www.hackerrank.com/challenges/utopian-tree/problem
function utopianTree(n) {
    if (n === 0) {
        return 1;
    }
    let period = 0;
    let h = 1;
    while (period <= n) {
        if (period != 0 && period % 2 === 0) {
            h = h + 1;
        } else if (period % 2 != 0) {
            h = h * 2;
        }
        period++
    }
    return h;
}