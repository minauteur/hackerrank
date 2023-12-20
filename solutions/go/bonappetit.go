// https://www.hackerrank.com/challenges/bon-appetit/problem
func bonAppetit(bill []int32, k int32, b int32) {
    var total int32
    for _, cost := range bill {
        total += cost
    }
    actualCharge := (total-bill[k])/2
    if actualCharge == b {
        fmt.Println("Bon Appetit")
    } else {
        difference := b-actualCharge
        fmt.Printf("%d\n", difference)
    }
}
