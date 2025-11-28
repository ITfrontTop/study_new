// Написати міні-калькулятор: + - * /
const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const value3 = document.querySelector('.value3');
const value4 = document.querySelector('.value4');
const btn = document.querySelector('.btn');

let result = 0;

btn.addEventListener('click', function () {
  let result = 0;

  console.log(value2.value);

  switch (value2.value) {
    case '+':
      result = Number(value1.value) + Number(value3.value);
      break;
    case '-':
      result = Number(value1.value) - Number(value3.value);
      break;
    case '*':
      result = Number(value1.value) * Number(value3.value);
      break;
    case '/':
      result = Number(value1.value) / Number(value3.value);
      break;
    default:
      result = 'Введите данные для подсчета';
  }

  value4.value = result;

  console.log(Number(value1.value), value2.value, Number(value3.value));
});

// Розрахунок відсотків (напр. 20% від числа)
const value5 = document.querySelector('.value5');
const value6 = document.querySelector('.value6');
const btn2 = document.querySelector('.btn2');
const value7 = document.querySelector('.value7');

btn2.addEventListener('click', function () {
  const equalPercent = +value5.value * (+value6.value / 100);
  value7.value = equalPercent;
});
