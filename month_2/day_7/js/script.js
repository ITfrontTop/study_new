// 1. Парне чи непарне
const text = document.querySelector('.text');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const number = +input.value;

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
const text3 = document.querySelector('.text3');
const number3 = document.querySelector('.number3');
const btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', function () {
  const numberMonth = number3.value;

  switch (numberMonth) {
    case '1':
      text3.textContent = 'January';
      break;
    case '2':
      text3.textContent = 'February';
      break;
    case '3':
      text3.textContent = 'March';
      break;
    case '4':
      text3.textContent = 'April';
      break;
    case '5':
      text3.textContent = 'May';
      break;
    case '6':
      text3.textContent = 'June';
      break;
    case '7':
      text3.textContent = 'July';
      break;
    case '8':
      text3.textContent = 'August';
      break;
    case '9':
      text3.textContent = 'September';
      break;
    case '10':
      text3.textContent = 'October';
      break;
    case '11':
      text3.textContent = 'November';
      break;
    case '12':
      text3.textContent = 'December';
      break;
    default:
      text3.textContent = 'Enter correct number 1-12';
  }

  number3.value = '';
});

// 5. Таблиця множення
const text4 = document.querySelector('.text4');
const number4 = document.querySelector('.number4');
const btn4 = document.querySelector('.btn4');

btn4.addEventListener('click', function () {
  const numberTable = +number4.value;
  if (numberTable > 10) {
    text4.textContent = 'Enter correct value 1-10';
  } else {
    text4.innerHTML = `
    ${numberTable} * 1 = ${numberTable * 1} <br />
    ${numberTable} * 2 = ${numberTable * 2} <br />
    ${numberTable} * 3 = ${numberTable * 3} <br />
    ${numberTable} * 4 = ${numberTable * 4} <br />
    ${numberTable} * 5 = ${numberTable * 5} <br />
    ${numberTable} * 6 = ${numberTable * 6} <br />
    ${numberTable} * 7 = ${numberTable * 7} <br />
    ${numberTable} * 8 = ${numberTable * 8} <br />
    ${numberTable} * 9 = ${numberTable * 9} <br />
    ${numberTable} * 10 = ${numberTable * 10} <br />
  `;
  }

  number4.value = '';
});

// 6. Сума всіх чисел від 1 до N
const text5 = document.querySelector('.text5');
const number5 = document.querySelector('.number5');
const btn5 = document.querySelector('.btn5');

btn5.addEventListener('click', function () {
  const numberN = +number5.value;
  text5.textContent = `${(numberN * (numberN + 1)) / 2}`;
  number5.value = '';
});

// 7. Підрахунок голосних
