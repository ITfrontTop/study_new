const BD_LOGIN_USER = 'admin';
const BD_PASSWORD_PASSWORD = '1234';

const textLogin = document.querySelector('.textLogin');
const login = document.querySelector('.login');
const textPassword = document.querySelector('.textPassword');
const password = document.querySelector('.password');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const loginUser = login.value;
  const passwordUser = password.value;

  if (loginUser === BD_LOGIN_USER && passwordUser === BD_PASSWORD_PASSWORD) {
    textLogin.textContent = 'You are authorized!!!';
    login.remove();
    textPassword.remove();
    password.remove();
    btn.remove();
    console.log('You are authorized');
  } else {
    textLogin.textContent = 'Enter correct login';
    textPassword.textContent = 'Enter correct password';
    login.style.border = '1px solid red';
    password.style.border = '1px solid red';
  }

  login.value = '';
  password.value = '';
});
