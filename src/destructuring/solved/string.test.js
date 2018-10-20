// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!
const assert = require("chai").assert;

describe('11: Destructuring also works on strings', () => {
  it('destructure every character, just as if the string was an array', () => {
    let [a, b, c] = 'abc';
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    const [a, b, c] = 'ac';
    assert.equal(c, void 0);
  });
  it('unicode character work too', () => {
    const [space, coffee] = ' ☕';
    assert.equal(coffee, '\u{2615}');
  });
});
