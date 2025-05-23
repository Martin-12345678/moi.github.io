let test = document.getElementById("ul");

test.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "orange";
    },
  false,
);
test.addEventListener(
  "mouseout",
  function (event) {
  event.target.style.color = "";
  },
  
  false,
);
