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

// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
    let sol = [];
    do {
        arr = cut(arr);
        let num_cuts = arr.pop();
        sol.push(num_cuts);
    }
    while (arr.length > 0);
    return sol;
}

function cut(arr) {
    let cut_len = Math.min(...arr);
    let num_cuts = 0;
    for (let i = 0; i < arr.length; i++) {
        let s_to_cut = arr[i];
        if (s_to_cut - cut_len >= 0) {
            arr[i] = s_to_cut - cut_len;
            num_cuts++
        }
    }
    //     Since--for ths question at least--we never
    // want to return an empty array ("undefined" by value), 
    // we push the cut number before returning
    // so it can be retrieved outside of this context when we   
    // call .pop() in the parent function.
    //    This allows us to get the last number of cuts
    // before the while condition returns false. Otherwise, 
    // the condition would false too soon, ending the loop
    // before we had the chance to store the number
    // of cuts required in the final round.
    arr = arr.filter(e => e > 0);
    arr.push(num_cuts);
    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = cutTheSticks(arr);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
