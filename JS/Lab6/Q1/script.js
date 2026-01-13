class Shape {
  #dimension1;
  #dimension2;
  static #rectangleCounter = 0;
  static #circleCounter = 0;
  static #squareCounter = 0
  constructor(x = 1, y = 1) {
    
    if (isNaN(x) || isNaN(y)) {
      throw new Error("You must enter a number");
    } else if (x < 1 || y < 1) {
      throw new Error("You must enter positive numbers");
    }
    if(this.constructor === Shape){
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
    if (this.constructor === Rectangle ){
      if(Shape.#rectangleCounter >= 1){
        throw new Error("Cannot create more than one Rectangle");
      }else{
        Shape.#rectangleCounter++;
      }
    }else if (this.constructor === Circle){
      if(Shape.#circleCounter >= 1){
        throw new Error("Cannot create more than one Circle");
      }else{
        Shape.#circleCounter++;
      }
    }else if (this.constructor === Square){
      if(Shape.#squareCounter >= 1){
        throw new Error("Cannot create more than one Square");
      }else{
        Shape.#squareCounter++;
      }
    }
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
    return Shape.#rectangleCounter + Shape.#circleCounter + Shape.#squareCounter;
  }
  
}

class Rectangle extends Shape {
  constructor(x = 1, y = 1) {
    super(x, y);
  }

  calculateArea() {
    return this.dimension1 * this.dimension2;
  }

  calculatePerimeter() {
    return 2 * (this.dimension1 + this.dimension2);
  }
  toString(){
   return "Rectangle Area = " +
      this.calculateArea() +
      "\nRectangle Perimeter = " +
      this.calculatePerimeter()
  
  }
}

class Circle extends Shape {
  constructor(radius = 1) {
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

class Square extends Shape {
  constructor(side = 1) {
    super(side, side);
  }

  calculateArea() {
    return Math.pow(this.dimension1, 2);
  }

  calculatePerimeter() {
    return 4 * this.dimension1;
  }
  toString(){
    return "Square Area = " +
      this.calculateArea() +
      "\nSquare Perimeter = " +
      this.calculatePerimeter();
  }
}

try {
  let myRectangle = new Rectangle();
  myRectangle.dimension1 = parseFloat(
    prompt("Enter First Rectangle dimension")
  );
  myRectangle.dimension2 = parseFloat(
    prompt("Enter second Rectangle dimension")
  );
  console.log(""+myRectangle);
  let myCircle = new Circle();
  myCircle.dimension1 = parseFloat(prompt("Enter Circle Radius"));
  console.log(""+myCircle);

  let mySquare = new Square();
  mySquare.dimension1 = parseFloat(prompt("Enter Square dimension"));

  console.log(""+mySquare);
  console.log("Total shapes created: " + Shape.counter);

  let anotherRectangle = new Rectangle();

} catch (e) {
  alert(e.message);
}
