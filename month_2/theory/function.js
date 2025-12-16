// function
let a = 5;
let b = 3;

let c;

function sum(a, b) {
  const c = a + b;
  console.log(c);
}

sum(a, b);

a = 8;
b = 12;

sum(a, b);

function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

myFn(10, 3);

function myFn1() {}
myFn1();

// в качестве аргумента передаем объект
const personOne = {
  name: 'Bob',
  age: 21
};

function increasePersonAge(person) {
  person.age += 1;
  return person;
}

increasePersonAge(personOne);
console.log(personOne.age);

// не можна изменять оригинал объекта в функции чтобы не мутировал оригинальный объект, нужно внутри сделать копию и потом изменять копию
const personOne1 = {
  name: 'Bob',
  age: 21
};

function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, person);
  updatedPerson.age += 1;
  return updatedPerson;
}

const updatedPersonOne = increasePersonAge(personOne1);
console.log(personOne.age);
console.log(updatedPersonOne.age);
