//Odd numbers in an array

// Using Immediately Invoked Function Expression (IIFE)
(function (arr) {
  let oddCheck = arr.filter((element) => element % 2 !== 0);
  console.log(oddCheck);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]); //Output:[1,3,5,7,9]

var odds = function (arr) {
  return arr.filter((element) => element % 2 !== 0);
};
console.log(odds([1, 2, 3, 4, 5, 6, 7, 8, 9])); //Output:[1,3,5,7,9]
