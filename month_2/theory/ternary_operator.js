// Условие ? Выражение : Выражение 2
const value = 11;
value ? console.log('Условие истинно') : console.log('Условие ложно');

const value1 = 11;
const value2 = 25;
value1 && value2 ? myFunction(value1, value2) : myFunction2();

let value3 = 11;
console.log(value3 >= 0 ? value3 : -value3);

value3 = -5;
const res = value >= 0 ? value : -value;
console.log(res);
