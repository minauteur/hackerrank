// https://www.hackerrank.com/challenges/electronics-shop/problem
func getMoneySpent(keyboards []int32, drives []int32, b int32) int32 {
  var result int32 = -1
  for _, kbv := range keyboards {
    for _, dv := range drives {
      if dv+kbv <= b && dv+kbv > result {
        result = dv+kbv
      }
        continue
    }
  }
  return result
}
