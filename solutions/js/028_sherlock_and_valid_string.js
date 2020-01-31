// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

function isValid(s) {
    const commaSeparated = /\w/g
    const result = s.match(commaSeparated)


    var count = {}
    result.forEach(function (i) { count[i] = (count[i] || 0) + 1 });
    var values = Object.values(count)
    var uniqueValues = values.filter(function (obj) { return values.indexOf(obj) })
    const allEqual = values.every((val, i, arr) => val === arr[0])

    if (allEqual === true || uniqueValues.length === 1) {
        return "YES"
    } else {
        return "NO"
    }
}
// 1st attempt
// Complete the isValid function below.
// function isValid(s) {
//     s = s.split('');
//     var counts = {};

//     for (var i = 0; i < s.length; i++) {
//         var num = s[i];
//         counts[num] = counts[num] ? counts[num] + 1 : 1;
//     }
//     // let freqs = values(counts);
//     let counts_of_counts = {};
//     for (var j in counts) {
//         var n = counts[j];
//         counts_of_counts[n] = counts_of_counts[n] ? counts_of_counts[n] + 1 : 1;
//     }
//     let len = Object.keys(counts_of_counts).length;
//     console.log(counts);
//     console.log(counts_of_counts);
//     console.log(counts_of_counts[1]);
//     console.log(len);
//     // console.log(counts_of_counts.size())
//     if (len > 2) {
//         return "NO";
//     } else if ( len === 2 && Object.values(counts_of_counts)[1] === 1) {

//      return "YES";    
//     } else if (counts_of_counts.length === 1) {return "YES"} else {return "NO";};
// }