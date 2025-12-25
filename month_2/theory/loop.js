// for
// for (Начальная инструкция; Условие; Итерационное дейсвие) {
//   // Блок кода, выполняемый на каждой итерации
// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const myArray = ['first', 'second', 'third'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// white
// while (Условие) {
//   // Блок кода, выполняемый на каждой итерации
// }
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// do white
// do {
//   // Блок кода, выполняемый на каждой итерации
// } while (Условие);

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// for in
// используется для объектов
// for (key in Object) {
//   // Действия с каждым свойством объекта
//   // Значения свойства - Object[key]
// }
const myObject = {
  x: 10,
  y: true,
  z: 'abc'
};

for (const key in myObject) {
  console.log(key, myObject[key]);
}

// forEach для перебора свойства объекта
const myObject1 = {
  x: 10,
  y: true,
  z: 'abc'
};

Object.keys(myObject1).forEach((key) => {
  console.log(key, myObject1[key]);
});

Object.values(myObject1).forEach((value) => {
  console.log(value);
});

// for in
const myArray1 = [true, 10, 'abc', null];

for (const key in myArray1) {
  console.log(myArray1[key]);
}

// for of
// можна перебирать любые итерируемые элементы: строки, массивы, но НЕ объекты(объект неитерируемый)
// for (Element of Iterable) {
//   // Действия с определенным элементом
// }

const myString = 'Hey';

for (const letter of myString) {
  console.log(letter);
}

const myArray2 = [true, 10, 'abc', null];

for (const element of myArray) {
  console.log(element);
}

// но лучше использовать forEach
myArray2.forEach((element) => {
  console.log(element);
});
