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
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function sortArray(arr) {
  // let sortArray = [];
  // for (let i = 0; i <= arr.length; i++) {
  //   console.log(arr[i]);
  //   if (arr[i] > arr[i + 1]) sortArray.push(arr[i]);
  //   console.log(arr[i + 1]);
  //   console.log(sortArray);
  // }
}

sortArray([2, 5, 4, 3, 1, 6]);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

// 7. Найчастіший символ у рядку !!!!!!!!!!!!!!!!!!!!!!!!
function repeatable(str) {
  const arrayStr = Array.from(str);
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
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
