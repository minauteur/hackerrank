// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem
function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

function fibonacci(n) {
    let fibs = [];
    fibs.push(0);
    fibs.push(1);
    for (let i = 2; i <= n; i++) {
        let last = fibs[fibs.length - 2];
        let cur = fibs[fibs.length - 1];
        let next = cur + last;
        fibs.push(next);
    }
    return fibs[fibs.length - 1];
}
