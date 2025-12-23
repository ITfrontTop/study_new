// деструктуризация объектов
const userProfile = {
  name: 'bogdan',
  commentsQty: 23,
  hasSignedAgreement: false
};

const { name, commentsQty } = userProfile;
const { hasSignedAgreement } = userProfile;

console.log(name);
console.log(commentsQty);

// деструктуризация массивов
const fruits = ['Apple', 'Banana'];

const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne);
console.log(fruitTwo);

// деструктуризация в функциях
const userProfile2 = {
  name: 'bogdan',
  commentsQty: 23,
  hasSignedAgreement: false
};

const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentsQty} comments`;
};

userInfo(userProfile);
