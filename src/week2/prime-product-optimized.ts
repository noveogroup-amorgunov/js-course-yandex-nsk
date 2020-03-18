function isPrime(n: number) {
    if (n === 2) {
        return true;
    }

    if (n < 2) {
        return false;
    }

    for (let j = 3, s = Math.sqrt(n); j <= s; j += 2) {
        if (n % j === 0) {
            return false;
        }
    }

    return true;
}

export function primeProductOptimized(n: number) {
    for (let i = Math.floor(n / 2); i > 1; i -= 1) {
        const j = n - i;

        if (isPrime(i) && isPrime(j)) {
            return i * j;
        }
    }

    return 0;
}
