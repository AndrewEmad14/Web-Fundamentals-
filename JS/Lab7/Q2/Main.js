import Shape from "./Shape.js";
import Rectangle from "./Rectangle.js";
import Circle from "./Circle.js";
import Square from "./Square.js";






try {
  let myRectangle = new Rectangle();
  myRectangle.dimension1 = parseFloat(
    prompt("Enter First Rectangle dimension")
  );
  myRectangle.dimension2 = parseFloat(
    prompt("Enter second Rectangle dimension")
  );
  console.log(myRectangle.toString());
  let myCircle = new Circle();
  myCircle.dimension1 = parseFloat(prompt("Enter Circle Radius"));
  console.log(myCircle.toString());

  let mySquare = new Square();
  mySquare.dimension1 = parseFloat(prompt("Enter Square dimension"));

  console.log(mySquare.toString());
  console.log("Total shapes created: " + Shape.counter);

  let anotherRectangle = new Rectangle();

} catch (e) {
  alert(e.message);
}
