const body = document.querySelector('body');
const btnDefault = document.querySelector('.btn__default');
const btnLight = document.querySelector('.btn__light');
const btnDark = document.querySelector('.btn__dark');

const itemBox = document.querySelector('.todo__items-box');
const itemText = document.querySelector('.todo__text');

const doBtn = document.querySelector('.todo__do');
const deleteBtn = document.querySelector('.todo__delete');

let mode = 'default';

btnDefault.addEventListener('click', () => {
  if (mode === 'light' || mode === 'dark') {
    mode = 'default';
    body.removeAttribute('class');
  }
});

btnLight.addEventListener('click', () => {
  if (mode === 'default' || mode === 'dark') {
    mode = 'light';
    body.className = 'light-mode';
  }
});

btnDark.addEventListener('click', () => {
  if (mode === 'default' || mode === 'light') {
    mode = 'dark';
    body.className = 'dark-mode';
  }
});

// кнопки выполнено и удаление
itemBox.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('.todo__delete');

  if (!deleteBtn) return;

  const itemTodo = event.target.closest('.todo__item');
  itemTodo.remove();
});

itemBox.addEventListener('click', (event) => {
  const doBtn = event.target.closest('.todo__do');
  if (!doBtn) return;
  const todoText = event.target.closest('.button__box').previousElementSibling;
  todoText.classList.toggle('do');
});
