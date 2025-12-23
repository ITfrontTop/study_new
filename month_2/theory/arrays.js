const myArray = [1, 2, 3];
console.log(myArray);

const myArray2 = new Array(1, 2, 3);
console.log(myArray2);

const myArray3 = [1, true, 'a'];
console.log(myArray3);
console.log(myArray3[0]);
console.log(myArray3[1]);
console.log(myArray.length);

const myArray4 = [1, 2, 3, 4];
console.log(myArray4);
console.log(myArray4.length);

myArray4[2] = 'abc';

console.log(myArray4);
console.log(myArray4[2]);

myArray4[4] = true;

console.log(myArray4);
console.log(myArray4.length);

const myArray5 = [1, 2, 3];
myArray5.push(4);
myArray5.push(true);
console.log(myArray5);

const myArray6 = [1, 2, 3];
console.log(myArray6);

myArray6.pop();

console.log(myArray6);

const removedElement1 = myArray6.pop();
console.log(myArray6);

console.log(myArray6);
console.log(removedElement1);

const myArray7 = [1, 2, 3];
console.log(myArray7);

myArray7.unshift(true);

console.log(myArray7);

myArray7.unshift('abc');

console.log(myArray7);

const myArray8 = [1, 2, 3];
console.log(myArray8);

myArray8.shift();

console.log(myArray8);

const removedElement = myArray8.shift();

console.log(myArray8);
console.log(removedElement);

const myArray9 = [1, 2, 3];
console.log(myArray9);

myArray9.forEach((el) => console.log(el * 2));

console.log(myArray9);
// оригинальный масив не изменяется

const myArray10 = [1, 2, 3];
const myArray11 = [];

myArray10.forEach((el) => myArray11.push(el * 2));
console.log(myArray11);

const myArray12 = [1, 2, 3];
console.log(myArray12);

const myArray13 = myArray12.map((el) => {
  return el * 3;
});

// const myArray13 = myArray12.map(function (el) {
//   return el * 3;
// });
console.log(myArray13);
console.log(myArray12);
// Оригинальный масив не изменяется
