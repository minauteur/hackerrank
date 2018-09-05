'use strict';

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

function rotateLeft(len, deg, ar) {
    let shifted = [];
    for (let i = 0; i < deg; i++) {
        shifted.push(ar.shift());
    }
    // shifted.forEach(item=>{ar.push(item)});
    ar = [...ar, ...shifted];
    console.log(ar.join(' '));
}

function main() {
    const nd = readLine().split(' ');
    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    rotateLeft(n, d, a);

}
