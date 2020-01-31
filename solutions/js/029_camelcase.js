// https://www.hackerrank.com/challenges/camelcase/problem
function camelcase(s) {
    s = s.split('');
    let result = [];
    let first = 0;
    let last = 0;
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (letter === letter.toUpperCase() && first === 0) {
            first = i;
            let z = s.slice(0, i);
            // console.log("first = "+ z.join(''));
            result.push(z.join(''));
        } else if (letter === letter.toUpperCase() && first !== 0) {
            last = i;
            let z = s.slice(first, last);
            // console.log("not first = " + z.join(''));
            result.push(z);
            first = last;
        } else {
            last = i;
        }
        if (last === s.length - 1) {
            let z = s.slice(first, last + 1);
            // console.log("last = "+ z.join(''));
            result.push(z.join(''));
        }
    }
    return result.length;

}
