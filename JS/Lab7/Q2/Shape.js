export default class Shape {
  #dimension1;
  #dimension2;
  static #shapeCounter = 0;
  constructor(x = 1, y = 1) {
    if (isNaN(x) || isNaN(y)) {
      throw new Error("You must enter a number");
    } else if (x < 1 || y < 1) {
      throw new Error("You must enter positive numbers");
    }
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
    Shape.#shapeCounter++;
    this.#dimension1 = x;
    this.#dimension2 = y;
  }

  calculateArea() {}
  calculatePerimeter() {}

  set dimension1(val) {
    if (isNaN(val)) {
      throw new Error("You must enter a number");
    } else if (val < 1) {
      throw new Error("You must enter positive numbers");
    }
    this.#dimension1 = val;
  }

  set dimension2(val) {
    if (isNaN(val)) {
      throw new Error("You must enter a number");
    } else if (val < 1) {
      throw new Error("You must enter positive numbers");
    }
    this.#dimension2 = val;
  }

  get dimension1() {
    return this.#dimension1;
  }

  get dimension2() {
    return this.#dimension2;
  }
  static get counter() {
    return Shape.#shapeCounter;
  }
}
