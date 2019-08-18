const iterPi = require('../pi-approximation');

describe('функция pi-approximation', () => {
    test('должна подсчитать PI и количество итеграций с точностью до 0.1', () => {
        expect(iterPi(0.1)).toEqual([10, 3.0418396189]);
    });

    test('должна подсчитать PI и количество итеграций с точностью до 0.01', () => {
        expect(iterPi(0.01)).toEqual([100, 3.1315929036]);
    });
});
