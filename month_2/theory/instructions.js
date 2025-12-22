'abc';

a = a + 3;

c = a + b;

d = 'Good ' + 'Evening';

myFunction(c, d);

console.log('Hey');

function myFn(a) {
  console.log(a);
}

const b = true;
let c = 10;

myFn(2 + 3);
muFn(b);
myFn((c = c + 1));
// error
// myFn(c = c + 1;)
// myFn(let d);
