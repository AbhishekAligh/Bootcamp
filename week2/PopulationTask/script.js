// The XMLHttpRequest object is a developers dream, because you can:

// Update a web page without reloading the page
// Request data from a server - after the page has loaded
// Receive data from a server  - after the page has loaded
// Send data to a server - in the background

// It has 3 main steps
// 1. create a request (call the constructor and then open the connection)
// 2. Send a request
// 3. Load the request

// Creating a request using the new keyword and Constructor method

let request = new XMLHttpRequest();

// Hit the URL by opening a connection
// Note: [Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// Send a request

request.send();

// Let the data load and then fetch the data you need

request.onload = function () {
  try {
    let data = JSON.parse(this.response);
    let arr = [];
    if (data.length < 0) {
      throw new IncompleteError(
        "Couldn't fetch data correctly kindly re-check"
      );
    }
    // for (let country = 0; country < data.length; country++) {
    //   arr.push(data[country]["population"]);
    // }
    // console.log(data);
    data.forEach((element) => {
      console.log(element["name"], element["population"]);
    });
  } catch (err) {
    alert(err);
  }
};
