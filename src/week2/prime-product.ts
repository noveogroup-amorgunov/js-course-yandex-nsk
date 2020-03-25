function isPrime(n: number) {
    for (let j = 2, s = Math.sqrt(n); j <= s; j += 1) {
        if (n % j === 0) {
            return false;
        }
    }
    return true;
}

function generatePrimes(n: number) {
    const primes = [];

    for (let i = 2; i < n; i += 1) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

export function primeProduct(n: number) {
    const primes = generatePrimes(n);
    let result = 0;

    for (let i = 0; i < primes.length; i += 1) {
        for (let j = 0; j < primes.length; j += 1) {
            const sum = primes[i] + primes[j];
            const mult = primes[i] * primes[j];

            if (sum === n && mult > result) {
                result = mult;
            }
        }
    }

    return result;
}
