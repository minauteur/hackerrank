// https://www.hackerrank.com/challenges/ctci-recursive-staircase/
let cache = new Set();
function stairs(n) {
  if (cache[n]) return cache[n];
  if (n === 0) return 1;
  if (n < 0) return 0;
  cache[n] = stairs(n-1) + stairs(n-2) + stairs(n-3);
  return cache[n];
}
