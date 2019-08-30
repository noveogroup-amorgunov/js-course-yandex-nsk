const CELL_TYPE = {
    ROAD: 0,
    WALL: 1,
    START_POINT: 2,
    FINISH_POINT: 3
};

function mazeRunner(maze, directions) {
    let x = -1;
    let y = -1;

    for (let i = 0; i < maze.length; i += 1) {
        for (let j = 0; j < maze[i].length; j += 1) {
            if (maze[j][i] === CELL_TYPE.START_POINT) {
                x = i;
                y = j;
                break;
            }
        }

        if (x !== -1) {
            break;
        }
    }

    for (let i = 0; i < directions.length; i += 1) {
        switch (directions[i]) {
        case 'N': y -= 1; break;
        case 'E': x += 1; break;
        case 'W': x -= 1; break;
        case 'S': y += 1; break;
        default: throw new Error(`Unknown direction: ${directions[i]}`);
        }

        if (x < 0 || y < 0 || y > maze[0].length - 1 || x > maze.length - 1) {
            return 'Dead';
        }

        switch (maze[y][x]) {
        case CELL_TYPE.WALL: return 'Dead';
        case CELL_TYPE.FINISH_POINT: return 'Finish';
        default:
        }
    }

    return 'Lost';
}

module.exports = mazeRunner;
