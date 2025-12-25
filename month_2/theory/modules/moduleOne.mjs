// const myName = () => {
//   console.log('Bogdan');
// };

// export default myName;
// // export default означает что мы можем експортировати переменную, в файл который мы експортируем можем использовать под другим именем

const sum = (a, b) => a + b;
const one = 1;
const two = 'two';

const mult = (a, b) => a * b;

export default sum;
export { one, two, sum, mult };
