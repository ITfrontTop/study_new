const fnWithError = () => {
  throw new Error('Some error');
};

try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}

console.log('Continue...');

/*
  try {
    // Выполнение блока кода
  } catch (error) {
    // Этот блок выполняется в случае возникновение ошибок в блоке try
  }
*/
