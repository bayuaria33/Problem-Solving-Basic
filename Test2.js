// Test 2

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

//run:
//node Test2.js

function plusMinus(arr) {
  let negative = 0,
    positive = 0,
    zero = 0;

  for (const num of arr) {
    if (num < 0) ++negative;
    if (num == 0) ++zero;
    if (num > 0) ++positive;
  }
  // convert to string and reformat
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}

plusMinus([1, 1, 0, -1, -1, 1]);
plusMinus([-4, 3, -9, 0, 4, 1]);
