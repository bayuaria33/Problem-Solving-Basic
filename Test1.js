// Test 1

// Given five positive integers, find the minimum and maximum values that can be calculated by
// summing exactly four of the five integers. Then print the respective minimum and maximum values
// as a single line of two space-separated long integers.

//run:
//node Test1.js

function miniMaxSum(arr) {
  let sum = arr[0],
    min = arr[0],
    max = arr[0];
  for (const num of arr.slice(1)) {
    sum += num;
    if (min > num) min = num;
    if (max < num) max = num;
  }
  console.log(sum - max, sum - min);
}

miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 3, 4, 5]);
