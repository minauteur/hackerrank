// https://www.hackerrank.com/challenges/minimum-swaps-2/problem
function minimumSwaps(arr) {
    let swaps = 0;
    let swap = function (arr, i, j) {
        let temp = [];
        console.log("arr[i]: " + JSON.stringify(arr[i]));
        console.log("arr[j]: " + JSON.stringify(arr[j]));
        temp.push(parseInt(arr[i]));
        temp.push(parseInt(arr[j]));
        arr[i] = temp.pop();
        console.log("new arr[i]: " + JSON.stringify(arr[i]));
        arr[j] = temp.pop();
        console.log("new arr[j]: " + JSON.stringify(arr[j]));

    }
    // let temp_arr = [];
    for (var i = 0; i < arr.length; i++) {
        while (arr[i] != (i + 1)) {
            // if (arr[i] != (i+1)) {
            swap(arr, i, arr[i] - 1);
            // i = i-1;
            swaps = swaps + 1;
            // }
        }
    }
    return swaps;
}