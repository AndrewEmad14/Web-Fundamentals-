import Shape from "./Shape.js";

export default class Square extends Shape {
  constructor(side = 1) {
    if (Square.#squareCounter >= 1) {
        throw new Error("Cannot create more than one Square");
      } else {
        Square.#squareCounter++;
      }
    super(side, side);
  }
  static #squareCounter = 0;
  calculateArea() {
    return Math.pow(this.dimension1, 2);
  }

  calculatePerimeter() {
    return 4 * this.dimension1;
  }
  toString() {
    return (
      "Square Area = " +
      this.calculateArea() +
      "\nSquare Perimeter = " +
      this.calculatePerimeter()
    );
  }
}
