// switch за днями тижня
const text = document.querySelector('.text');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const numberWeek = input.value;

  switch (numberWeek) {
    case '1':
      text.textContent = 'Monday';
      break;
    case '2':
      text.textContent = 'Tuesday';
      break;
    case '3':
      text.textContent = 'Wednesday';
      break;
    case '4':
      text.textContent = 'Thursday';
      break;
    case '5':
      text.textContent = 'Friday';
      break;
    case '6':
      text.textContent = 'Saturday';
      break;
    case '7':
      text.textContent = 'Sunday';
      break;
    default:
      text.textContent = 'Enter 1-7 number';
  }

  input.value = '';
});

// switch на вибір напою
const text2 = document.querySelector('.text2');
const input2 = document.querySelector('.input2');
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', function () {
  const numberCocktail = input2.value;

  switch (numberCocktail) {
    case 'yellow':
      text2.textContent = 'Pina colada';
      break;
    case 'orange':
      text2.textContent = 'Manhattan';
      break;
    case 'blue':
      text2.textContent = 'Mimosa';
      break;
    case 'green':
      text2.textContent = 'Mojito';
      break;
    case 'red':
      text2.textContent = 'Bloody Mary';
      break;
    default:
      text2.textContent = 'Enter correct color )';
  }
  input2.value = '';
});
