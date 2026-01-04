var testString = prompt("Enter your test String");

var isCaseSensitive = confirm("Do i consider case sensitivity");

var isPalindrom = function (target) {
  if (!target) {
    return true;
  }
  if (!isCaseSensitive) {
    target = target.toUpperCase();
  }
  var palindrom = target.split("").reverse().join("");
  if (palindrom === target) {
    return true;
  }
  return false;
};
if (isPalindrom(testString)) {
  document.write(`<h1>The String Is PALINDROM</h1>`);
} else {
  document.write(`<h1>The String Is NOT PALINDROM</h1>`);
}
