// https://www.hackerrank.com/challenges/abbr/problem
function abbreviation(a, b) {
    return LCS(a, b) ? "YES" : "NO";
    function LCS(a, b) {
        let dp = new Array(a.length + 1);
        for (let i = 0; i < dp.length; i++)dp[i] = new Array(b.length + 1);
        dp[0][0] = true;
        for (let j = 1; j <= b.length; j++)dp[0][j] = false;
        let upperCase = false;
        for (let i = 1; i <= a.length; i++){
            if (isUpperCase(a[i-1])) {
                dp[i][0] = false;
                upperCase = true;
            }
            else {
                if (!upperCase) dp[i][0] = true;
                else dp[i][0] = false;
            }
            
        }
        for (let i = 1; i <= a.length; i++){
            for (let j = 1; j <= b.length; j++){
                if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
                else if (isUpperCase(a[i - 1])) dp[i][j] = false;
                else if (a[i - 1].toUpperCase() == b[j - 1]) dp[i][j] = dp[i - 1][j - 1] || dp[i - 1][j];
                else dp[i][j] = dp[i - 1][j];
            }
        }
        return dp[a.length][b.length];
        
    }
    function isUpperCase(b) {
        return b.codePointAt(0) <= 90 && b.codePointAt(0) >= 65;
    }
}