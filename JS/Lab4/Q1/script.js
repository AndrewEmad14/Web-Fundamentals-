var myBox = document.getElementById("Box");
var maxNumber = 255
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//multiple divs have the same id becarefull because clone node copies id too
function generateBox(){
    var red = getRandomInt(maxNumber);
    var blue = getRandomInt(maxNumber);
    var green = getRandomInt(maxNumber);
    var newBox = myBox.cloneNode(true);
    newBox.removeAttribute("onclick");
    newBox.style.backgroundColor = `rgb(${red},${blue},${green})`;
    document.body.append(newBox) ;

}