/*
     0   1   2   3   4   5   6   7
   + - + - + - + - + - + - + - + - +
0  |   |   |   |   | x |   | x |   |   5   1
   + - + - + - + - + - + - + - + - +   i   j
1  |   |   |   |   |   | Q |   |   |
   + - + - + - + - + - + - + - + - +   4 - 2
2  |   |   |   |   | x |   | x |   |   3 - 3
   + - + - + - + - + - + - + - + - +   2 - 4
3  |   |   |   | x |   |   |   | x |
   + - + - + - + - + - + - + - + - +   6 - 2
4  |   |   | x |   |   |   |   |   |   7 - 3
   + - + - + - + - + - + - + - + - +
5  |   | x |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
6  | x |   |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
7  |   |   |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
 */

const BOARD_LABELS = 'ABCDEFGH';
const BOARD_SIZE = 8;

export function availableMoves(position: unknown) {
    if (typeof position !== 'string' || position.length !== 2) {
        return [];
    }

    const [rawX, rawY] = position.split('');
    const x = BOARD_LABELS.indexOf(rawX);
    const y = Number(rawY) - 1;
    const results = [];

    // Если индекс не правильный (число или буква), то выходим
    if (y < 0 || y > BOARD_SIZE - 1 || x === -1) {
        return [];
    }

    for (let i = 0; i < BOARD_SIZE; i += 1) {
        for (let j = 0; j < BOARD_SIZE; j += 1) {
            // Если это клетка занята королевой (ферзем), то пропускаем ее
            if (i === x && j === y) {
                continue; // eslint-disable-line no-continue
            }

            // Если совпадают вертикаль, горизонталь и диагонали, королева может сюда сходить
            if (i === x || j === y || Math.abs(x - i) === Math.abs(y - j)) {
                results.push(`${BOARD_LABELS[i]}${j + 1}`);
            }
        }
    }

    return results;
}
