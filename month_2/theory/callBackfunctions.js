function printMyName() {
  console.log('Bogdan');
}

console.log('Start');

setTimeout(printMyName, 2000);

// область видимости
let a = 11111;
let b = 22222;

function myFn() {
  let b;
  a = true;
  b = 10;
  console.log(b);
}

myFn();

console.log(a);
console.log(b);

let f = 5;
function myFnNew() {
  function innerFn() {
    console.log(f);
  }
  innerFn();
}

myFnNew();
