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

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    let min = Number.MAX_VALUE;
    let a = arr.sort(function(a,b){return b-a;});
    for (let i=0; i<arr.length-1;i++) {
        let i1 = a[i];
        let i2 = a[i+1];     
            if (i1 === i2) {return 0}
            let abs = Math.abs(i1-i2);
            if ( abs < min ) {
                min = abs;
            } else {
                continue;
            }
    }
    return min;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
