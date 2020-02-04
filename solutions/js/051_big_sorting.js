// https://www.hackerrank.com/challenges/big-sorting/problem
function bigSorting(unsorted) {
    return unsorted.sort((a, b) => {
        if (a.length === b.length) { return BigInt(a) - BigInt(b); }
        else { return a.length - b.length }
    });
}