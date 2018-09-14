use std::io::{self, Read};
use std::collections::HashSet;
use std::iter;
impl<'a, T> WindowsMut<'a, T> {
    fn next(&mut self) -> Option<&mut [T]> { ... }
}
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
    let mut windows = tx_list.as_slice().windows(lk_bk+1);
    // eprintln!(
    //     "number of transactions: {}\ndays to look back: {}",
    //     tx_num, lk_bk
    // );
    // eprintln!("transaction list \n{:?}", tx_list);
    let mut notifications = 0;
    while let Some(i) = windows.next() {
        {
        let (hist,c_exp) = &i[...lk_bk,);
        hist.sort();
        let trigger = 2 * median(hist);
            if trigger >= c_exp[0] { notifications = notifications+1; }
        }
    }
    print!("{}", &notifications);
}

fn median(v: &[u32])->u32 {
    let count = v.len();
    if count % 2 == 1 {
        v[count / 2]
    } else {
        (v[count / 2] + v[count / 2 - 1]) / 2
    }
}