// Return all the palindromes in an array

//IIFE
(function (arr) {
  let output = arr.reduce((accumulator, item) => {
    let currentValue = item.toString();
    let first = 0,
      last = currentValue.length - 1;
    while (first <= last) {
      if (currentValue[first] !== currentValue[last]) return accumulator;
      first++;
      last--;
    }
    accumulator.push(item);
    return accumulator;
  }, []);
  console.log(output);
})([121, 23, 44, 251, "abhishek", "pop", "racecar"]);

// Using Anonymous Function
let palindromeArray = function (arr) {
  let output = arr.reduce((accumulator, item) => {
    let currentValue = item.toString();
    let first = 0,
      last = currentValue.length - 1;
    while (first <= last) {
      if (currentValue[first] !== currentValue[last]) return accumulator;
      first++;
      last--;
    }
    accumulator.push(item);
    return accumulator;
  }, []);
  console.log(output);
};
palindromeArray([121, 111, 47, "kiik", "aishwarya", "racecar", "pop"]);
