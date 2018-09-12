function arrayManipulation(n, queries) {
    let res = [];
    let sum = 0;
    let max = 0;

    for (let i = 0; i<n; i++) {
        res[i] = 0;
    }
    
    for(var j = 0; j < queries.length; j++){
        // var a_temp = readLine().split(' ');
        var a = parseInt(queries[j][0]);
        var b = parseInt(queries[j][1]);
        var k = parseInt(queries[j][2]);

        res[a-1] += k;
        if (b<n) res[b]-=k;
    }
  
    for (let i=0; i<n; i++) {
        sum += res[i];
        if (max < sum) max = sum;
    }
    return max;
}