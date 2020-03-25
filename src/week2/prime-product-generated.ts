import primeNumbers from './prime-numbers.json';

export function primeProductGenerated(n: number) {
    const pairs = [];
    for (let i = primeNumbers.length - 1; i >= 0; i -= 1) {
        if (primeNumbers[i] > n) {
            // eslint-disable-next-line no-continue
            continue;
        }

        for (let j = 0; j <= i; j += 1) {
            if (primeNumbers[i] + primeNumbers[j] === n) {
                pairs.push([primeNumbers[j], primeNumbers[i]]);
            }
        }
    }

    if (!pairs.length) {
        return 0;
    }

    return Math.max(...pairs.map(pair => pair[0] * pair[1]));
}
