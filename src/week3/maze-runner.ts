enum CellType {
    Road = 0,
    Wall = 1,
    StartPoint = 2,
    FinishPoint = 3,
}

export function mazeRunner(maze: number[][], directions: string[]) {
    let x = -1;
    let y = -1;

    for (let i = 0; i < maze.length; i += 1) {
        for (let j = 0; j < maze[i].length; j += 1) {
            if (maze[j][i] === CellType.StartPoint) {
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
            case 'N':
                y -= 1;
                break;
            case 'E':
                x += 1;
                break;
            case 'W':
                x -= 1;
                break;
            case 'S':
                y += 1;
                break;
            default:
                throw new Error(`Unknown direction: ${directions[i]}`);
        }

        if (x < 0 || y < 0 || y > maze[0].length - 1 || x > maze.length - 1) {
            return 'Dead';
        }

        switch (maze[y][x]) {
            case CellType.Wall:
                return 'Dead';
            case CellType.FinishPoint:
                return 'Finish';
            default:
        }
    }

    return 'Lost';
}
