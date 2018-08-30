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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    var found = 0;
    
    function compareChars(a,b) {
        if (a.charCodeAt(0) > b.charCodeAt(0)) {
            return 1;
        } else if (a.charCodeAt(0) < b.charCodeAt(0)) {
            return -1;
        }
        
        return 0;
    }
    
    var string = s;
    
    for (var j=1;j<string.length;j++) {
        var pairs = {};
        for (var i=0;i<=string.length-j;i++) {
            var next = string.substr(i,j);
            var sorted = next.split("").sort(compareChars).join("");
            
            if (pairs[sorted]) {
                pairs[sorted] = pairs[sorted]+1;
            } else {
                pairs[sorted] = 1;
            }
        }
        
        var keys = Object.keys(pairs);
        
        for (var l=0;l<keys.length;l++) {
            var key = keys[l];
            var value = pairs[key];
            
            while (value>0) {
                value--;
                found+=value;
            }
        }
    }

    return found;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
