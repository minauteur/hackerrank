use std::io::{self, Read};
use std::collections::VecDeque;
use std::iter;

fn main () {
    let mut input = String::new();
    let mut ans = String::new();
    
    io::stdin().read_to_string(&mut input);
    
    let mut lines: Vec<&str> = input.split("\n").collect();
    let mut ln_iter = &mut lines.into_iter();
    let params: Vec<&str> = ln_iter.next().unwrap()
        .split_whitespace()
        .collect();
    let tx_num: usize = params[0].parse::<usize>().unwrap();
    let lk_bk: usize = params[1].parse::<usize>().unwrap();
    let mut tx_list: VecDeque<u32> = ln_iter.next().unwrap()
        .split_whitespace()
        .map(|x|x.parse::<u32>().unwrap())
        .collect();
}
fn activityNotifications(vec: Vec<i32>)
fn median(v: &[u32])->u32 {
    let count = v.len();
    if count % 2 == 1 {
        v[count / 2]
    } else {
        (v[count / 2] + v[count / 2 - 1]) / 2
    }
}