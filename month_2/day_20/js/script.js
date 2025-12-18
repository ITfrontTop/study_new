// const button = document.querySelector('.button');
// const check = document.querySelector('.check');
// const main = document.querySelector('.main');
// const header = document.querySelector('.header');

// button.addEventListener('click', function () {
//   main.classList.toggle('night');
//   header.classList.toggle('night');
//   button.classList.toggle('night');
//   check.classList.toggle('night');
// });

const body = document.querySelector('body');
const button = document.querySelector('.button');
let mode = 'light';

if (!localStorage.getItem('mode')) {
  localStorage.setItem('mode', mode);
} else {
  mode = localStorage.getItem('mode');
}

if (mode === 'dark') {
  changeToggle(mode);
}

button.addEventListener('click', () => {
  if (mode === 'light') {
    changeToggle('dark');
  } else {
    changeToggle('light');
  }
  localStorage.setItem('mode', mode);
});

function changeToggle(newMode) {
  if (newMode === 'dark') {
    body.className = 'dark-mode';
    mode = 'dark';
  } else {
    body.className = '';
    mode = 'light';
  }
}
