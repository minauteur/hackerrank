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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let new_time = "";
    s = s.split('');
    let hour = [s[0], s[1]].join('');
    let minute = [s[3], s[4]].join('');
    let sec = [s[6], s[7]].join('');
    let am_pm = [s[8], s[9]].join('');
    switch (am_pm) {
        case "AM":
            {
                if (hour === "12") {
                    hour = "00"
                }
                new_time = hour + ":" + minute + ":" + sec;
                console.log(new_time);
                return new_time;
            }
        case "PM":
            {
                if (hour === "12") {
                    new_time = hour + ":" + minute + ":" + sec;
                } else {
                    hour = parseInt(hour) + 12;
                    new_time = hour + ":" + minute + ":" + sec;
                }
                console.log(new_time);
                return new_time;

            }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
