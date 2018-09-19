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

// Complete the isValid function below.
// function isValid(s) {
//     s = s.split('');
//     var counts = {};

//     for (var i = 0; i < s.length; i++) {
//         var num = s[i];
//         counts[num] = counts[num] ? counts[num] + 1 : 1;
//     }
//     // let freqs = values(counts);
//     let counts_of_counts = {};
//     for (var j in counts) {
//         var n = counts[j];
//         counts_of_counts[n] = counts_of_counts[n] ? counts_of_counts[n] + 1 : 1;
//     }
//     let len = Object.keys(counts_of_counts).length;
//     console.log(counts);
//     console.log(counts_of_counts);
//     console.log(counts_of_counts[1]);
//     console.log(len);
//     // console.log(counts_of_counts.size())
//     if (len > 2) {
//         return "NO";
//     } else if ( len === 2 && Object.values(counts_of_counts)[1] === 1) {

//      return "YES";    
//     } else if (counts_of_counts.length === 1) {return "YES"} else {return "NO";};
// }
function isValid(s) {
    const commaSeparated = /\w/g
    const result = s.match(commaSeparated)


    var count = {}
    result.forEach(function (i) { count[i] = (count[i] || 0) + 1 });
    var values = Object.values(count)
    var uniqueValues = values.filter(function (obj) { return values.indexOf(obj) })
    const allEqual = values.every((val, i, arr) => val === arr[0])

    if (allEqual === true || uniqueValues.length === 1) {
        return "YES"
    } else {
        return "NO"
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
