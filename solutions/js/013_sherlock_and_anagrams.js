// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
function sherlockAndAnagrams(s) {
    var found = 0;
    
    function compareChars(a,b) {
        if (a.charCodeAt(0) > b.charCodeAt(0)) {
            return 1;
        } else if (a.charCodeAt(0) < b.charCodeAt(0)) {
            return -1;
        }
        
        return 0;
    }
    
    var string = s;
    
    for (var j=1;j<string.length;j++) {
        var pairs = {};
        for (var i=0;i<=string.length-j;i++) {
            var next = string.substr(i,j);
            var sorted = next.split("").sort(compareChars).join("");
            
            if (pairs[sorted]) {
                pairs[sorted] = pairs[sorted]+1;
            } else {
                pairs[sorted] = 1;
            }
        }
        
        var keys = Object.keys(pairs);
        
        for (var l=0;l<keys.length;l++) {
            var key = keys[l];
            var value = pairs[key];
            
            while (value>0) {
                value--;
                found+=value;
            }
        }
    }

    return found;
}