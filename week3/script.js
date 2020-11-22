

// create a new request
var request = new XMLHttpRequest();

// Hit the URL by opening a connection
// Note: [Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// send the request

request.send();

// Let the data load and then fetch the data you need
request.onload = function () {
try{
  var data = JSON.parse(this.response);

  // console.log(data);
  if (data.length < 0) {
    throw new IncompleteError("Couldn't fetch data correctly kindly re-check");
  }

  // 1. Get all the countries from Asia continent using Filter function
  var asianCountries = data.filter((continent) => continent.region === "Asia");
  console.log("Following are the Asian countries:");
  console.log(asianCountries);

  // 2. Get all the countries with population of less than 2 lacs using Filter function
  var population2L = data.filter(
    (population) => population.population < 200000
  );
  console.log("*".repeat(120)); //Just to highlight that below this is the output for a different task
  console.log(
    "Following are the countries with a population of less than 2 Lacs:"
  );
  console.log(population2L);

  // 3. Print the following details name, capital, flag using forEach function
  console.log("*".repeat(120)); //Just to highlight that below this is the output for a different task
  console.log("Details: name, capital, flag");
  data.forEach((country) => {
    console.log(
      "Country: " +
        country.name +
        "| Capital: " +
        country.capital +
        "|Flag: " +
        country.flag
    );
  });

  // 4. Print the total population of countries using reduce function

  /* 
      |Note: I reccomend reading ' https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce ' 
            for a better understanding of how reduce works in JS.
          */
  console.log("*".repeat(120));
  const initialValue = 0;
  const reducer = (accumulator, item) => {
    return accumulator + item.population;
  };
  var totalPopulation = data.reduce(reducer, initialValue);
  console.log("Total population in World = " + totalPopulation);
  console.log("*".repeat(120)); //Just to highlight that below this is the output for a different task
  // 5. Print the total population of  Asian countries using reduce and filter function

  var totalPopulationInAsia = asianCountries.reduce(reducer, initialValue);
  console.log("Total population in Asia  =  " + totalPopulationInAsia);

  // 6. Print the country which use US Dollars as currency.
  var currencyUS = data.filter(
    (dollar) => dollar["currencies"][0]["code"] === "USD"
  );
  console.log("*".repeat(120)); //Just to highlight that below this is the output for a different task
  console.log("Countries which use US Dollar as their currency are: ");
  console.log(currencyUS);
}
catch(err){
  alert(err);
}
};
