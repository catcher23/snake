(function () {
  if (typeof AstroSnake === "undefined") {
    window.AstroSnake = {};
  }

  var Snake = AstroSnake.Snake = function (board) {
    this.dir = 'up';
    this.board = board;
    this.turning = 'false';
    var center = new AstroSnake.Coord(Math.floor(board.dim/2), Math.floor(board.dim/2));
    this.segments = [center];

    this.snakeLength = 0;

  };



    Snake.prototype.eatApple = function () {
      if (this.head().equals(this.board.apple.position)) {
        this.snakeLength += 3;
        return true;
      } else {
        return false;
      }
    };

    Snake.prototype.isOccupying = function (array) {
    var result = false;
    this.segments.forEach(function (segment) {
      if (segment.i === array[0] && segment.j === array[1]) {
        result = true;
        return result;
      }
    });
    return result;
  };

  Snake.prototype.head = function () {
    return this.segments[this.segments.length - 1];
  };

  Snake.prototype.isValid = function () {
  var head = this.head();

  if (!this.board.validPosition(this.head())) {
    return false;
  }

  for (var i = 0; i < this.segments.length - 1; i++) {
    if (this.segments[i].equals(head)) {
      return false;
    }
  }
  return true;
};

Snake.prototype.move = function () {
  // move snake forward
  this.segments.push(this.head().plus(AstroSnake.Coord.MOVES[this.dir]));

  // allow turning again
  this.turning = false;

  // maybe eat an apple
  if (this.eatApple()) {
    this.board.apple.replace();
  }

  // if not growing, remove tail segment
  if (this.snakeLength > 0) {
    this.snakeLength -= 1;
  } else {
    this.segments.shift();
  }

  // destroy snake if it eats itself or runs off grid
  if (!this.isValid()) {
    this.segments = [];
  }
};

    Snake.prototype.turn = function (dir) {
  // avoid turning directly back on yourself
  if (AstroSnake.Coord.MOVES[this.dir].isOpposite(AstroSnake.Coord.MOVES[dir]) ||
    this.turning) {
    return;
  } else {
    this.turning = true;
    this.dir = dir;
  }
};



})();
