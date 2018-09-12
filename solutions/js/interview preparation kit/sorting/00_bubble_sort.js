'use strict';

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
// function swap(a,j,i) {
//     let tmp = a[j] 
//     a[j] = a[i];
//     a[i] = tmp;
//     return a;
// }

function sortCopy(arr) {
    return arr.slice(0).sort();
}

function countSwaps(a) {
    let n = a.length;
    let count = 0;
    for (let i = 0; i <= a.length * a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
                count++;
                break;
            } else {
                continue;
            }
        }
    }
    console.log("Array is sorted in " + count + " swaps.");
    console.log("First Element: " + a[0] + "\nLast Element: " + a[a.length - 1]);
}
// Complete the countSwaps function below.


function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
