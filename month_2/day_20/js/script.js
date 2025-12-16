const button = document.querySelector('.button');
const check = document.querySelector('.check');
const main = document.querySelector('.main');
const header = document.querySelector('.header');

button.addEventListener('click', function () {
  main.classList.toggle('night');
  header.classList.toggle('night');
  button.classList.toggle('night');
  check.classList.toggle('night');
});
