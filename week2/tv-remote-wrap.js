const WIDTH = 7;
const HEIGHT = 5;

const keyboard = [
    ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
    ['aA', ' ', '', '', '', '', '', '']
];

function generateKeyboardMap() {
    return keyboard.reduce((acc, item, y) => {
        item.forEach((key, x) => {
            acc[key] = { x, y };
        });

        return acc;
    }, {});
}

function getClicks({ x, y }, { x: nextX, y: nextY }) {
    const xMoves = Math.min(
        Math.abs(nextX - x),
        x + Math.abs(WIDTH - nextX + 1),
        nextX + Math.abs(WIDTH - x + 1)
    );
    const yMoves = Math.min(
        Math.abs(nextY - y),
        y + Math.abs(HEIGHT - nextY + 1),
        nextY + Math.abs(HEIGHT - y + 1)
    );

    return xMoves + yMoves + 1;
}

function tvRemote(text) {
    const keyboardMap = generateKeyboardMap();
    const path = text.split('');
    const START_KEY = keyboardMap.a;
    const CAPS_LOCK_KEY = keyboardMap.aA;

    let isCapsLockMode = false;
    let currentKeyPosition = START_KEY;
    let clicks = 0;

    path.forEach((rawKey) => {
        const key = rawKey.toLowerCase();
        const inUpperCase = key !== rawKey;
        const isLetter = key !== key.toUpperCase();

        // Нужно не забыть нажать на CapsLock
        if (isLetter && inUpperCase !== isCapsLockMode) {
            clicks += getClicks(currentKeyPosition, CAPS_LOCK_KEY);
            currentKeyPosition = CAPS_LOCK_KEY;
            isCapsLockMode = !isCapsLockMode;
        }

        clicks += getClicks(currentKeyPosition, keyboardMap[key]);
        currentKeyPosition = keyboardMap[key];
    });

    return clicks;
}

module.exports = tvRemote;
