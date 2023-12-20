// https://www.hackerrank.com/challenges/day-of-the-programmer/problem
func dayOfProgrammer(year int32) string {
    // Gregorian
    if year > 1917 {
        switch {
            // handle special case
            case year == 1918:
                return "26.09.1918"
            case year % 400 == 0, year % 4 == 0 && year % 100 != 0:
                return fmt.Sprintf("12.09.%d", year)
            default:
                return fmt.Sprintf("13.09.%d", year)
        }
    }
    // Julian
    if year % 4 == 0 {
            return fmt.Sprintf("12.09.%d", year)
    }
    return fmt.Sprintf("13.09.%d", year)
}
