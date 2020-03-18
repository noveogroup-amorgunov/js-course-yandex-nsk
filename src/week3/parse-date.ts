export function parseDate(str = '') {
    const result = str.match(/(\d{4})-(\d{2})-(\d{2})/);

    if (!result) {
        throw new Error('Invalid date');
    }

    const [, year, month, day] = result;

    return { year, month, day };
}
