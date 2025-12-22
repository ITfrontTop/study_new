const myFunction = (a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

myFunction(5, 3);

(a) => {
  console.log('1');
};

(a, b) => a + b;

const num = (a, b) => {
  let c = 0;
  return a + b + c;
};

num(3, 4);

// параметри по умолчанию
function multiByFactor(value, multiplier = 1) {
  return value * multiplier;
}

multiByFactor(10, 2);
multiByFactor(5);

function sumValue(a, b = 0) {
  return a - b;
}

const minus = function (a, b = 0) {
  return a - b;
};

const minusArrow = (a, b = 0) => a - b;

sumValue(5, 4);
sumValue(5);

minus(5, 4);
minus(5);

minusArrow(5, 4);
minusArrow(5);

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt
});

const firstPost = {
  id: 1,
  author: 'Bogdan'
};

const newPost1 = (post, addedAt = Date()) => {
  return {
    ...post,
    addedAt
  };
};

console.table(newPost1(firstPost));
