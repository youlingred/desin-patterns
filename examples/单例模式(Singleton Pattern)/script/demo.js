const SingleObject= require('./SingleObject')

const obj1= SingleObject.instance;
const obj2= SingleObject.instance;
console.log(obj1.name);
console.log(obj2.name);
obj1.name='obj1';
console.log(obj1.name);
console.log(obj2.name);

console.log(obj1 === obj2);
