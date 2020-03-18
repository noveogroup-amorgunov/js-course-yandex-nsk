const mazeRunner = require('../maze-runner');

const maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1]
];

describe('метод "maze runner"', () => {
    test('должен вернуть верный ответ', () => {
        expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'])).toEqual('Finish');
        expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E'])).toEqual('Finish');
        expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W'])).toEqual('Finish');

        expect(mazeRunner(maze, ['N', 'N', 'N', 'W', 'W'])).toEqual('Dead');
        expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S'])).toEqual('Dead');

        expect(mazeRunner(maze, ['N', 'E', 'E', 'E', 'E'])).toEqual('Lost');
    });
});
