var array = [];
var size = 5;
for (var i = 0; i < size; i++) {
  var isRunning = true;
  var number = "";
  while (isRunning) {
    number = prompt(`What is the value of your Number ${i + 1}`);
    if (!number) {
      alert("YOU CANT ENTER AN EMPTY NUMBER");
    } else if (isNaN(number)) {
      alert("NUMBER MUST CONTAIN ONLY NUMBERS");
    } else {
      isRunning = false;
    }
  }
  array.push(parseInt(number));
}
// line breaks
var horizontaLineElement = document.createElement("hr");
var lineBreakElement = document.createElement("br");

//heading
var h1Element = document.createElement("h1");
var h1Text = document.createTextNode("Sorting");
h1Element.append(h1Text);
document.body.append(h1Element);
document.body.append(lineBreakElement);
document.body.append(horizontaLineElement);

//normal array

//label of first line
var normalArrayLabelElement = document.createElement("span");
var normalArrayLabelText = document.createTextNode(
  "u've entered the values of "
);

normalArrayLabelElement.setAttribute("class", "label");

normalArrayLabelElement.append(normalArrayLabelText);
document.body.append(normalArrayLabelElement);

//content of first line
var normalArrayElement = document.createElement("span");
var normalArrayText = document.createTextNode(array.toString());
normalArrayElement.append(normalArrayText);
document.body.append(normalArrayElement);

//the element is already in the tree inorder to reuse it i used cloneNode(true)
document.body.append(lineBreakElement.cloneNode(true));

//reversed sort
var reversedArrayLabelElement = document.createElement("span");
var reversedArrayLabelText = document.createTextNode(
  "ur values after being sorted descending "
);
// third label
reversedArrayLabelElement.setAttribute("class", "label");

reversedArrayLabelElement.append(reversedArrayLabelText);
document.body.append(reversedArrayLabelElement);

array.sort((a, b) => b - a);

var reversedArrayElement = document.createElement("span");
var reversedArrayText = document.createTextNode(array.toString());
reversedArrayElement.append(reversedArrayText);
document.body.append(reversedArrayElement);
// label second line

document.body.append(lineBreakElement.cloneNode(true));

// regular sort

var sortedArrayLabelElement = document.createElement("span");
var sortedArrayLabelText = document.createTextNode(
  "ur values after being sorted ascending "
);

sortedArrayLabelElement.setAttribute("class", "label");

sortedArrayLabelElement.append(sortedArrayLabelText);
document.body.append(sortedArrayLabelElement);

array.sort((a, b) => a - b);

var sortedArrayElement = document.createElement("span");
var sortedArrayText = document.createTextNode(array.toString());
sortedArrayElement.append(sortedArrayText);
document.body.append(sortedArrayElement);
