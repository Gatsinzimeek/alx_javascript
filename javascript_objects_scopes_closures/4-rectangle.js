class Rectangle {
  constructor(w, h) {
    if(w > 1 && h > 1) {
      this.width = w;
      this.height = h;
    }
  }
  print = () => {
    for(let i = 1; i <= this.height; i++){
      for(let j = 1; j <= this.width; j++){
        console.log('X');
      }
      console.log('\n');
    }
  };
  double = () => {
    for(let i = 1; i <= this.height*2; i++){
      for(let j = 1; j <= this.width*2; j++){
        console.log('X');
      }
      console.log('\n');
      }
    };
  rotate = () => {
    for(let i = 1; i <= this.width*2; i++){
      for(let j = 1; j <= this.height*2; j++){
        console.log('X');
      }
      console.log('\n');
    }
   }
};
