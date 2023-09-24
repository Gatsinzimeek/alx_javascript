#!/usr/bin/node
class Rectangle{
  constructor(w, h) {
    if(w > 1 && h > 1) {
      this.width = w;
      this.height = h;
    }
  }
};

const r2 = new Rectangle(2,-3);
console.log(r2);
console.log(r2.width);
console.log(r2.height);
<<<<<<< HEAD

console.log(typeof(r2))
=======
>>>>>>> 7e13f91aef1a884801123b1c26860b5145a8e243
