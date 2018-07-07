use std::io::{self, Read};
use std::collections::HashSet;
use std::iter;

fn main () {
    let mut input = String::new();
    let mut ans = String::new();
    
    io::stdin().read_to_string(&mut input);
    
    let mut lines: Vec<&str> = input.split("\n").collect();
    let mut ln_iter = &mut lines.into_iter();
    let num_cases: usize = ln_iter.next().unwrap().parse::<usize>().unwrap();
    for _ in 0..num_cases {
        let s1: HashSet<_> = ln_iter.next().unwrap().chars().collect();
        let s2: HashSet<_> = ln_iter.next().unwrap().chars().collect();
            if compareStrings(s1,s2) {ans.push_str(&"YES\n".to_string())} 
            else {ans.push_str(&"NO\n".to_string());}
    }
    print!("{}", &ans);
}
fn compareStrings(s1: HashSet<char>, s2: HashSet<char>)->bool {
    let set: HashSet<_> = s1.difference(&s2).collect();
    if set.len() < s1.len() {
        return true;
    } else {
        return false;
    }
}