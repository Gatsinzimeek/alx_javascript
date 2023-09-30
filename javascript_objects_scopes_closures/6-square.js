const Square = require('./5-square.js');
class square extends Square {
  constructor(num) {
    super(num)
      this.he = num;
      this.wi = num;
    }
  charPrint = (c) => {
    if(c === undefined){
      for(let a = 1; a <= this.he; a++){
        for(let b = 1; b <= this.wi; b++){
          console.log('X');
        }
          console.log('\n');
      }
    }
    else{
      for(let a = 1; a <= this.he; a++) {
        for(let b = 1; b <= this.wi; b++) {
          console.log('C');
        }
        console.log('\n');
      }
    }
  }
};

module.exports square;
