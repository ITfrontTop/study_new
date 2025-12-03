// Генератор випадкових цитат
function randomText(n) {
  const words = [
    'abandon',
    'hip',
    'rug',
    'vaguely',
    'wide',
    'toe',
    'damn',
    'crap',
    'shit',
    'upchuck',
    'asshole',
    'bubby',
    'wriggly',
    'yaps',
    'giggle',
    'denouement',
    'petrichor',
    'phosphenes',
    'serendipity',
    'Gerrymandering',
    'your'
  ];
  const newWords = [];
  for (let i = 0; i <= n; i++) {
    newWords.push(words[Math.floor(Math.random() * 20 + 1)]);
  }
  return newWords.join(' ');
}

// кількість слів
randomText(10);

// 1. Унікальні значення масиву
