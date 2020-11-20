// Total of all the numbers in an array

// Use reduce function
// Array.reduce(callback(accumulator, currentValue, (optional)currentIndex,(optional)[array it's being called upon]))
// Refer to MDN docs for elucidation.

// Using Immediately Invoked Function Expression (IIFE)

(function () {
  console.log(
    [1, 2, 3, 4].reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  );
})();

// Using anonymous function

let total = function (arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
};
console.log(total([10, 20, 30, 40]));
