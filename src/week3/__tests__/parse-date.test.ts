import { parseDate } from '../parse-date';

describe('Функция parseDate', () => {
    test('должна парсить дату в формате year-month-day', () => {
        expect(parseDate('2019-12-12')).toEqual({
            year: '2019',
            month: '12',
            day: '12',
        });
    });

    test('должна выбросить ошибку, если передана дата в неверном формате', () => {
        expect(parseDate.bind(null, 'not date')).toThrow('Invalid date');
    });

    // Такой проверки нет, поэтому тест приготовили, по пока скипаем
    test.skip('должна выбросить ошибку, если передать не строку', () => {
        expect(parseDate.bind(null, [])).toThrow('Invalid date');
    });
});
