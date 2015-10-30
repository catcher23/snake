(function () {
  if (typeof AstroSnake === "undefined") {
    window.AstroSnake = {};
  }

    var Board = AstroSnake.Board = function (dim) {
      this.dim = dim;

      this.snake = new AstroSnake.Snake(this);
      this.apple = new AstroSnake.Apple(this);
    };

Board.BLANK_SYMBOL = ".";
    Board.blankGrid = function (dim) {
      var grid = [];

      for (var i = 0; i < dim; i++) {
        var row = [];
        for (var j = 0; j < dim; j++) {
          row.push('.');
        }
        grid.push(row);
      }

      return grid;
    };

    Board.prototype.render = function () {
      var grid = Board.blankGrid(this.dim);

      this.snake.segments.forEach(function (segment) {
        grid[segment.i][segment.j] = Snake.SYMBOL;
      });

      grid[this.apple.position.i][this.apple.position.j] = Apple.SYMBOL;

      var rowStrs = [];
      grid.map(function (row) {
        return row.join("");
      }).join("\n");
    };

    Board.prototype.validPosition = function (coord) {
  return (coord.i >= 0) && (coord.i < this.dim) &&
    (coord.j >= 0) && (coord.j < this.dim);
  };

  })();
