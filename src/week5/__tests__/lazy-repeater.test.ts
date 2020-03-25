import { makeLooper } from '../lazy-repeater';

describe('функция lazy-repeater', () => {
    test('должна циклично перебирать символы в строке ', () => {
        const abc = makeLooper('abc');

        expect(abc()).toEqual('a');
        expect(abc()).toEqual('b');
        expect(abc()).toEqual('c');
        expect(abc()).toEqual('a');
    });
});
