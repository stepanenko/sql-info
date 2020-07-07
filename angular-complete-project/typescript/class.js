var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('Drawing', this.x, this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
