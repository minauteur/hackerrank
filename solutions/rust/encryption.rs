// https://www.hackerrank.com/challenges/encryption/problem
fn encryption(s: &String) -> String {

  let l = s.len();
  
  let r: f64 = f64::sqrt(l as f64);
  let rows: usize = r.floor() as usize;
  let cols: usize = r.ceil() as usize;
  
  let mut v: Vec<String> = vec![String::new(); cols];
  let mut i: usize = 0;
  let mut j: usize = 0;
  
  for c in s.chars() {
    if i >= cols {
      i = 0;
      j += 1;
    }
    if j >= rows {
      j = 0;
    }
    v[i].push(c);
    i += 1;
  }
  return v.join(" ")
}
