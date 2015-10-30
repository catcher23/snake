(function () {
  if (typeof AstroSnake === "undefined") {
    window.AstroSnake = {};
  }

  var Coord = AstroSnake.Coord = function (i, j) {
    this.i = i;
    this.j = j;
  };

  Coord.prototype.equals = function (coord2) {
    return (this.i == coord2.i) && (this.j == coord2.j);
    };

  Coord.prototype.isOpposite = function (coord2) {
    return (this.i == (-1 * coord2.i)) && (this.j == (-1 * coord2.j));
  };

  Coord.prototype.plus = function (coord2) {
    return new Coord(this.i + coord2.i, this.j + coord2.j);
  };

  Coord.MOVES = {
  "up": new Coord(-1, 0),
  "right": new Coord(0, 1),
  "down": new Coord(1, 0),
  "left": new Coord(0, -1)
  };

})();
