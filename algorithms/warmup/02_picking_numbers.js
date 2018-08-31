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
// 1st attempt
// Complete the pickingNumbers function below.
// function pickingNumbers(a) {
//     a.sort();
//     let max_len = 0;
//     for (let i=0; i<a.length;i++) {
//         let plus_temp = a.filter(
//             number => (number - i) == 1 || (number-i) == 0
//         );
//         let min_temp = a.filter(
//             number => (number - i) == -1 || (number-i) == 0
//         );
//         let new_temp = Math.max(min_temp.length, plus_temp.length);
//         if ( max_len < new_temp ? max_len = new_temp: max_len = max_len);
//         if (max_len >= 5) {
//             console.log(5);
//             return 5;
//         } else {
//             continue
//         }

//     }
//     console.log(max_len);
//     return max_len;
// }

function pickingNumbers(a) {
    let countArr = new Array(101).fill(0)
    a.forEach(num => countArr[num]++)
    let result = 0
    for (let i = 0; i < countArr.length - 1; i++) {
        result = Math.max(result, countArr[i] + countArr[i + 1])
    }
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a);

    ws.write(result + "\n");

    ws.end();
}
