// operators
let a, b;
a = 10;
b = a;

let c = a + b;

console.log(c);
// ...
const button = {
  width: 200,
  text: 'Buy'
};

const redButton = {
  ...button,
  color: 'red'
};
console.table(redButton);

const buttonInfo = {
  text: 'Buy'
};

const buttonStyle = {
  color: 'yellow',
  width: 200,
  height: 300
};

const button1 = {
  ...buttonInfo,
  ...buttonStyle
};

console.table(button1);
