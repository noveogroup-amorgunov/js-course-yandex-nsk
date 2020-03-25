const getObjectOfPrimeNumbers = (n: number) => {
    const result: Record<number, number> = { 0: 0, 1: 0 };

    for (let i = 2; i <= n; i += 1) {
        result[i] = 1;
    }

    for (let i = 2; i * i <= n; i += 1) {
        if (result[i]) {
            for (let j = i * i; j <= n; j += i) {
                result[j] = 0;
            }
        }
    }

    return result;
};

export const primeProductEratosthenes = (n: number) => {
    if (n < 4) return 0;
    const primeNumbers = getObjectOfPrimeNumbers(n);

    for (let i = Math.floor(n / 2); i > 1; i -= 1) {
        const j = n - i;

        if (primeNumbers[i] && primeNumbers[j]) {
            return i * j;
        }
    }
    return 0;
};
