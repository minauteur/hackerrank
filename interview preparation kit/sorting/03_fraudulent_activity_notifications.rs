use std::io::{self, Read};
use std::collections::HashSet;
use std::iter;

fn main () {
    let mut input = String::new();
    let mut ans = String::new();
    
    io::stdin().read_to_string(&mut input);
    
    let mut lines: Vec<&str> = input.split("\n").collect();
    let mut ln_iter = &mut lines.into_iter();
    let params: Vec<&str> = ln_iter.next().unwrap().split_whitespace().collect();
    let tx_num: usize = params[0].parse::<usize>().unwrap();
    let lk_bk: usize = params[1].parse::<usize>().unwrap();
    let mut tx_list: Vec<u32> = ln_iter.next().unwrap().split_whitespace().map(|x|x.parse::<u32>().unwrap()).collect(); 
    // eprintln!(
    //     "number of transactions: {}\ndays to look back: {}",
    //     tx_num, lk_bk
    // );
    // eprintln!("transaction list \n{:?}", tx_list);
    let mut notifications = 0;
    for i in 0..tx_list.len()-lk_bk-1 {
        let mut window: Vec<u32> = Vec::new();
        for j in i..i+lk_bk {
            let item = tx_list[j];
            window.push(item);
        }
        let trigger = (2.0 * median(window.as_slice()));
        let cur_exp: &u32 = &tx_list[i+lk_bk+1];
        // eprintln!("current window: {:?}", window);
        // eprintln!("median expense for this window: {:?}", med);
        // eprintln!("current day's expenses: {:?}", cur_exp);
        for item in window {
            if item as f32 >= trigger {
                notifications = notifications+1;
                break;
            } else {
                continue;
            }
        }    
    }
    print!("{}", &notifications);
}

fn median(v: &[u32])->f32 {
    let count = v.len();
    if count % 2 == 1 {
        v[count / 2] as f32
    } else {
        (v[count / 2] as f32 + v[count / 2 - 1] as f32) / 2.0
    }
}