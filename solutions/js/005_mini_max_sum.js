// https://www.hackerrank.com/challenges/mini-max-sum/problem
function miniMaxSum(arr) {
    arr.sort();
    let min = arr[0]+arr[1]+arr[2]+arr[3];
    let max = arr[1]+arr[2]+arr[3]+arr[4];
    let ans = [min, max];
    ans.join(" ");
    return ans;
}
