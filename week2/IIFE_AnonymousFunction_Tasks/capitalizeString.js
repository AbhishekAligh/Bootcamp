// Convert all the strings to title caps in a string array

// IIFE

(function (stringArr) {
  let output = stringArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  console.log(output);
})(["john", "olivia", "daniel"]);

// Using anonymous function
let output = function (arr) {
  return arr.map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)));
};
console.log(output(["john", "olivia", "daniel"]));
