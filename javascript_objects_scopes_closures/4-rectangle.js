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
    for(let i = 1; i <= this.height*2; i++){
      let row = '';
      for(let j = 1; j <= this.width*2; j++){
        row += 'X'
      }
      console.log(row);
      }
    };
  rotate() {
    for(let i = 1; i <= this.width; i++){
      let row = '';
      for(let j = 1; j <= this.height; j++){
        row += 'X'
      }
      console.log(row);
    }
   }
};

module.exports = Rectangle;
