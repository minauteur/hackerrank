'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function freqQuery(queries) {
  let qType, xyz, old_freq, new_freq,
      count = {},
      freq = {},
      qResults=[];

  for (let i=0; i < queries.length; i++) {
    qType = queries[i][0];
    xyz = queries[i][1];
    if (qType < 3) { recount(xyz,qType) }
    else {
      qResults.push((freq[xyz]) ? 1 : 0)
    }
  }

  function recount(xyz,qType) {
    if (!count[xyz] && qType == 1) { count[xyz] = 0 }
    if (!count[xyz] && qType == 2) { return }
    old_freq = count[xyz];
    switch (qType) {
      case 1:
        count[xyz]++
        break;
      case 2:
        count[xyz]--
    }
    new_freq = count[xyz];
    // decrement freq[old_freq]
    if (freq[old_freq]) { freq[old_freq]-- }
    // increment freq[new_freq]
    if (new_freq > 0) {
      if (freq[new_freq]) { freq[new_freq]++ }
      else { freq[new_freq] = 1 }
    }
    return
  }

  return qResults
}
// Complete the freqQuery function below.
// FIRST SOLUTION TIMED OUT DUE TO TRACKING QUERIES DIRECTLY. A BETTER APPROACH WOULD BE TO USE A DICT/COUNTER TYPE APPROACH AND FILTER THE FINAL OUTPUT.
// function freqQuery(queries) {
//     let out = [];
//     let arr = [];
//     // console.log("processing "+ queries.length +" queries");
//     for (let i=0;i<queries.length;i++) {
//         let op = queries[i][0];
//         let arg = queries[i][1];
//         if (op === 1) {
//             // console.log("Read 1, pushing "+ arg +" to array!");
//             arr.push(arg);
//             // console.log("arr = "+ arr);
//         } else if  (op === 2) {
//             // console.log("Read 2! Arg = "+ arg);
//             // console.log("Checking arr for presence of "+ arg);
//             if (arr.includes(arg)) {
//                 // console.log("Found an instance of "+ arg);
//                 // console.log("Getting index...");
//                 let idx = arr.findIndex(function(element) {
//                     return element === arg;
//                 });
//                 // console.log("arr pre-splice: "+ arr);
//                 arr.splice(idx, 1);
//                 // console.log("arr post-splice of element at idx "+ idx +" = "+ arr);
//             } else {
//                 // console.log("No instances of "+ arg +"found!");
//                 continue;
//             }
//         } else if (op === 3) {
//             // let count = 0;
//             // console.log("Read 3! Arg = " + arg);
//             // console.log("Searching arr for any element appearing exactly "+ arg +" times");
//             let to_out = 0;
//             for (let j=0;j<arr.length;j++) {
//                 let matches = arr.filter(function(element) {
//                    return element === arr[j];
//                 });
//                 // console.log("matches = "+ matches);
//                 if (matches.length === arg) {
//                     // console.log("matches.length === arg! ("+arg+" === "+matches.length+")")
// //                     count++
// //                     if (count === arg) {
// //                         out.push(1);
// //                     }
//                     to_out = 1;

//                     break;
//                 }
//             }
//             out.push(to_out);
//             continue;
//         }

//     }
//     // console.log(out);
//     return out;
// }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
