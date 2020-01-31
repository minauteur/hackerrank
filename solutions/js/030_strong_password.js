// https://www.hackerrank.com/challenges/strong-password/problem
function minimumNumber(n, pass) {
    // the required groups of characters can be represented by
    // the following regex capture groups
    const c = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+"]/]
        // then we map each group to r, running each test in succession, 
        // before finally filtering for "truthy" values
        // and collecting them in an array
        .map(r => !r.test(pass))
        .filter(Boolean).length
    // we then take the larger value between either the length of c
    // or the difference between the required length of 6
    // and the given password. Because we are only asked for the 
    // "minimum" characters to add, we can assume any characters
    // added will satisfy remaining criteria as densely as possible.
    return Math.max(c, 6 - n);
}
