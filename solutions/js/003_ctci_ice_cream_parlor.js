// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem
function whatFlavors(cost, money) {

    let reverse_index = []
    cost.forEach((v, i) => reverse_index[v] = i)

    for (let i = 0, l = cost.length; i < l; i++) {
        let j = reverse_index[money - cost[i]]
        if (j) return [i + 1, j + 1]
    }
}