const BOARD_LABELS = 'ABCDEFGH';
const BOARD_SIZE = 8;

function availableMoves(position) {
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

function isEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

console.log(isEqual(availableMoves('A1'), ['A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1',
    'B2', 'C1', 'C3', 'D1', 'D4', 'E1', 'E5', 'F1', 'F6', 'G1', 'G7', 'H1', 'H8']));

console.log(isEqual(availableMoves('C5'), ['A3', 'A5', 'A7', 'B4', 'B5', 'B6', 'C1',
    'C2', 'C3', 'C4', 'C6', 'C7', 'C8', 'D4', 'D5', 'D6', 'E3', 'E5', 'E7', 'F2', 'F5', 'F8',
    'G1', 'G5', 'H5']));

console.log(isEqual(availableMoves('H3'), ['A3', 'B3', 'C3', 'C8', 'D3', 'D7', 'E3',
    'E6', 'F1', 'F3', 'F5', 'G2', 'G3', 'G4', 'H1', 'H2', 'H4', 'H5', 'H6', 'H7', 'H8']));

console.log(isEqual(availableMoves(null), []));

console.log(isEqual(availableMoves([1, 2, 3]), []));
console.log(isEqual(availableMoves('work?'), []));
console.log(isEqual(availableMoves('A10'), []));
console.log(isEqual(availableMoves('B0'), []));
console.log(isEqual(availableMoves(2), []));

module.exports = availableMoves;

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
