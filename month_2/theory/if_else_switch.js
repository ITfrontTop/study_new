// let val = 10;

// if (val > 5) {
//   val += 20;
// }

// console.log(val);

// const person = {
//   age: 20
// };

// if (!person.name) {
//   console.log('Имя не указано');
// }

// console.log(!person.name);

// if (true) {
//   // Блок кода, выполняемый однократно, если условия правдиво
// } else {
//   //  Блок кода, выполняемый однократно, если условия ложно
// }

// let val1 = 10;

// if (val1 < 5) {
//   val1 += 20;
// } else {
//   val1 -= 20;
// }

// console.log(val1);

// const age = 25;

// if (age > 18) {
//   console.log('Is adult');
// } else if (age >= 12) {
//   console.log('Is teenager');
// } else {
//   console.log('Is child');
// }

const sumPositiveNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'One of the arguments is not a number';
  }

  if (a <= 0 || b <= 0) {
    return 'Numbers are not positive';
  }

  return a + b;
};

console.log(sumPositiveNumbers(5, true));

// switch
