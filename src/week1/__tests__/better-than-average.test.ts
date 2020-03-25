import { betterThanAverage } from '../better-than-average';

describe('функция better-than-average', () => {
    test('должна вернуть "true", если число больше среднего значения', () => {
        expect(betterThanAverage([1, 5, 3], 4)).toEqual(true);
    });

    test('должна вернуть "false", если число меньше среднего значения', () => {
        expect(betterThanAverage([150, 115, 301], 150)).toEqual(false);
    });

    test('должна вернуть "false", если число равно среднему значению', () => {
        expect(betterThanAverage([4, 6], 5)).toEqual(false);
    });
});
