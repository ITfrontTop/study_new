// declared function
function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

// function expression
const myFunction = function (a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

myFunction(5, 3);

setTimeout(function () {
  console.log('Отложенное сообщение');
}, 1000);

// arrow function
(a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};
