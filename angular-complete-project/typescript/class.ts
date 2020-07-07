
class Point {
  x: number;
  y:number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('Drawing', this.x, this.y);
  }
}

const point = new Point(1, 2);
point.draw();  // Drawing 1 2
