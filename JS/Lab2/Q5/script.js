//1.
function sum(x, y) {
  if (arguments.length !== 2) {
    throw new Error("This function only accepts two parapmeters");
  }
  return x + y;
}

var z = sum(10, 8);
console.log(z);
try {
  z = sum(10, 20, 30);
} catch (err) {
  console.log(err.message);
}
z = sum(1, 2);
console.log(z);

//2.
var anomynus = function () {
  return Array.from(arguments).reverse();
};

console.log(anomynus(1, 2, 3, 4, 5, 6));

//3.
function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i])) {
      sum += arguments[i];
    } else {
      throw new Error("Must Enter Numbers");
    }
  }
  return sum;
}
try {
  console.log(add(1, 2, 3, 4, 5, "pp"));
} catch (e) {
  console.log(e.message);
}
console.log(add(1, 2, 3, 4, 5));

//4.
function getDateDay(date) {
  var temp = new Date(date);
  var options = { weekday: "long" };
  return temp.toLocaleDateString("en-US", options);
}

var date = "2026-01-05";
console.log(getDateDay(date));
