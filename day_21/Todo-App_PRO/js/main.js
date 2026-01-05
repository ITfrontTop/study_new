const allBtn = document.querySelector('.all__btn');
const doneBtn = document.querySelector('.done__btn');
const list = document.querySelector('.list');
const done = document.querySelector('.done');

const itemText = document.querySelector('.list__item-text');
itemText.contentEditable = 'true';

// if we click this button added class active on .list and .all__btn
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
