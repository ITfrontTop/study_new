// import printMyName from './moduleOne.mjs';
// // може использовать другие название переменных експортированного файла
// printMyName();
// чтобы переименувать переменную нужно использовать as:
// one as oneRenamed

import { sum, mult as multNumbers } from './moduleOne.mjs';
import { one as oneRenamed, two } from './moduleOne.mjs';

console.log(oneRenamed);
console.log(two);

console.log(sum(10, 2));
console.log(multNumbers(10, 2));
