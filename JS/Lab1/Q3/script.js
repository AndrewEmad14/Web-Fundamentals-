var sum = 0;
var limit = 100;
var isRunning = true;
while (isRunning) {
  var n = prompt("Enter a Number");
  var temp = parseInt(n);
  if (isFinite(n)) {
    sum += parseInt(n);
    if (temp === 0 || sum > limit) {
      isRunning = false;
    }
  }
}
document.write(`<h1>Sum=${sum}<h1>`);
