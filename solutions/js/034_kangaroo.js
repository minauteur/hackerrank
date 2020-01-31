// https: //www.hackerrank.com/challenges/kangaroo/problem
function kangaroo(x1, v1, x2, v2) {
    return (v2 >= v1) ? "NO" : (x1 - x2) % (v2 - v1) === 0 ? "YES" : "NO";
}