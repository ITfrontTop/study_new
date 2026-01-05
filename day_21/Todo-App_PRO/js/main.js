// import { data } from './module/data';
const body = document.querySelector('body');

const themeText = document.querySelector('.theme__text');
const themeBtn = document.querySelector('.theme__btn');

const allBtn = document.querySelector('.all__btn');
const doneBtn = document.querySelector('.done__btn');
const list = document.querySelector('.list');
const done = document.querySelector('.done');

const itemText = document.querySelector('.list__item-text');
// edit text
itemText.contentEditable = 'true';

// change theme
let mode = 'light';
let textMode = 'dark';
console.log(themeText.textContent);
themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (textMode === 'dark') {
    themeText.textContent = 'light';
    textMode = 'light';
  } else {
    themeText.textContent = 'dark';
    textMode = 'dark';
  }
});

// if we click this button added class active on .all__btn and .list; .doneBtn and done
function addActiveClass(btn, item) {
  btn.classList.add('active');
  item.classList.add('active');
}

function removeActiveClass(btn, item) {
  btn.classList.remove('active');
  item.classList.remove('active');
}

allBtn.addEventListener('click', () => {
  addActiveClass(allBtn, list);
  removeActiveClass(doneBtn, done);
});

doneBtn.addEventListener('click', () => {
  addActiveClass(doneBtn, done);
  removeActiveClass(allBtn, list);
});

// проверить
// console.log(data);
