//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
function jumpingOnClouds(c) {
    let j = 0;
    while (c.length > 0) {
        let cur_cloud = c[0];
        console.log("current cloud = " + c[0]);
        c.length > 1 ?
            canJump(c[2]) ?
                c.splice(0, 2) : c.splice(0, 1)
            : c.splice(0, 1);
        j++;
    }
    return j - 1
}