import Shape from "./Shape.js";

export default class Circle extends Shape {
   static #circleCounter = 0;
  constructor(radius = 1) {
     if (Circle.#circleCounter >= 1) {
        throw new Error("Cannot create more than one Circle");
      } else {
        Circle.#circleCounter++;
      }
    super(radius, radius);
  }

  calculateArea() {
    return Math.PI * Math.pow(this.dimension1, 2);
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.dimension1; // Circumference
  }
  toString(){
    return "Circle Area = " +
      this.calculateArea() +
      "\nCircle Perimeter = " +
      this.calculatePerimeter();
  }
}