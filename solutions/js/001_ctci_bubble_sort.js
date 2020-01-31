// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

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
