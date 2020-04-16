export enum Player {
    One = 0,
    Two = 1,
}

const MAX_POSITION = 100;
const GAPS: Record<string, number> = {
    2: 38,
    7: 14,
    8: 31,
    15: 26,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    78: 98,
    87: 94,
    16: 6,
    49: 11,
    46: 25,
    62: 19,
    64: 40,
    74: 53,
    89: 68,
    95: 75,
    92: 88,
    99: 80,
};

export class SnakesLadders {
    isGameOver = false;

    positions = [0, 0];

    player = Player.One;

    swapPlayers() {
        this.player = this.player === Player.One ? Player.Two : Player.One;
    }

    get position() {
        return this.positions[this.player];
    }

    set position(position: number) {
        this.positions[this.player] = position;
    }

    play(die1: number, die2: number) {
        if (this.isGameOver) {
            return 'Game over!';
        }

        const playerName = `Player ${this.player + 1}`;

        this.position += die1 + die2;

        if (this.position === MAX_POSITION) {
            this.isGameOver = true;
            return `${playerName} Wins!`;
        }

        if (this.position > MAX_POSITION) {
            this.position = MAX_POSITION - (this.position - MAX_POSITION);
        }

        if (GAPS[this.position]) {
            this.position = GAPS[this.position];
        }

        const message = `${playerName} is on square ${this.position}`;

        if (die1 !== die2) {
            this.swapPlayers();
        }

        return message;
    }
}
