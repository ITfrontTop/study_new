const text = document.querySelector('.text');
const number = document.querySelector('.number');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const numberValue = +number.value;
  text.innerHTML = `
    ${numberValue} * 1 = ${numberValue * 1} </br>
    ${numberValue} * 2 = ${numberValue * 2} </br>
    ${numberValue} * 3 = ${numberValue * 3} </br>
    ${numberValue} * 4 = ${numberValue * 4} </br>
    ${numberValue} * 5 = ${numberValue * 5} </br>
    ${numberValue} * 6 = ${numberValue * 6} </br>
    ${numberValue} * 7 = ${numberValue * 7} </br>
    ${numberValue} * 8 = ${numberValue * 8} </br>
    ${numberValue} * 9 = ${numberValue * 9} </br>
  `;
  number.value = '';
});
