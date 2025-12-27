class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }

  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
}

const firstComment = new Comment('First comment');
console.log(firstComment);

firstComment instanceof Comment; // true
firstComment instanceof Object; // true

firstComment.upvote();
console.log(firstComment.votesQty);
firstComment.upvote();
console.log(firstComment.votesQty);

const secondComment = new Comment('Second comment');
const thirdComment = new Comment('Third comment');

Comment.mergeComments('my', 'comment');

class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0);
  }
}

const myArray = new NumbersArray(2, 5, 7);

console.log(myArray);
myArray.sum();
