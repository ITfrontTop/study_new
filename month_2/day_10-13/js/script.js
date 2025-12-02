// Пошук максимального числа в масиві
function number(arr) {
  let number = 0;
  for (let item of arr) {
    if (item > number) number = item;
  }
  console.log(number);
  return number;
}

number([1, 50, 3, 4, 10, 42, 6, 7, 10]);

// Імітація черги (queue)
function queue(arr) {
  const arrayCopy = arr;

  for (let i = 0; (i = arrayCopy.length); i++) {
    arrayCopy.shift();
    console.log(arrayCopy);
  }
}

queue([1, 4, 6, 3, 15, 616, 'f', 't']);

// Функція isEven()
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(20));

// Функція, що повертає суму масиву
function sumArray(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}

sumArray([1, 4, 15]);

// Функція, що генерує випадковий пароль
function randomPassword(n) {
  const newPassword = [];
  const data = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0'
  ];

  for (let i = 0; i < n; i++) {
    const element = Math.floor(Math.random() * 36 + 1);
    newPassword.push(data[element]);
  }
  console.log(Math.floor(Math.random() * 36 + 1));
  console.log(data);
  console.log(newPassword);
  console.log(newPassword.join(''));
  return newPassword.join();
}
// 6 - це кількість символів пароля, можна вибирати яку завгодно кількість
randomPassword(6);
