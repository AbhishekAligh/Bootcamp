var container = document.querySelector(".container");
var maincountdown = document.createElement("h1");
setTimeout(function () {
  maincountdown.innerText = "10";
  setTimeout(function () {
    maincountdown.innerText = "9";
    setTimeout(function () {
      maincountdown.innerText = "8";
      setTimeout(function () {
        maincountdown.innerText = "7";
        setTimeout(function () {
          maincountdown.innerText = "6";
          setTimeout(function () {
            maincountdown.innerText = "5";
            setTimeout(function () {
              maincountdown.innerText = "4";
              setTimeout(function () {
                maincountdown.innerText = "3";
                setTimeout(function () {
                  maincountdown.innerText = "2";
                  setTimeout(function () {
                    maincountdown.innerText = "1";
                    setTimeout(function () {
                      maincountdown.innerText = "Happy Independence Day!";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
container.appendChild(maincountdown);
