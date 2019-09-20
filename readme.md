# No Comment

As we all know, writing comments is bad. NoComment will overcome this by allowing you to write code that describes itself without having to write a single comment.

#### Contents

<ul>
  <li><a href="#example">Example</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#how-to-contribute">How to contribute</a></li>
</ul>

<div id="example"></div>

## Example

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

`NoComment` class does not require any

### NoComment instance

#### Properties

| property | type      | corresponding character |
| -------- | --------- | ----------------------- |
| a ... ö  | NoComment | same as property        |
| A ... Ö  | NoComment | same as property        |
| \_       | NoComment | space                   |

#### Methods

| method | arguments | return type | description                       |
| ------ | --------- | ----------- | --------------------------------- |
| \$     | string    | NoComment   | writes custom string              |
| qst    |           | NoComment   | writes '?'                        |
| exc    |           | NoComment   | writes '!'                        |
| dot    |           | NoComment   | writes '.'                        |
| com    |           | NoComment   | writes ','                        |
| freeze |           |             | disables modifying of the comment |

<div id="how-to-contribute"></div>

## How to contribute

Form this repository and make pull request to this master branch.
