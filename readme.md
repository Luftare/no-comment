# No Comment

As we all know, writing comments is bad. NoComment will overcome this by allowing you to write code that describes itself without having to write a single comment.

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
