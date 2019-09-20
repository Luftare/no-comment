class NoComment {
  constructor() {
    this.rawText = '';
  }

  get text() {
    return this.rawText; //.replace(/_/g, ' ');
  }

  $(character) {
    this.rawText += character;
    return this;
  }
}

const alphabets = 'abcdefghiklmnopqrstvwxyzåäö'.split('');
const upperCaseAlphabets = alphabets.map(letter => letter.toUpperCase());
const specialCharacters = ['_'];
const characters = [...alphabets, ...upperCaseAlphabets, ...specialCharacters];

characters.forEach(character => {
  Object.defineProperty(NoComment.prototype, character, {
    get() {
      return this.$(character);
    },
  });
});

const characterMethodPairs = [
  ['qst', '?'],
  ['exc', '!'],
  ['dot', '.'],
  ['com', ','],
];

characterMethodPairs.forEach(([methodName, character]) => {
  NoComment.prototype[methodName] = function() {
    return this.$(character);
  };
});

module.exports = NoComment;
