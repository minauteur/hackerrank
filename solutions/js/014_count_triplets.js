// https://www.hackerrank.com/challenges/count-triplets-1/problem
function countTriplets(arr, r) {
    const numIncomingAtIndex = [];
    const numOutgoingAtIndex = [];

    let freqTable = {};
    for (let i = 0; i < arr.length; ++i) {
        const value = arr[i];
        const isDividible = (value % r) === 0;
        if (isDividible) {
            const prevValue = value / r;
            numIncomingAtIndex[i] = freqTable[prevValue] || 0;
        }
        else
            numIncomingAtIndex[i] = 0;

        freqTable[value] = (freqTable[value] || 0) + 1;
    }

    freqTable = {};
    for (let i = arr.length - 1; i >= 0; --i) {
        const value = arr[i];
        const next = value * r;
        numOutgoingAtIndex[i] = freqTable[next] || 0;
        freqTable[value] = (freqTable[value] || 0) + 1;
    }

    let total = 0;
    for (let i = 0; i < arr.length; ++i) {
        total += numIncomingAtIndex[i] * numOutgoingAtIndex[i];
    }
    return total;
}
