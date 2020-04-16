import { bestPlaces } from '../garbage-bomb';

describe('функция bestPlaces', () => {
    test('должна работать на базовых тестах', () => {
        expect(
            bestPlaces([
                [0, 0, 1],
                [0, 0, 0],
                [1, 0, 0],
            ]),
        ).toEqual(1);

        expect(
            bestPlaces([
                [0, 0, 2],
                [0, 0, 0],
                [1, 0, 0],
            ]),
        ).toEqual(1);

        expect(
            bestPlaces([
                [0, 0, 0],
                [0, 0, 0],
                [1, 0, 0],
            ]),
        ).toEqual(4);

        expect(
            bestPlaces([
                [0, 0, 0],
                [0, 1, 1],
                [0, 0, 0],
            ]),
        ).toEqual(6);

        expect(
            bestPlaces([
                [1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1],
            ]),
        ).toEqual(8);
    });
});
