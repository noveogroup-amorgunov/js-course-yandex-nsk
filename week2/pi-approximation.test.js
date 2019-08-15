const assert = require('assert');
const iterPi = require('./pi-approximation');

assert.deepStrictEqual(iterPi(0.1), [10, 3.0418396189]);
assert.deepStrictEqual(iterPi(0.01), [100, 3.1315929036]);
