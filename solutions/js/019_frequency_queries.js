// https://www.hackerrank.com/challenges/frequency-queries/problem
function freqQuery(queries) {
  let qType, xyz, old_freq, new_freq,
      count = {},
      freq = {},
      qResults=[];

  for (let i=0; i < queries.length; i++) {
    qType = queries[i][0];
    xyz = queries[i][1];
    if (qType < 3) { recount(xyz,qType) }
    else {
      qResults.push((freq[xyz]) ? 1 : 0)
    }
  }

  function recount(xyz,qType) {
    if (!count[xyz] && qType == 1) { count[xyz] = 0 }
    if (!count[xyz] && qType == 2) { return }
    old_freq = count[xyz];
    switch (qType) {
      case 1:
        count[xyz]++
        break;
      case 2:
        count[xyz]--
    }
    new_freq = count[xyz];
    // decrement freq[old_freq]
    if (freq[old_freq]) { freq[old_freq]-- }
    // increment freq[new_freq]
    if (new_freq > 0) {
      if (freq[new_freq]) { freq[new_freq]++ }
      else { freq[new_freq] = 1 }
    }
    return
  }

  return qResults
}

