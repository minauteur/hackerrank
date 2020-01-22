//https://www.hackerrank.com/challenges/triple-sum/problem
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

// Complete the triplets function below.
var addKeys = function (tmp, a, code) {
    for (let i = a.length - 1; i >= 0; i -= 1) {
        tmp[(a[i] * 10) + code] = code;
    }
};

// Complete the triplets function below.
function triplets(a, b, c) {
    let tmp = {},
        total = 0,
        aTimes = 0,
        bTimes = 0,
        times = { 1: 0, 2: 0 };
    addKeys(tmp, a, 1);
    addKeys(tmp, c, 2);
    addKeys(tmp, b, 3);
    for (let key in tmp) {
        if (tmp.hasOwnProperty(key)) {
            let value = tmp[key];
            if (typeof times[value] === 'undefined') {
                total += times[1] * times[2];
            } else {
                times[value] += 1;
            }
        }
    }
    return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const lenaLenbLenc = readLine().split(' ');

    const lena = parseInt(lenaLenbLenc[0], 10);

    const lenb = parseInt(lenaLenbLenc[1], 10);

    const lenc = parseInt(lenaLenbLenc[2], 10);

    const arra = readLine().split(' ').map(arraTemp => parseInt(arraTemp, 10));

    const arrb = readLine().split(' ').map(arrbTemp => parseInt(arrbTemp, 10));

    const arrc = readLine().split(' ').map(arrcTemp => parseInt(arrcTemp, 10));

    const ans = triplets(arra, arrb, arrc);

    ws.write(ans + '\n');

    ws.end();
}
