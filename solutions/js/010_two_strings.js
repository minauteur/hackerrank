// https://www.hackerrank.com/challenges/two-strings/problem
function twoStrings(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        let c = s1.charAt(i);
        if (s2.includes(c)) {
            return "YES";
        } else {
            continue;
        }
    }
    return "NO";
}
