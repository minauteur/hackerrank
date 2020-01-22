'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

let cache = new Set();
function stairs(n) {
  if (cache[n]) return cache[n];
  if (n === 0) return 1;
  if (n < 0) return 0;
  cache[n] = stairs(n-1) + stairs(n-2) + stairs(n-3);
  return cache[n];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = parseInt(readLine(), 10);

    for (let sItr = 0; sItr < s; sItr++) {
        const n = parseInt(readLine(), 10);

        const res = stairs(n);

        ws.write(res + '\n');
    }

    ws.end();
}
