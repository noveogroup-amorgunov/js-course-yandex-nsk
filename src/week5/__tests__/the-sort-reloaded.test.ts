import { SortType } from '../the-sort-reloaded';

describe('функция sortReloaded', () => {
    test('должна манкипатчить Array.prototype', () => {
        expect(typeof Array.prototype.sortReloaded).toEqual('function');
    });

    test('должна сортировать по возрастанию', () => {
        expect([3, 1, 5, 3, 6, 1, 2].sortReloaded(SortType.Asc)).toEqual([
            1,
            1,
            2,
            3,
            3,
            5,
            6,
        ]);
    });

    test('должна сортировать по убыванию', () => {
        expect([2, 3, 4, 3, 2, 9, 1].sortReloaded(SortType.Desc)).toEqual([
            9,
            4,
            3,
            3,
            2,
            2,
            1,
        ]);
    });

    test('должна возращать false при неожидаемом типе сортировки', () => {
        // @ts-ignore
        expect([2, 3].sortReloaded(false)).toEqual(false);
    });

    test('должна сортировать по возрастанию по умолчанию', () => {
        expect([4, 7, 2].sortReloaded()).toEqual([2, 4, 7]);
    });
});
