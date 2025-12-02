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
  const randomNumber = [];
}
// 6 - це кількість символів пароля
randomPassword(6);
