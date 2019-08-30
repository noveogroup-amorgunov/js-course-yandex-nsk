const door = require('../killer-garage-door');

describe('дверь', () => {
    describe('без препятствия', () => {
        test('должна открыть дверь', () => {
            const actual = door('P..............');
            const expected = '123455555555555';

            expect(actual).toEqual(expected);
        });

        test('должна открыть дверь и закрыть ее', () => {
            const actual = door('P......P......');
            const expected = '12345554321000';

            expect(actual).toEqual(expected);
        });

        test('должна начать открывать дверь и после клика поставится на паузу', () => {
            const actual = door('P.P..');
            const expected = '12222';

            expect(actual).toEqual(expected);
        });

        test('должна начать открывать дверь, и после двух кликов продолжить действие', () => {
            const actual = door('P.P.P....');
            const expected = '122234555';

            expect(actual).toEqual(expected);
        });
    });

    describe('с препятствием', () => {
        test('должна начать открывать дверь и отменить действие при обнаружении препядствия', () => {
            const actual = door('P.O....');
            const expected = '1210000';

            expect(actual).toEqual(expected);
        });

        test('должна развернуться при открытии (и разрешить паузу)', () => {
            const actual = door('P..OP..P..');
            const expected = '1232222100';

            expect(actual).toEqual(expected);
        });

        test('должна начать открываться и поворачивать, когда есть препятствие', () => {
            const actual = door('..P...O.....');
            const expected = '001234321000';

            expect(actual).toEqual(expected);
        });
    });
});
