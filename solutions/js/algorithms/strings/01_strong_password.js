'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// Complete the minimumNumber function below.
function minimumNumber(n, pass) {
    // the required groups of characters can be represented by
    // the following regex capture groups
    const c = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+"]/]
        // then we map, using r to represent each test run in succession, 
        // collecting tests that return true in an array
        .map(r => !r.test(pass))
        .filter(Boolean).length
    // we then take the larger value between either the length of c
    // or else the difference between the required length of 6
    // and the given password since we can assume any characters
    // added will satisfy remaining criteria as densely as possible.
    return Math.max(c, 6 - n);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
