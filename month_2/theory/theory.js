// Код з видеокурса
const myCity = {
  city: 'New York',
  popular: true,
  country: 'USA'
};

const myCity2 = {
  popular: true,
  country: 'USA',
  city: 'New York'
};

console.log(myCity === myCity2);

console.log(myCity.city);

console.log(myCity.popular);

// Замена свойства
const myCity3 = {
  city: 'New York'
};

myCity3.city = 'Las Vegas';
console.log(myCity3);

// Добавления свойства
myCity3.popular = true;
console.log(myCity3);

myCity3.country = 'USA';
console.log(myCity3);

// Удаления свойств объекта
const myCity4 = {
  city: 'New York',
  popular: true,
  country: 'USA'
};

delete myCity4.country;
console.log(myCity4);

// Добавления свойств с помощью []
const myCity5 = {
  city: 'New York'
};

// Добавляем когда нужно прописать свойство
myCity5['popular'] = true;
console.log(myCity);

// Добавляем свойства в форме переменной с помощью []
const countryPropertyName = 'country';
myCity5[countryPropertyName] = 'USA';
console.log(myCity5);

// Вложенные свойства объекта
const myCity6 = {
  city: 'New York',
  info: {
    isPopular: true,
    country: 'USA'
  }
};

console.log(myCity6.info.isPopular);
delete myCity6.info['isPopular'];
console.log(myCity6);

// Использование переменных при формировании объекта
const name = 'Bogdan';
const postsQty = 23;

const userProfile = {
  name: name,
  postsQty: postsQty,
  hasSignedAgreement: false
};

// Если название свойства и переменной совпадают можна просто сокращать оставляя просто одно слово, можна сокращать
// И сокращенные свойства рекомендуется размещать в начале объекта

const userProfile1 = {
  name,
  postsQty,
  hasSignedAgreement: false
};
