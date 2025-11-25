// Написати міні-калькулятор: + - * /
// Розрахунок відсотків (напр. 20% від числа)

// берем елементи
const input = document.querySelector('.input');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const tree = document.querySelector('.tree');
const multiply = document.querySelector('.multiply');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const divide = document.querySelector('.divide');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const minus = document.querySelector('.minus');
const dot = document.querySelector('.dot');
const zero = document.querySelector('.zero');
const equals = document.querySelector('.equals');
const plus = document.querySelector('.plus');
const ac = document.querySelector('.ac');
const percent = document.querySelector('.percent');

// берем данные с input
// equals.addEventListener('click', function () {
//   const inputData = input.value;
//   console.log(inputData, typeof inputData);
// });

// Общая переменная для вывода в input
let valueDisplay = '';
let plusDisplay = 0;
let result = 0;

// Добавляєм кнопку 1
one.addEventListener('click', function () {
  valueDisplay = valueDisplay + '1';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку 2
two.addEventListener('click', function () {
  valueDisplay = valueDisplay + '2';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку 3
tree.addEventListener('click', function () {
  valueDisplay = valueDisplay + '3';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку 4
four.addEventListener('click', function () {
  valueDisplay = valueDisplay + '4';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку 5
five.addEventListener('click', function () {
  valueDisplay = valueDisplay + '5';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку 6
six.addEventListener('click', function () {
  valueDisplay = valueDisplay + '6';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку 7
seven.addEventListener('click', function () {
  valueDisplay = valueDisplay + '7';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку 8
eight.addEventListener('click', function () {
  valueDisplay = valueDisplay + '8';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку 9
nine.addEventListener('click', function () {
  valueDisplay = valueDisplay + '9';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку 0
zero.addEventListener('click', function () {
  valueDisplay = valueDisplay + '0';
  input.value = valueDisplay;
  console.log(valueDisplay);
  console.log(typeof valueDisplay);
});

// Добавляєм кнопку multiply (помножити)
multiply.addEventListener('click', function () {
  valueDisplay = valueDisplay + '*';
  input.value = valueDisplay;
  console.log(valueDisplay);
});

// Добавляєм кнопку plus (плюс)
plus.addEventListener('click', function () {
  plusDisplay = +valueDisplay + plusDisplay;
  // чистим дисплей
  valueDisplay = '';
});

// Добавляєм кнопку equals (дорівнює)
equals.addEventListener('click', function () {
  // Додається правильно, зробити для множення и ділення
  result = +valueDisplay + plusDisplay;

  input.value = result;
  console.log(result);
});
