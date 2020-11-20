// Return median of two sorted arrays of same size

// IIFE
(function (arr1, arr2) {
  let input = [];
  let median = 0;
  input = arr1.concat(arr2); // merge the two arrays
  input.sort(); // Since the two arrays were sorted among themselves, post concatenation we need to sort them again
  let len = input.length;
  let halflen = len / 2;
  // console.log(input);
  if (len % 2 == 0) {
    median = (input[halflen] + input[halflen - 1]) / 2;
    console.log(median);
    // return median;
  } else {
    median = input[halflen - 1 / 2];
    console.log(median);
    // return median;
  }
})([1, 2, 6, 7, 8], [3, 4]);

// Using Anonymous Function

var median = function (arr1, arr2) {
  let input = [];
  let median = 0;
  input = arr1.concat(arr2); // merge the two arrays
  input.sort(); // Since the two arrays were sorted among themselves, post concatenation we need to sort them again
  let len = input.length;
  let halflen = len / 2;
  console.log(input);
  if (len % 2 == 0) {
    median = (input[halflen] + input[halflen - 1]) / 2;
    // console.log(median);
    return median;
  } else {
    median = input[halflen - 1 / 2];
    // console.log(median);
    return median;
  }
};
console.log(median([1, 2, 5, 6], [3, 4, 7, 8]));
