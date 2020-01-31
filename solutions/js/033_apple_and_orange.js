// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple_len = {
        min: s - a,
        max: t - a
    };
    let or_len = {
        min: t - b,
        max: s - b
    };
    //console.log("apple_len = { max: "+ apple_len.max +", min: " + apple_len.min + "}");
    //console.log("or_len = { max: "+ or_len.max + ", min: "+ or_len.min + "}");
    let appleHits = apples.filter(i => {
        return apple_len.max >= i && i >= apple_len.min
    });
    let orangeHits = oranges.filter(i => {
        return or_len.max <= i && i <= or_len.min
    });
    console.log(appleHits.length + "\n" + orangeHits.length);
}