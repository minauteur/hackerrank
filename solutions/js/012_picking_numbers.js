// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
    let countArr = new Array(101).fill(0)
    a.forEach(num => countArr[num]++)
    let result = 0
    for (let i = 0; i < countArr.length - 1; i++) {
        result = Math.max(result, countArr[i] + countArr[i + 1])
    }
    return result
}

// 1st attempt
// Complete the pickingNumbers function below.
// function pickingNumbers(a) {
//     a.sort();
//     let max_len = 0;
//     for (let i=0; i<a.length;i++) {
//         let plus_temp = a.filter(
//             number => (number - i) == 1 || (number-i) == 0
//         );
//         let min_temp = a.filter(
//             number => (number - i) == -1 || (number-i) == 0
//         );
//         let new_temp = Math.max(min_temp.length, plus_temp.length);
//         if ( max_len < new_temp ? max_len = new_temp: max_len = max_len);
//         if (max_len >= 5) {
//             console.log(5);
//             return 5;
//         } else {
//             continue
//         }

//     }
//     console.log(max_len);
//     return max_len;
// }