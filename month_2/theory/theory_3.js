// мутация в js
const a = 10;

let b = a;

b = 30;

console.log(a);
console.log(b);

// мутация объекта на который ссылается переменная (ссылочный тип)
const person = {
  name: 'Bob',
  age: 21
};

person.age = 22;
person.isAdult = true;

console.log(person.age);
console.log(person.isAdult);

// мутирование копий
const person2 = {
  name: 'Bob',
  age: 25
};

const person3 = person2;

person3.age = 26;
person3.isAdult = true;

console.log(person2.age);
console.log(person2.isAdult);

// избежать мутации объекта
// вариант 1 (не копирует вложенные объекты)
const person4 = {
  name: 'Bob',
  age: 25
};

const person5 = Object.assign({}, person4);

person5.age = 26;

console.log(person5.age);
console.log(person4.age);

// вариант 2 (не копирует вложенные объекты)
const person6 = {
  name: 'Bob',
  age: 25
};

const person7 = { ...person };

person7.name = 'Alice';

console.log(person7.name);
console.log(person6.name);

// вариант 3 (полностью избежения мутаций)
const person8 = {
  name: 'Bob',
  age: 25
};

const person9 = JSON.parse(JSON.stringify(person8));

console.log(person8.name);
console.log(person9.name);
