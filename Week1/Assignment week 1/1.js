/*
* Author: Abhishek Aligh
* Problem 1 (5 mins):
* Parsing an JSON object’s Values:
* Write a function called “printAllValues” which returns an newArray of all the input object’s values.
* Input (Object):
* 
* var object = {name: “RajiniKanth”, age: 33, hasPets : false};
* Output:
* [“RajiniKanth”, 33, false]

*/

var obj = { name: "RajiniKanth", age: 33, hasPets: false };
function printAllValues(obj) {
  
  let array = [];
  for (i = 0; i < Object.values(obj).length; i++) {
    array.push(Object.values(obj)[i]);
  }
  console.log(array);
}
printAllValues(obj);