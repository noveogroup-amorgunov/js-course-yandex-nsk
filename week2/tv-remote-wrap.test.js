const assert = require('assert');
const tvRemote = require('./tv-remote-wrap');

assert.strictEqual(tvRemote('Code Wars'), 49);

assert.strictEqual(tvRemote('bbbbb'), 6);
assert.strictEqual(tvRemote('does'), 16);
assert.strictEqual(tvRemote('your'), 21);
assert.strictEqual(tvRemote('solution'), 33);
assert.strictEqual(tvRemote('work'), 18);
assert.strictEqual(tvRemote('for'), 12);
assert.strictEqual(tvRemote('these'), 27);
assert.strictEqual(tvRemote('words'), 23);

assert.strictEqual(tvRemote('DOES'), 19);
assert.strictEqual(tvRemote('YOUR'), 22);
assert.strictEqual(tvRemote('SOLUTION'), 34);
assert.strictEqual(tvRemote('WORK'), 19);
assert.strictEqual(tvRemote('FOR'), 15);
assert.strictEqual(tvRemote('THESE'), 28);
assert.strictEqual(tvRemote('WORDS'), 24);

assert.strictEqual(tvRemote('Does'), 28);
assert.strictEqual(tvRemote('Your'), 33);
assert.strictEqual(tvRemote('Solution'), 45);
assert.strictEqual(tvRemote('Work'), 26);
assert.strictEqual(tvRemote('For'), 20);
assert.strictEqual(tvRemote('These'), 35);
assert.strictEqual(tvRemote('Words'), 31);

assert.strictEqual(tvRemote(' 9qGCjy6nkaNGp dULC dM@CmS'), 159);
