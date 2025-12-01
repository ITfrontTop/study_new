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
const text6 = document.querySelector('.text6');
const word = document.querySelector('.word');
const btn6 = document.querySelector('.btn6');

btn6.addEventListener('click', function () {
  const wordValue = word.value;
  const wordArray = Array.from(wordValue);
  let number = 0;

  for (let i = 0; i < wordArray.length; i++) {
    switch (wordArray[i]) {
      // латиниця
      case 'a':
        number++;
        break;
      case 'e':
        number++;
        break;
      case 'i':
        number++;
        break;
      case 'o':
        number++;
        break;
      case 'u':
        number++;
        break;
      case 'y':
        number++;
        break;
      // кирилиця
      case 'а':
        number++;
        break;
      case 'е':
        number++;
        break;
      case 'и':
        number++;
        break;
      case 'і':
        number++;
        break;
      case 'о':
        number++;
        break;
      case 'у':
        number++;
        break;
      case 'ы':
        number++;
        break;
    }
  }

  text6.textContent = `Word has - ${number} voice letters`;
  word.value = '';
});

// 8. Мінімум у масиві
const numberArray = [7, -3, 0, 12, 5, -9, 4];
let minimalNumber = Infinity;

for (let i = 0; i < numberArray.length; i++) {
  let numberLoop = numberArray[i];
  if (numberLoop < minimalNumber) minimalNumber = numberLoop;
}
console.log(minimalNumber);

// 9. Реверс рядка
const text7 = document.querySelector('.text7');
const word1 = document.querySelector('.word1');
const btn7 = document.querySelector('.btn7');

btn7.addEventListener('click', function () {
  // Беру данные с input
  const wordValue = word1.value;
  // делаю массив
  const wordArray = Array.from(wordValue);
  // переменная для revers
  let reversArray = [];

  for (let i = 0; (i = wordArray.length); i++) {
    const itemReversArray = wordArray.pop();
    reversArray.push(itemReversArray);
  }
  // виводимо данні
  text7.textContent = reversArray.join('');
  // очищаємо input
  word1.value = '';
});

// 10. Функція калькулятора
function calculate(a, b, operator) {
  let result = 0;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      return console.log('Enter correct operator');
  }
  return result;
}

calculate(5, 2, '*');

// Маленький тест (15 питань)
// 1.C
// 2.B про це питання тільки коли перевірив зрозумів;
// 3.D
// 4.C
// 5.B
// 6.C
// 7.C також не знав цього, загуглив
// 8.B
// 9.A
// 10.A
// 11.C
// 12.C
// 13.B
// 14.B
// 15.C

// 10 задач (легкі–середні)
// 1. Чи парне число
