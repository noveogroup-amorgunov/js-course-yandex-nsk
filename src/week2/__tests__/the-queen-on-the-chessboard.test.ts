import { availableMoves } from '../the-queen-on-the-chessboard';

describe('функция the-queen-on-the-chessboard', () => {
    test('должна возвращать пустой массив при невалидных данных', () => {
        expect(availableMoves(null)).toEqual([]);
        expect(availableMoves([1, 2, 3])).toEqual([]);
        expect(availableMoves('work?')).toEqual([]);
        expect(availableMoves('A10')).toEqual([]);
        expect(availableMoves('B0')).toEqual([]);
        expect(availableMoves(2)).toEqual([]);
    });

    test('должна вернуть все возможные ходы', () => {
        expect(availableMoves('A1')).toEqual([
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7',
            'A8',
            'B1',
            'B2',
            'C1',
            'C3',
            'D1',
            'D4',
            'E1',
            'E5',
            'F1',
            'F6',
            'G1',
            'G7',
            'H1',
            'H8',
        ]);
        expect(availableMoves('C5')).toEqual([
            'A3',
            'A5',
            'A7',
            'B4',
            'B5',
            'B6',
            'C1',
            'C2',
            'C3',
            'C4',
            'C6',
            'C7',
            'C8',
            'D4',
            'D5',
            'D6',
            'E3',
            'E5',
            'E7',
            'F2',
            'F5',
            'F8',
            'G1',
            'G5',
            'H5',
        ]);
        expect(availableMoves('H3')).toEqual([
            'A3',
            'B3',
            'C3',
            'C8',
            'D3',
            'D7',
            'E3',
            'E6',
            'F1',
            'F3',
            'F5',
            'G2',
            'G3',
            'G4',
            'H1',
            'H2',
            'H4',
            'H5',
            'H6',
            'H7',
            'H8',
        ]);
    });
});