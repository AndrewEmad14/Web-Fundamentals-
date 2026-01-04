var isRunning = true;
var radius = "";
while (isRunning) {
  radius = prompt("What is the value of your circle radius");
  if (!radius) {
    alert("YOU CANT ENTER AN EMPTY RADIUS");
  } else if (isNaN(radius)) {
    alert("RADIUS MUST CONTAIN ONLY NUMBERS");
  } else if (parseInt(radius) < 0) {
    alert("YOU CANT HAVE A NEGATIVE RADUIS");
  } else {
    isRunning = false;
  }
}
