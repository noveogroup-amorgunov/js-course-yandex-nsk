enum Commands {
    None = '.',
    Press = 'P',
    Obstacle = 'O',
}

enum States {
    Opening = 1,
    Closing = 2,
    Pause = 3,
    Closed = 4,
    Opened = 5,
}

export function door(events: string) {
    let result = '';
    let currentValue = 0;
    let lastOperation = null;
    let state = States.Closed;

    for (let i = 0; i < events.length; i += 1) {
        switch (events[i]) {
            case Commands.None: {
                if (States.Opening === state && currentValue === 5) {
                    state = States.Opened;
                } else if (States.Closing === state && currentValue === 0) {
                    state = States.Closed;
                }
                break;
            }
            case Commands.Press: {
                if (States.Closed === state) {
                    state = States.Opening;
                } else if (States.Opened === state) {
                    state = States.Closing;
                } else if (
                    States.Opening === state ||
                    States.Closing === state
                ) {
                    lastOperation = state;
                    state = States.Pause;
                } else if (States.Pause === state) {
                    state = lastOperation;
                }
                break;
            }
            case Commands.Obstacle: {
                if (States.Opening === state) {
                    state = States.Closing;
                } else if (States.Closing === state) {
                    state = States.Opening;
                }
                break;
            }
            default:
        }

        if (States.Opening === state) {
            currentValue += 1;
        } else if (States.Closing === state) {
            currentValue -= 1;
        }

        result += currentValue;
    }

    return result;
}
