// Методы объекта
const myCity = {
  city: 'New York',
  cityGreeting: function () {
    console.log('Greetings!!!');
  }
};

myCity.cityGreeting();

// Ещё один способ записи метода объекта
const myCity2 = {
  city: 'New York',
  cityGreeting() {
    console.log('Greetings!!!');
  }
};
// вызов метода объекта
myCity2.cityGreeting();

// JSON - javascript object notation
// Формат обмена данными
// {
//   "userId": 1,
//   "id": 1,
//   "title": "Test title",
//   "Status": {
//     "completed": false
//   }
// }
//
// Данные передаються в форме строки
//
// { "userId":1,"id":1,"title":"Test title","Status":{"completed": false}

// чтобы преобразовать json строку в js объект, нужно использовать:
JSON.parse();
// чтобы наоборот преобразовать js объект в json строку нужно использовать:
JSON.stringify();
