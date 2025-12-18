setTimeout(() => {
  console.log('Hello!');
}, 2000);

function sayMyName(callback) {
  callback();
}

function myName() {
  console.log('My name is Very!');
}

sayMyName(myName);

function calculate(callback, a, b) {
  console.log(callback(a, b));
}

function sum(a, b) {
  return a + b;
}

calculate(sum, 5, 5);
