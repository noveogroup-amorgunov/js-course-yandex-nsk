const expressionMatter = require('../expression-matter');

describe('функция expression-matter', () => {
    test('должна вернуть максимальное значение', () => {
        expect(expressionMatter(1, 5, 3)).toEqual(18);
        expect(expressionMatter(1, 1, 1)).toEqual(3);
        expect(expressionMatter(1, 2, 3)).toEqual(9);
    });
});
