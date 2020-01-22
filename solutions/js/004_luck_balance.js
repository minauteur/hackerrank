'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Complete the luckBalance function below.
function luckBalance(k, contests) {
    let luck = 0;
    let f_imp = [];
    let imp = [];
    let un = [];
    contests.forEach(function (el) {
        if (el[1] === 1) {
            imp.push(el[0])
        } else {
            un.push(el[0])
        }
    });
    imp.sort((a, b) => {
        return b - a;
    });
    f_imp = imp.splice(0, k);
    console.log("important tests to fail: " + f_imp);
    console.log("important tests not to fail: " + imp);
    console.log("unimportant tests: " + un);
    imp.forEach(item => {
        luck = luck - item;
    });
    un.forEach(item => {
        luck = luck + item;
    });
    f_imp.forEach(item => {
        luck = luck + item;
    });
    return luck;
    // console.log(imp);


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    let contests = Array(n);

    for (let i = 0; i < n; i++) {
        contests[i] = readLine().split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
    }

    const result = luckBalance(k, contests);

    ws.write(result + '\n');

    ws.end();
}
