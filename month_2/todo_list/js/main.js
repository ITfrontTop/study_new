const body = document.querySelector('body');
const btnDefault = document.querySelector('.btn__default');
const btnLight = document.querySelector('.btn__light');
const btnDark = document.querySelector('.btn__dark');

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
