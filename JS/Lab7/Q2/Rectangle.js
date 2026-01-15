import Shape from "./Shape.js";

export default class Rectangle extends Shape {
  static #rectangleCounter = 0;
  constructor(x = 1, y = 1) {
    if (Rectangle.#rectangleCounter >= 1) {
        throw new Error("Cannot create more than one Rectangle");
      } else {
       Rectangle.#rectangleCounter++;
      }
    super(x, y);
  }

  calculateArea() {
    return this.dimension1 * this.dimension2;
  }

  calculatePerimeter() {
    return 2 * (this.dimension1 + this.dimension2);
  }
  toString() {
    return (
      "Rectangle Area = " +
      this.calculateArea() +
      "\nRectangle Perimeter = " +
      this.calculatePerimeter()
    );
  }
}
