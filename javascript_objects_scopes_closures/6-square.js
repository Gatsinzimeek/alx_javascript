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
        let row = '';
        for(let b = 1; b <= this.wi; b++){
        row += 'X';
        }
          console.log(row);
      }
    }
    else{
      for(let a = 1; a <= this.he; a++) {
        let row = '';
        for(let b = 1; b <= this.wi; b++) {
        row += 'C';
        }
          console.log(row);
      }
    }
  }
};

module.exports = square;
