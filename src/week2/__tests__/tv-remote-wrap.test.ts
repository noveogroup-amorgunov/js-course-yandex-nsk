import { tvRemote } from '../tv-remote-wrap';

describe('функция tv-remote-wrap', () => {
    test('должна подсчитать кол-во кликов для слов в нижнем регистре', () => {
        expect(tvRemote('bbbbb')).toEqual(6);
        expect(tvRemote('does')).toEqual(16);
        expect(tvRemote('your')).toEqual(21);
        expect(tvRemote('solution')).toEqual(33);
        expect(tvRemote('work')).toEqual(18);
        expect(tvRemote('for')).toEqual(12);
        expect(tvRemote('these')).toEqual(27);
        expect(tvRemote('words')).toEqual(23);
    });

    test('должна подсчитать кол-во кликов для слов в верхнем регистре', () => {
        expect(tvRemote('DOES')).toEqual(19);
        expect(tvRemote('YOUR')).toEqual(22);
        expect(tvRemote('SOLUTION')).toEqual(34);
        expect(tvRemote('WORK')).toEqual(19);
        expect(tvRemote('FOR')).toEqual(15);
        expect(tvRemote('THESE')).toEqual(28);
        expect(tvRemote('WORDS')).toEqual(24);
    });

    test('должна подсчитать кол-во кликов для слов с строчными и прописными буквами', () => {
        expect(tvRemote('Does')).toEqual(28);
        expect(tvRemote('Your')).toEqual(33);
        expect(tvRemote('Solution')).toEqual(45);
        expect(tvRemote('Work')).toEqual(26);
        expect(tvRemote('For')).toEqual(20);
        expect(tvRemote('These')).toEqual(35);
        expect(tvRemote('Words')).toEqual(31);
    });

    test('должна подсчитать кол-во кликов для строк с спец символами', () => {
        expect(tvRemote('Code Wars')).toEqual(49);
        expect(tvRemote(' 9qGCjy6nkaNGp dULC dM@CmS')).toEqual(159);
    });
});
