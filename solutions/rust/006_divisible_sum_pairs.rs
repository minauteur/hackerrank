// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=false

use std::env;
use std::fs::File;
use std::io::{self, BufRead, Write};
use std::convert::TryInto;

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

fn divisibleSumPairs(n: i32, k: i32, ar: &[i32]) -> i32 {

    let mut results = 0;

    for i in 0..n {
        for j in i+1..n {
            let ui: usize = i.try_into().unwrap();
            let uj: usize = j.try_into().unwrap();
            if (ar[ui] + ar[uj]) % k == 0 {
                results += 1
            }
        }
    }
    return results
}

fn main() {
    let stdin = io::stdin();
    let mut stdin_iterator = stdin.lock().lines();

    let mut fptr = File::create(env::var("OUTPUT_PATH").unwrap()).unwrap();

    let first_multiple_input: Vec<String> = stdin_iterator.next().unwrap().unwrap()
        .split(' ')
        .map(|s| s.to_string())
        .collect();

    let n = first_multiple_input[0].trim().parse::<i32>().unwrap();

    let k = first_multiple_input[1].trim().parse::<i32>().unwrap();

    let ar: Vec<i32> = stdin_iterator.next().unwrap().unwrap()
        .trim_end()
        .split(' ')
        .map(|s| s.to_string().parse::<i32>().unwrap())
        .collect();

    let result = divisibleSumPairs(n, k, &ar);

    writeln!(&mut fptr, "{}", result).ok();
}
