const Rectangle = require('./rectangle.js');
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}
module.exports = Square;
