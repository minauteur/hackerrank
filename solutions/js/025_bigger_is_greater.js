// https://www.hackerrank.com/challenges/bigger-is-greater/problem

// for a more thorough explanation of what's going on here,
// see https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
// NOTE: 'PE:' in the comments below represents my effort to explain in plain english.
// Complete the biggerIsGreater function below.
function biggerIsGreater(w) {
    var words = w.split('')
    var i = 0;
    var x;
    var a;
    var b;
    var max_1 = -1;
    var max_2;
    var swap;
    var answer = "";

    // find the highest index i that s[i] < s[i+1]
    // PE: While our index remains less than the length of the word,
    // we iterate through each letter until we reach the latest letter
    // that is "less" than the next, lexicographically, in the string.

    while (i < words.length) {
        if (words[i] < words[i + 1] && i > max_1) {
            max_1 = i
        }
        i++;
    }
    // PE: if we didn't find any substrings of two meeting the 
    // criteria, we return "no answer", because we've checked for
    // the smallest possible lengths of substrings already (2), and no
    // satisfying pairs existed;
    if (max_1 == -1) {
        return "no answer"
    } else {

        //find the highest index j > i that s[j] > s[i];
        // PE: if a pair is found in the previous step, that represents our "lower bound"
        // so we set max_1 to equal that, and pass along an offset to continue 
        // iterating through the word, updating the offset and max_2 whenever we find
        // letters meeting our criteria
        x = max_1 + 1

        while (x < words.length) {
            if (words[x] > words[max_1]) {
                max_2 = x
            }
            x++;
        }
        
        //swap i & j
        swap = words[max_1]
        words[max_1] = words[max_2]
        words[max_2] = swap

        //reverse the order of all elements after index i;
        for (a = 0; a <= max_1; a++) {
            answer = answer.concat(words[a])
        }

        for (b = words.length - 1; b > max_1; b--) {
            answer = answer.concat(words[b])
        }
        return answer
    }
}
