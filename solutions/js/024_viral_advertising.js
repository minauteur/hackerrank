// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
    let shared, cumulative;
    shared = 5;
    cumulative = 0;
    for (let i = 0; i < n; i++) {
        shared = Math.floor(shared / 2);
        cumulative = cumulative + shared;
        shared = shared * 3;
    }
    return cumulative;
}
