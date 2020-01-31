// https://www.hackerrank.com/challenges/arrays-ds
use std::io::{self, Read};

fn main() {
    let mut buffer = String::new();
    io::stdin().read_to_string(&mut buffer).unwrap();
    let mut lines = buffer.lines();
    let vec_len = lines.next().expect("failed reading first line!");
    let mut vec: Vec<&str> = lines.next().expect("failed reading second line!").split(" ").collect();
    vec.reverse();
    print!("{}", vec.join(" "));
}