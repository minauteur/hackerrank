// https://www.hackerrank.com/challenges/new-year-chaos/problem
use std::io::{self, Read};
use std::collections::HashMap;
use std::iter::{Iterator,IntoIterator};
use std::borrow::ToOwned;
use std::str;
use std::cmp;
use std::io::{Write};
// #[macro_use] extern crate log;
// use std::String::ToString;

// Enter your code here
fn main(){
    let mut input = String::new();
    let mut lines: Vec<&String> = Vec::new();
    match io::stdin().read_to_string(&mut input) {
        Ok(n) => {
            n;
        }
        Err(error) => println!("error: {}", error),
    }
    let mut line_digits: Vec<Vec<i32>> = Vec::new();
    for line in input.clone().lines().into_iter() {
        let l: Vec<i32> = line.split_whitespace()
        .map(|x| {
            str::parse::<i32>(x).unwrap()
        })
        .collect();
        line_digits.push(l.to_owned());
    }
    let test_str: String = line_digits[0][0].to_string();
    let test_num: i32 = line_digits[0][0];
    let fs = format!("read {} test cases!\n", &test_str);
    io::stderr().write(&fs.as_bytes());
    for num in 0..test_num*2 {
        let test_param = num as usize;
        let test_content = (num+1) as usize;
        let vec_len: i32 = line_digits[test_param][0];
        if test_content%2 == 0 {
            let mut test_line = &line_digits[test_content];
            let ns = format!("current test queue {:?}\n", &test_line[..]);
            io::stderr().write(&ns.as_bytes());
            if let Some(num) = analyze_queue(test_line.to_owned()) {
                println!("{}", num.to_string());
            } else {
                println!("Too chaotic");
            }
        } else {
            let vec_len = &line_digits[test_content][0];
            let t_q_l = format!("current test queue is length {}", &vec_len.to_string());
            io::stderr().write(&t_q_l.as_bytes());
        }


    }
} 
fn analyze_queue(q: Vec<i32> ) -> Option<i32> {
    let mut sorted_q = q.clone();
    sorted_q.sort();
    let sq = format!("sorted queue: {:?}\n", &sorted_q[..]);
    io::stderr().write(&sq.as_bytes());
    let oq = format!("original queue: {:?}\n", &q[..]);
    io::stderr().write(&oq.as_bytes());
    let mut minimum_swaps = 0;
    let mut temp_vec: Vec<i32> = vec![0;q.len() as usize];
    let v_s = format!("created vector with len: {}", &temp_vec.len());
    io::stderr().write(&v_s.as_bytes());
    for idx in 0..q.len() {
        let i = idx as i32;
        let is = format!("index = {}\n", &idx.to_string());
        io::stderr().write(&is.as_bytes());
        if (q[idx] - (i+1) > 2) {
            return None;
        }
        let mut j = cmp::max(0,q[idx]-2) as usize;
        // let mut j = k as usize;
        
        while j<idx {
            if q[j]>q[idx] {
                minimum_swaps = minimum_swaps+1;
            }
            j = j+1;
        }
    }
    return Some(minimum_swaps);
}
