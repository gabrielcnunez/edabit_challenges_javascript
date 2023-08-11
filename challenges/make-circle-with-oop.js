// Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided 
// by an argument. The circles constructed must have two methods getArea() (PI*r^2) and 
// getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can 
// use as a base example.

// Examples
// let circy = new Circle(11)
// circy.getArea()

// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// // Should return 27.897342763877365

class Circle {
  constructor(radius) {
    this.radius = radius
  }
  getArea(){}
  getPerimeter(){}
}

module.exports = Circle