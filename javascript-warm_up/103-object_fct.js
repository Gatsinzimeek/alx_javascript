#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject);
myObject.incr = function () {
  const addNew = myObject.value + 1;
  myObject.value = addNew;
};
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
