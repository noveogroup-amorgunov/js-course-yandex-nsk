import { SnakesLadders, Player } from '../snake-and-ladders';

describe('класс SnakesLadders', () => {
    test('должен не менять игрока при одинаковом значении на кубиках', () => {
        const game = new SnakesLadders();

        expect(game.play(1, 1)).toEqual('Player 1 is on square 38');
        expect(game.player).toEqual(Player.One);
    });

    test('должен менять игрока при разных значении на кубиках', () => {
        const game = new SnakesLadders();

        expect(game.play(1, 3)).toEqual('Player 1 is on square 4');
        expect(game.player).toEqual(Player.Two);
    });

    test('должен прыгать вперед', () => {
        const game = new SnakesLadders();

        expect(game.play(6, 2)).toEqual('Player 1 is on square 31');
    });

    test('должен прыгать назад', () => {
        const game = new SnakesLadders();
        game.positions = [44, 31];

        expect(game.play(1, 1)).toEqual('Player 1 is on square 25');
    });
});
