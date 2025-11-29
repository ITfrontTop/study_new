// 1. Парне чи непарне
const text = document.querySelector('.text');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const number = +input.value;
  console.log(number);

  if (number % 2 === 0) {
    text.textContent = 'It is number is even';
  } else {
    text.textContent = 'It is number is odd';
  }
});

// 2. Максимум із двох чисел
const text1 = document.querySelector('.text1');
const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', function () {
  const value1 = +number1.value;
  const value2 = +number2.value;

  if (value1 > value2) {
    text1.textContent = value1;
  } else if (value1 < value2) {
    text1.textContent = value2;
  } else {
    text1.textContent = 'Рівні';
  }

  number1.value = '';
  number2.value = '';
});

// 3. Податок
const text2 = document.querySelector('.text2');
const sum = document.querySelector('.sum');
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', function () {
  const result = +sum.value;

  if (result < 5000) {
    const percent = (result * 5) / 100;
    text2.textContent = `Податок 5% = ${percent}`;
    sum.value = '';
  } else if (result >= 5000 && result < 20000) {
    const percent = (result * 10) / 100;
    text2.textContent = `Податок 10% = ${percent}`;
    sum.value = '';
  } else if (result >= 20000) {
    const percent = (result * 15) / 100;
    text2.textContent = `Податок 15% = ${percent}`;
    sum.value = '';
  }
});

// 4. Місяць за номером
