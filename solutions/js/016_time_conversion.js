// https://www.hackerrank.com/challenges/time-conversion/problem
function timeConversion(s) {
    let new_time = "";
    s = s.split('');
    let hour = [s[0], s[1]].join('');
    let minute = [s[3], s[4]].join('');
    let sec = [s[6], s[7]].join('');
    let am_pm = [s[8], s[9]].join('');
    switch (am_pm) {
        case "AM":
            {
                if (hour === "12") {
                    hour = "00"
                }
                new_time = hour + ":" + minute + ":" + sec;
                console.log(new_time);
                return new_time;
            }
        case "PM":
            {
                if (hour === "12") {
                    new_time = hour + ":" + minute + ":" + sec;
                } else {
                    hour = parseInt(hour) + 12;
                    new_time = hour + ":" + minute + ":" + sec;
                }
                console.log(new_time);
                return new_time;

            }
    }

}
