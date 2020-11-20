//IIFE

(function (arr, noOfRotations) {
  for (let i = 0; i < noOfRotations; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr);
})([1, 2, 3, 4, 5], 3);

//Using anonymous function

let outputArr = function (arr, noOfRotations) {
  for (let index = 0; index < noOfRotations; index++) {
    //pop an element from the last and push it to the starting index using the unshift array funciton.
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(outputArr([1, 2, 3, 4, 5], 2));
