const balancedNumber = require('../balanced-number');

describe('функция balanced-number', () => {
    test('должна вернуть "Balanced" для сбалансированного числа с нечетным количеством цифр', () => {
        expect(balancedNumber(15060))
            .toEqual('Balanced');
    });

    test('должна вернуть "Balanced" для сбалансированного числа с четным количеством цифр', () => {
        expect(balancedNumber(150660))
            .toEqual('Balanced');
    });

    test('должна вернуть "Not balanced" для несбалансированного числа с четным количеством цифр', () => {
        expect(balancedNumber(550660))
            .toEqual('Not balanced');
    });

    test('должна вернуть "Not balanced" для несбалансированного числа с нечетным количеством цифр', () => {
        expect(balancedNumber(55060))
            .toEqual('Not balanced');
    });

    test('должна вернуть "Balanced" для числа меньше 100', () => {
        expect(balancedNumber(6))
            .toEqual('Balanced');
    });
});
