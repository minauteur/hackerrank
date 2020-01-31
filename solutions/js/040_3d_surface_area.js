//https://www.hackerrank.com/challenges/3d-surface-area/problem
function surfaceArea(a) {
    let tVolume = 0;
    // loop through each row     
    for (var i = 0; i < a.length; i++) {
        // and each column
        for (var j = 0; j < a[0].length; j++) {
            // for each cell we traverse, we know that the surface area will at least be 2 because the top and bottom faces will necessarily be exposed
            tVolume += (a[i][j] * 4) + 2;
            // taking the total volume given the height in the cell we're currently examining, we then subtract the surface area hidden by adjacent sides of sufficient height
            // to track edge-cases :P (in which we know at least one side will remain exposed for interior edges--two maximum in the case corners) 
            if (j >= 1) tVolume -= Math.min(a[i][j - 1], a[i][j]) * 2;
            if (i >= 1) tVolume -= Math.min(a[i - 1][j], a[i][j]) * 2;
        }
    }
    return tVolume;
}