const commands = {
    NONE: '.',
    PRESS: 'P',
    OBSTACLE: 'O'
};

const states = {
    OPENING: 1,
    CLOSING: 2,
    PAUSE: 3,
    CLOSED: 4,
    OPENED: 5
};

function door(events) {
    let result = '';
    let currentValue = 0;
    let lastOperation = null;
    let state = states.CLOSED;

    for (let i = 0; i < events.length; i += 1) {
        switch (events[i]) {
        case commands.NONE: {
            if (states.OPENING === state && currentValue === 5) {
                state = states.OPENED;
            } else if (states.CLOSING === state && currentValue === 0) {
                state = states.CLOSED;
            }
            break;
        }
        case commands.PRESS: {
            if (states.CLOSED === state) {
                state = states.OPENING;
            } else if (states.OPENED === state) {
                state = states.CLOSING;
            } else if (states.OPENING === state || states.CLOSING === state) {
                lastOperation = state;
                state = states.PAUSE;
            } else if (states.PAUSE === state) {
                state = lastOperation;
            }
            break;
        }
        case commands.OBSTACLE: {
            if (states.OPENING === state) {
                state = states.CLOSING;
            } else if (states.CLOSING === state) {
                state = states.OPENING;
            }
            break;
        }
        default:
        }

        if (states.OPENING === state) {
            currentValue += 1;
        } else if (states.CLOSING === state) {
            currentValue -= 1;
        }

        result += currentValue;
    }

    return result;
}

module.exports = door;
