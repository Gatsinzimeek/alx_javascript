class Rectangle {
  constructor(w, h) {
    if(w > 1 && h > 1) {
      this.width = w;
      this.height = h;
    }
  }
  print() {
    for(let i = 1; i <= this.height; i++){
      let row = '';
      for(let j = 1; j <= this.width; j++){
        row += 'X'
      }
      console.log(row);
    }
  };
  double() {
      this.width *= 2;
      this.height *= 2;
    }
  rotate() {
   let row = this.width;
   let col = this.height;

    this.width = col;
    this.height = row;
   }
};

module.exports = Rectangle;
