const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  text.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
  btn.style.display = 'none';
});
