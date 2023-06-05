// Test 3

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

//run:
//node Test3.js

function timeConversion(time) {
  let AMPM = time.slice(-2);
  let timeArr = time.slice(0, -2).split(":");

  if (AMPM === "AM" && timeArr[0] === "12") {
    timeArr[0] = "00"; // 12 am  = 00:00:00
  } else if (AMPM === "PM") {
    timeArr[0] = (timeArr[0] % 12) + 12; // modulus
  }

  console.log(timeArr.join(":"));
}

timeConversion("07:05:45PM");
timeConversion("12:00:00AM");
