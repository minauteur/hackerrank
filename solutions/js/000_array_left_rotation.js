// https://www.hackerrank.com/challenges/array-left-rotation/problem

function rotateLeft(len, deg, ar) {
    let shifted = [];
    for (let i = 0; i < deg; i++) {
        shifted.push(ar.shift());
    }
    // shifted.forEach(item=>{ar.push(item)});
    ar = [...ar, ...shifted];
    console.log(ar.join(' '));
}

