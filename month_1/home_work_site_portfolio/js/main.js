// кнопка запуска видео
const videoInfo = document.querySelector('.info__video');
const videoInfoBtn = document.querySelector('.info__video-btn');

function playVideo() {
  videoInfo.play();
  videoInfoBtn.style.display = 'none';
}

// кнопка бургер меню
const btnMenu = document.querySelector('.header__burger-btn ');
const listMenu = document.querySelector('.header__nav-inner');

btnMenu.addEventListener('click', function () {
  listMenu.classList.toggle('open');
});

// кнопка login
const loginBtn = document.querySelector('.login__box');
const loginContent = document.querySelector('.settings');

loginBtn.addEventListener('click', function () {
  loginContent.classList.toggle('open');
});
