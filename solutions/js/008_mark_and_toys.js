// https://www.hackerrank.com/challenges/mark-and-toys/problem
function maximumToys(prices, k) {
    let bought = 0;
    prices.sort(function (a, b) { return a - b });
    console.log("budget = " + k);
    for (let budget = k; budget > 0;) {
        budget = budget - prices.shift();
        bought++

    }
    return bought - 1;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    let result = maximumToys(prices, k);

    ws.write(result + "\n");

    ws.end();
}
