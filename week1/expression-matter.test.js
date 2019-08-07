const assert = require('assert');
const expressionMatter = require('./expression-matter');

assert.strictEqual(expressionMatter(1, 5, 3), 18);
assert.strictEqual(expressionMatter(1, 1, 1), 3);
assert.strictEqual(expressionMatter(1, 2, 3), 9);
