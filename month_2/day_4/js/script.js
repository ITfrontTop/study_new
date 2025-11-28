// Делаем переменные
const text = document.querySelector('.text');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const age = input.value;

  if (age < 18) {
    text.textContent = 'You kid )';
  } else if (age >= 18 && age < 55) {
    text.textContent = 'You adult )';
  } else {
    text.textContent = 'You pensioner )';
  }

  input.value = '';
});
