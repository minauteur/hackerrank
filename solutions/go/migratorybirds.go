// https://www.hackerrank.com/challenges/migratory-birds/problem
func migratoryBirds(arr []int32) int32 {
    set := make(map[int32]int,0)
    for _, id := range arr {
        if _, ok := set[id]; ok {
            set[id]++
        } else {
            set[id] = 1
        }
    }
    var mostCommonlySighted int32
    var count int
    for key, value := range set {
        switch {
            case value > count:
              mostCommonlySighted = key
              count = value
            case value == count && mostCommonlySighted != 0 && key < mostCommonlySighted:
              mostCommonlySighted = key
              count = value
            default:
        }
    }
    return mostCommonlySighted
}
