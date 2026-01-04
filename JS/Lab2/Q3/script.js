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
alert(`Total area of the circle is :${Math.PI*Math.pow(radius,2)}`)
isRunning = true;
var inputNumber = "";
while (isRunning) {
  inputNumber = prompt("What is the value you want to calculate its square root?");
  if (!inputNumber) {
    alert("YOU CANT ENTER AN EMPTY NUMBER");
  } else if (isNaN(inputNumber)) {
    alert(" MUST ENTER A NUMBER");
  } else if (parseInt(inputNumber) < 0) {
    alert("YOU CANT SQUARE ROOT A NEGATIVE NUMBER");
  } else {
    isRunning = false;
  }
}
alert(`square root is :${Math.sqrt(inputNumber)}`)
