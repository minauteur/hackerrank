//https://www.hackerrank.com/challenges/ctci-making-anagrams

function makeAnagram(a, b) {
    // split each string into a vector of characters 
    // string "abc", for example, becomes ["a","b","c"]
    a = a.split("");
    b = b.split("");
    // get the lengths of each collection,
    let aLen = a.length;
    let bLen = b.length;
    // add them together to get the total number of characters in both strings,
    let total = aLen + bLen;
    // initialize a value to hold any matching pairs we encounter...
    let matches = 0;
    // and then iterate over the characters in each collection
    for (let i = 0; i < aLen; i++) {
        for (let j = 0; j < bLen; j++) {
            // if we find two indices containing the same character,
            if (a[i] == b[j]) {
                //we remove the character from one of the collections to prevent it from being counted again
                b.splice(j, 1);
                // then, we increment our matches value indicating a pair has been found
                matches++;
                // finally, we break the loop to re-init j at 0 by returning control to the outer for loop.
                break;
            }
        }
    }
    //we then return the total number of letters in both strings minus the number of matches x 2 for our our total
    return (total - (matches * 2));
}