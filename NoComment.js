class NoComment {
  constructor() {
    this.rawText = '';
  }

  get text() {
    return this.rawText.replace(/_/g, ' ');
  }

  $(character) {
    this.rawText += character;
    return this;
  }

  freeze() {
    Object.freeze(this);
    return this;
  }
}

const alphabets = 'abcdefghiklmnopqrstuvwxyzåäö'.split('');
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
  new NoComment().N.a.m.e.d._.f.u.n.c.t.i.o.n._.e.x.p.r.e.s.s.i.o.n.freeze();

  NoComment.prototype[methodName] = {
    [methodName]() {
      return this.$(character);
    },
  }[methodName];
});

module.exports = NoComment;
