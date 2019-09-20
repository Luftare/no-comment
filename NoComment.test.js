const DotComment = require('./NoComment');

const ALPHABETS = 'abcdefghiklmnopqrstuvwxyzåäö'.split('');
const UPPERCASE_ALPHABETS = ALPHABETS.map(letter => letter.toUpperCase());

describe('noComment', () => {
  let dotComment;

  beforeEach(() => {
    dotComment = new DotComment();
  });

  it('knows all alphabets', () => {
    ALPHABETS.forEach(letter => {
      expect(dotComment[letter]).toBeDefined();
    });
  });

  it('knows all uppercase alphabets', () => {
    UPPERCASE_ALPHABETS.forEach(letter => {
      expect(dotComment[letter]).toBeDefined();
    });
  });

  it('knows undescore', () => {
    expect(dotComment._).toBeDefined();
  });

  it('substitutes underscore with space', () => {
    const { text } = dotComment.a._.z;

    expect(text).toEqual('a z');
  });

  it('knows question mark', () => {
    const { text } = dotComment.W.h.a.t.qst();

    expect(text).toEqual('What?');
  });

  it('knows exclamation mark', () => {
    const { text } = dotComment.H.e.l.l.o.exc();

    expect(text).toEqual('Hello!');
  });

  it('knows dot', () => {
    const { text } = dotComment.H.e.l.l.o.dot();

    expect(text).toEqual('Hello.');
  });

  it('knows comma', () => {
    const { text } = dotComment.H.e.l.l.o.com().W.o.r.l.d;

    expect(text).toEqual('Hello,World');
  });

  it('can chain letters', () => {
    const comment = dotComment.S.o.m.e.t.h.i.n.g;

    expect(comment).toBeDefined();
  });

  it('can add any character', () => {
    const { text } = dotComment.$(':').$(')');

    expect(text).toEqual(':)');
  });

  it('can freeze comment', () => {
    const comment = dotComment.H.e.l.l.o.freeze();

    const extendFrozenComment = () => {
      comment._.com().W.o.r.l.d;
    };

    expect(comment.text).toEqual('Hello');
    expect(extendFrozenComment).toThrow(TypeError);
  });

  it('can clear comment', () => {
    const { text } = dotComment.h.e.l.l.o.clear();

    expect(text).toEqual('');
  });
});
