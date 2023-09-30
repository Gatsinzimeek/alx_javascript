class Rectangle{
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
              row += 'X';
          }
        console.log(row);
      }
  }
};

module.exports = Rectangle;
