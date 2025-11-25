console.log(1234);
console.log('JS Top');
console.log(true);

// Конвертер температури
// Принимаем температуру
const celsius = prompt('Введите температуру в Цельсиях - C');

// Считаем в Фаренгейтах
const fahrenheit = celsius * 1.8 + 32;

// Робимо перевірку і виводимо температуру
if (fahrenheit === 32 || String) {
  alert(`Введите температуру заново`);
} else {
  alert(`${fahrenheit} - температура в Фаренгейтах - F`);
  console.log(fahrenheit);
}
