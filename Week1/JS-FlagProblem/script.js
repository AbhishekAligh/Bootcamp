/*
 * Author: Abhishek Aligh
 *
 *
 */

//create a request variable
var request = new XMLHttpRequest();

//open the request
//open(method, URL, asyncFlag=true/false)
// the flag parameter is used to handle the error if it exist by not affecting the execution of other lines of code.
//It simply makes this block of code asynchronous.
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

//send the request
request.send();

//load the response
let outputString = [];
request.onload = function () {
  var data = JSON.parse(this.response);
  for (let i = 0; i < data.length; i++) {
    console.log("Country " + data[i]["name"] + " " + "flag URL: " + data[i]["flag"]);
  }
};
