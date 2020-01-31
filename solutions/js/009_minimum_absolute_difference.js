// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
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
