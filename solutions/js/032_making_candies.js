//https://www.hackerrank.com/challenges/making-candies/problem
//machines, workers, cost (per worker or machine), and number of candies to produce
function minimumPasses(m, w, p, n) {
    let pass = 0,
        min = Math.ceil(n / (m * w)),
        points = 0;
    while (pass < min) {
        let dPass = Math.ceil((p - points) / (m * w));
        pass += dPass;
        points += m * w * dPass;
        if (Math.floor(points / p) >= Math.abs(m - w)) {
            points -= Math.abs(m - w) * p;
            m > w ? w = m : m = w;
            let upgrades = Math.floor(points / p);
            if (upgrades > 0) {
                if (upgrades % 2 === 0) {
                    m = w = m + (upgrades / 2);
                } else {
                    m = w = m + Math.floor(upgrades / 2);
                    m++;
                }
                points -= upgrades * p;
            }
        } else {
            let upgrades = Math.floor(points / p);
            m > w ? w += upgrades : m += upgrades;
            points -= upgrades * p;
        }
        let minPass = Math.ceil((n - points) / (m * w));
        if (min > minPass + pass) min = minPass + pass;
    }
    return min;
}