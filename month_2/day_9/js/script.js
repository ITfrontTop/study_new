const text = document.querySelector('.text');
const number = document.querySelector('.number');
const btn = document.querySelector('.btn');

function randomNumber() {
  // рандомне число
  let numberRandom = Math.floor(Math.random() * 10 + 1);
  return numberRandom;
}

btn.addEventListener('click', function () {
  const valueRandom = randomNumber();
  const yourValue = +number.value;

  if (valueRandom === yourValue) {
    text.textContent = 'You win!!!';
  } else {
    text.textContent = 'You lose(';
  }

  number.value = '';
});
