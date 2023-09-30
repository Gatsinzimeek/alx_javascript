class Rectangle{
  constructor(w, h) {
    if(w > 1 && h > 1) {
      this.width = w;
      this.height = h;
    }
  }
  print = () => {
      for(let i = 1; i <= this.height; i++){
          for(let j = 1; j <= this.width; j++){
              console.log('X \t');
          }
          console.log('\n');
      }
  }
};

module.exports = Rectangle;
