const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

let count = 0;

btn.addEventListener('click', function () {
  count++;
  text.textContent = count;
});
