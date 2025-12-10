const userPhoto = document.querySelector('.user-photo');
const userName = document.querySelector('.name');
const userId = document.querySelector('.user-id');
const userPhone = document.querySelector('.user-phone');
const userEmail = document.querySelector('.user-email');
const btn = document.querySelector('.btn');

const user = {
  id: 1,
  name: 'Ola Ola',
  phone: '123412341',
  email: 'useremail@gmail.com',
  photo:
    'https://news.umanitoba.ca/wp-content/uploads/2019/03/IMG_9991-1200x800.jpg'
};

function showInfo() {
  userPhoto.src =
    'https://news.umanitoba.ca/wp-content/uploads/2019/03/IMG_9991-1200x800.jpg';
  userName.textContent = user.name;
  userId.textContent = `User id:${user.id}`;
  userPhone.textContent = user.phone;
  userEmail.textContent = user.email;
  btn.textContent = 'hide info user';
}

btn.addEventListener('click', function () {
  showInfo();
});
