const assert = require('assert');
const betterThanAverage = require('./better-than-average');

assert.strictEqual(
    betterThanAverage([1, 5, 3], 4),
    true
);

assert.strictEqual(
    betterThanAverage([150, 115, 301], 150),
    false
);
