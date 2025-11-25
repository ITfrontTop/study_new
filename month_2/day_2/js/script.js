// Калькулятор суми 2 чисел
// Ввод 1 числа
const oneNumber = prompt('Напишіть перше число');
// Ввод 2 числа
const twoNumber = prompt('Напишіть друге число');

// Суммирование
const sum = +oneNumber + +twoNumber;
console.log(typeof oneNumber);
console.log(typeof twoNumber);
console.log(typeof sum);

// Проверка чисел и вывод результата
if (isNaN(sum)) {
  alert('Введите только числа');
} else {
  alert(`Сума чисел = ${sum}`);
}
