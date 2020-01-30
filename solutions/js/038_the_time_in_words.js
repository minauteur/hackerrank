//https://www.hackerrank.com/challenges/the-time-in-words/problem
function timeInWords(h, m) {
    return m == 0 ? getHours(h) + " o' clock"
    : m > 30 ? m === 45 ? "quarter to " + getHours(h+1)
    : m === 59 ? "one minute to" + getHours(h+1) 
    : getMinutes(60-m) + " minutes to " + getHours(h+1)
    : m < 30 ? m === 15 ? "quarter past " + getHours(h)
    : m === 1 ? "one minute past " + getHours(h) 
    : getMinutes(m) + " minutes past " + getHours(h) 
    : m === 30 ? "half past " + getHours(h): "";
}
function getHours(h) {
    return h === 1 ? "one"
    : h === 2 ? "two" 
    : h === 3 ? "three"
    : h === 4 ? "four"
    : h === 5 ? "five"
    : h === 6 ? "six"
    : h === 7 ? "seven"
    : h === 8 ? "eight"
    : h === 9 ? "nine"
    : h === 10 ? "ten"
    : h === 11 ? "eleven"
    : h === 12 ? "twelve"
    : "";
}
function getMinutes(m){
    return 1 <= m && m <= 12 ?  getHours(m) 
    : m === 13 ? "thirteen" 
    : m === 14 ? "fourteen" 
    : m === 16 ? "sixteen"
    : m === 17 ? "seventeen"
    : m === 18 ? "eighteen"
    : m === 19 ? "nineteen"
    : m === 20 ? "twenty"
    : m >= 21 ? "twenty "+getMinutes(m-20)
    : "";
}