const assert = require('assert');
const balancedNumber = require('./balanced-number');

assert.strictEqual(
    balancedNumber(15060),
    'Balanced'
);

assert.strictEqual(
    balancedNumber(150660),
    'Balanced'
);

assert.strictEqual(
    balancedNumber(550660),
    'Not balanced'
);

assert.strictEqual(
    balancedNumber(55060),
    'Not balanced'
);

assert.strictEqual(
    balancedNumber(6),
    'Balanced'
);
