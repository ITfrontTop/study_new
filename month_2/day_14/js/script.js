// Генератор випадкових цитат
function randomText(n) {
  const words = [
    'abandon',
    'hip',
    'rug',
    'vaguely',
    'wide',
    'toe',
    'damn',
    'crap',
    'shit',
    'upchuck',
    'asshole',
    'bubby',
    'wriggly',
    'yaps',
    'giggle',
    'denouement',
    'petrichor',
    'phosphenes',
    'serendipity',
    'Gerrymandering',
    'your'
  ];
  const newWords = [];
  for (let i = 0; i <= n; i++) {
    newWords.push(words[Math.floor(Math.random() * 20 + 1)]);
  }
  return newWords.join(' ');
}

// кількість слів
randomText(10);

// 1. Унікальні значення масиву
function unique(arr) {
  const uniqueArray = new Set(arr);
  return uniqueArray;
}

unique([1, 2, 3, 2, 1, 4, 5, 4, 6]);

// 2. Фільтр масиву на парні числа
function pairedNumbers(arr) {
  const pair = [];
  for (let item of arr) {
    if (item % 2 === 0) pair.push(item);
  }
  return pair;
}

pairedNumbers([2, 3, 5, 6, 7, 8, 1, 3, 10]);

// 3. Сортування масиву вручну
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let buffer = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = buffer;
      }
    }
  }

  return arr;
}

bubbleSort([2, 5, 4, 3, 1, 6]);

// 4. Порахувати кількість слів у рядку
function numberWord(str) {
  const arrayStr = str.split(' ');
  return arrayStr.length;
}

numberWord('Я люблю програмувати в JavaScript');

// 5. Пошук елемента у масиві
function findIndex(arr, value) {
  return arr.indexOf(value);
}

findIndex([1, '3', 'qwer', 3], '8');

// 6. Перевірка паліндрома
function palindrome(str) {
  const lower = str.toLowerCase();
  const arrayStr = Array.from(lower);
  const arrayStrRevers = arrayStr.reverse();

  if (lower === arrayStrRevers.join('')) {
    return true;
  } else {
    return false;
  }
}

palindrome('Hello');

// 7. Найчастіший символ у рядку
function repeatable(str) {
  const items = {};
  let count = 0;
  let itemMax = '';

  for (const item of str) {
    items[item] = (items[item] || 0) + 1;

    if (items[item] > count) {
      count = items[item];
      itemMax = item;
    }
  }
  return itemMax;
}

repeatable('hello');

// 8. Інвертувати масив вручну
function reverseItem(arr) {
  const reverseArray = [];
  for (let i = 0; (i = arr.length); i++) {
    reverseArray.push(arr.pop(arr[i]));
  }
  return reverseArray;
}

reverseItem(['hello', 1, 3, 4, 5, true]);

// 9. Об’єднати два масиви вручну
function concatNew(arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    newArray.push(arr2[j]);
  }

  return newArray;
}

concatNew(['hello', 2], [3, 6, 'world']);

// 10. Перетворити об’єкт у масив пар ключ–значення
function objOnArr(obj) {
  const arrKeysValue = Object.entries(obj);
  return arrKeysValue;
}
objOnArr({ a: 1, b: 2 });

// 11. Знайти суму всіх чисел у вкладеному масиві
function sum(arr) {
  let num = 0;
  const newArray = arr.flat(Infinity);
  newArray.forEach((element) => {
    num = num + element;
  });
  return num;
}

sum([1, [2, [4], 3], [4, [5]]]);

// 12. Розвернути кожне слово в реченні
function reverseWord(str) {
  const arrayStr = str.split(' ');
  let arrayNew = [];
  for (let i = 0; i < arrayStr.length; i++) {
    const arrItem = Array.from(arrayStr[i]);
    const newWord = arrItem.reverse().join('');
    arrayNew.push(newWord);
  }
  return arrayNew.join(' ');
}

reverseWord('hello world');

// 13. Видалити всі пробіли в рядку
function deleteSpace(str) {
  const arrayStr = Array.from(str);
  let items = [];
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] !== ' ') items.push(arrayStr[i]);
  }
  return items.join('');
}

deleteSpace(' I love JS');

// 14. Перевірка — чи є в рядку цифра
function isNumber(str) {
  const arrayStr = Array.from(str);
  const hasNumber = arrayStr.some((item) => !isNaN(parseFloat(item)));
  return hasNumber;
}

isNumber('dgtrgd');

// 15. Перевірити, чи два рядки — анаграми
function anagram(str1, str2) {
  const arr1 = Array.from(str1);
  const arr2 = Array.from(str2);
  const newArray1 = arr1.sort();
  const newArray2 = arr2.sort();
  return JSON.stringify(newArray1) === JSON.stringify(newArray2);
}

anagram('listen', 'silent');

// Дороблюю задачі які задав, і перевіряю щоб не повторювались

// 3. Частота символів
function charFrequency(str) {
  const charItems = {};

  for (const item of str) {
    charItems[item] = (charItems[item] || 0) + 1;
  }
  return charItems;
}
charFrequency('hello');

// 6. Рандомне число в діапазоні
function randomNumberValue(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

randomNumberValue(3, 6);

// 8. Перетворити речення у Capitalized Case
function uppercaseWordInArray(str) {
  const arr = str.split(' ');
  const arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    const arrInLoop = arr[i].split('');
    arrInLoop[0] = arrInLoop[0].toUpperCase();
    arrNew.push(arrInLoop.join(''));
  }
  return arrNew.join(' ');
}
uppercaseWordInArray('привіт світе');

// 11. Перевірити складність пароля
function isStrongPassword(str) {
  const arr = str.split('');

  let countStrongMain = 0;

  if (arr.length >= 8) countStrongMain += 1;

  const countBigLetter = arr.some((item) => /[A-ZА-ЯЁ]/.test(item));

  const countSmallLetter = arr.some((item) => /[a-zа-яё]/.test(item));

  const countNumber = arr.some((item) => /[0-9]/.test(item));

  const countSymbol = arr.some((item) => /[^A-Za-z0-9]/.test(item));

  if (
    countStrongMain > 0 &&
    countBigLetter &&
    countSmallLetter &&
    countNumber &&
    countSymbol
  ) {
    return console.log('Its password strong)');
  } else {
    return console.log('Its password weak(');
  }
}

isStrongPassword('Far47&12R');

// 12. Знайти середнє арифметичне
function average(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return +(sum / arr.length).toFixed(2);
}

average([1, 3, 4, 5, 2, 434]);

// 13. Перетворити число в формат валюти
function toMoney(num) {
  return num.toLocaleString('uk-UA');
}
toMoney(1234567);

// 14. Функція-перевертень числа
function reverseNumber(num) {
  const arr = String(num).split('');
  const newArr = [];
  for (let i = 0; (i = arr.length); i++) {
    newArr.push(arr.pop(i));
  }
  return +newArr.join('');
}

reverseNumber(1234);

// 15. Створити власний split()

function mySplit(str) {
  const arr = Array.from(str);
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = /[^A-Za-z0-9]/.test(arr[i]);
    if (item === false) newArray.push(arr[i]);
  }
  return newArray;
}

mySplit('a,b,c', ',');
