// https://www.hackerrank.com/challenges/alternating-characters/problem
function alternatingCharacters(s) {
    let len = s.length,
        lastCharacter,
        deletions = 0;
    for (let i = 0; i < len; i += 1) {
        if (lastCharacter && lastCharacter === s[i]) {
            deletions += 1;
        }
        lastCharacter = s[i];
    }
    return deletions;
}