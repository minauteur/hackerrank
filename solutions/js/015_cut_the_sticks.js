// https://www.hackerrank.com/challenges/cut-the-sticks/problem
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

    arr = arr.filter(e => e > 0);
    arr.push(num_cuts);
    return arr;
}
