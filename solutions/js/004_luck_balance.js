// https://www.hackerrank.com/challenges/luck-balance/problem
function luckBalance(k, contests) {
    let luck = 0;
    let f_imp = [];
    let imp = [];
    let un = [];
    contests.forEach(function (el) {
        if (el[1] === 1) {
            imp.push(el[0])
        } else {
            un.push(el[0])
        }
    });
    imp.sort((a, b) => {
        return b - a;
    });
    f_imp = imp.splice(0, k);
    console.log("important tests to fail: " + f_imp);
    console.log("important tests not to fail: " + imp);
    console.log("unimportant tests: " + un);
    imp.forEach(item => {
        luck = luck - item;
    });
    un.forEach(item => {
        luck = luck + item;
    });
    f_imp.forEach(item => {
        luck = luck + item;
    });
    return luck;
    // console.log(imp);
}

