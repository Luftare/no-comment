# No Comment

As we all know, writing comments is bad. NoComment will overcome this by allowing you to write code that describes itself without having to write a single comment.

#### Contents

<ul>
  <li><a href="#demo">Demo</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#examples">Examples</a></li>
  <li><a href="#how-to-contribute">How to contribute</a></li>
</ul>

<div id="demno"></div>

## Demo

Old way...

```javascript
// We want to tilt the browser!

while (1) {
  console.log(123);
}
```

We can do better. Let's bring in the NoComment:

```javascript
import NoComment from 'NoComment';

const {
  text: tiltBrowserComment,
} = new NoComment().W.e._.w.a.n.t._.t.o._.t.i.l.t._.t.h.e._.b.r.o.w.s.e.r.exc();

while (1) {
  console.log(123);
}
```

Not a single comment and still 100% comprehensible code. As an extra benefit the comment text will be accessible as a string.

<div id="api"></div>

## API

### NoComment class

`NoComment` class does not take any arguments.

```javascript
const comment = new NoComment();
```

### NoComment instance

#### Properties

| property | type      | description                    |
| -------- | --------- | ------------------------------ |
| a ... ö  | NoComment | writes corresponding character |
| A ... Ö  | NoComment | writes corresponding character |
| \_       | NoComment | writes space                   |

#### Methods

| method | arguments | return type | description                       |
| ------ | --------- | ----------- | --------------------------------- |
| \$     | string    | NoComment   | writes custom string              |
| qst    |           | NoComment   | writes '?'                        |
| exc    |           | NoComment   | writes '!'                        |
| dot    |           | NoComment   | writes '.'                        |
| com    |           | NoComment   | writes ','                        |
| freeze |           | NoComment   | disables modifying of the comment |

<div id="examples"></div>

## Examples

#### Basic use

```javascript
const {
  text: helloWordComment,
} = new NoComment().H.e.l.l.o.com()._.W.o.r.l.d.dot();

console.log(helloWorldComment);
```

Above code will yield `Hello, world.`

#### Extending comment

```javascript
const comment = new NoComment().S.o.m.e.t.h.i.n.g;

new NoComment().L.a.t.e.r
  .dot()
  .dot()
  .dot();

comment._.S.o.m.e.t.h.i.n.g._.e.l.s.e;
```

#### Freesing comment

```javascript
const comment = new NoComment().F.i.n.a.l._.n.o.t.e.freeze();

new NoComment().B.e.l.o.w._.t.h.r.o.w.s._.T.y.p.e.E.r.r.o.r.exc();
comment._.t.r.i.e.s._.t.o._.c.o.n.t.i.n.u.e;
```

<div id="how-to-contribute"></div>

## How to contribute

Form this repository and make pull request to this master branch.
