function isSequence(sequence: string, substring: string) {
    for (let i = 0; i < sequence.length; i += 1) {
        if (sequence[i] !== substring[i % substring.length]) {
            return false;
        }
    }
    return true;
}

export function findTheKey(message: string, code: number[]) {
    const startCharCodeAt = 'a'.charCodeAt(0) - 1;
    let sequence = '';
    let result = '';

    // Формируем последовательность с ключом
    for (let i = 0; i < message.length; i += 1) {
        sequence += code[i] - (message[i].charCodeAt(0) - startCharCodeAt);
    }

    // Ищем в последовательности повторяющийся фрагмент
    for (let i = 0; i < sequence.length; i += 1) {
        result += sequence[i];
        if (isSequence(sequence, result)) {
            return result;
        }
    }

    return result;
}

// const sequence = code.map((key, idx) => key - (message[idx].charCodeAt(0) - startCharCodeAt));
// const isSequence = sequence.every((key, idx) => key === result[idx % (i + 1)]);

console.log(findTheKey('scout', [20, 12, 18, 30, 21]));
console.log(
    findTheKey('masterpiece', [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]),
);
console.log(
    findTheKey('nomoretears', [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20]),
);

module.exports = findTheKey;
