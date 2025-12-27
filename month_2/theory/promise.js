const myPromise = new Promise((resolve, reject) => {
  /*
    выполнение асинхронных действий
    внутри этой функции нужно в результате вызывать одну из функций resolve или reject
  */
});

myPromise
  .then((value) => {
    /*
      Действия в случае успешного исполнение Промиса
      Значение value - это значение, переданное в вызове функции resolve внутри Промиса 
    */
  })
  .catch((error) => {
    /*
      Действия в случае отключения Промиса
      Значения error - это значение, переданное в вызове функции reject внутри Промиса
    */
  });

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

const getData = (url) => {
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );
};

getData('https://jsonplaceholder.typicode.com/todos')
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

// async await
async function asyncFn() {
  // Всегда возвращает Промис
}

const asyncFn1 = async () => {
  // Всегда возвращает Промис
};

const asyncFn2 = async () => {
  return 'Success!';
};

asyncFn2();

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn3 = async () => {
  console.log('Timer starts');
  await timerPromise();
  console.log('Timer ended');
};

asyncFn3();

const asyncFn4 = async () => {
  console.log('Timer start');
  const startTime = performance.now();
  await timerPromise();
  const endTime = performance.now();
  console.log('Timer ended', endTime - startTime);
};

asyncFn4();

const getData1 = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

getData1('https://jsonplaceholder.typicode.com/todos')
  .then((data) => console.log(data))
  .then((error) => console.log(error.message));
//  or
const url = 'https://jsonplaceholder.typicode.com/todos';

try {
  const data = await getData1(url);
  console.log(data);
} catch (error) {
  console.log(error.message);
}
