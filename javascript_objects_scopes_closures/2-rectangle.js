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