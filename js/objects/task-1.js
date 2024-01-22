class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.round(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

const circle = new Circle(5);
console.log(circle.getArea()); // "78.54"
