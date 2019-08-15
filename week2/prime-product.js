function isPrime(n) {
    for (let j = 2, s = Math.sqrt(n); j <= s; j += 1) {
        if (n % j === 0) {
            return false;
        }
    }
    return true;
}

function generatePrimes(n) {
    const primes = [];

    for (let i = 2; i < n; i += 1) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

function primeProduct(n) {
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

// console.log(primeProduct(1), 0);
// console.log(primeProduct(3), 0);
// console.log(primeProduct(4), 4);
// console.log(primeProduct(5), 6);
// console.log(primeProduct(6), 9);
// console.log(primeProduct(7), 10);
// console.log(primeProduct(8), 15);
// console.log(primeProduct(9), 14);
// console.log(primeProduct(10), 25);
// console.log(primeProduct(11), 0);
// console.log(primeProduct(12), 35);
// console.log(primeProduct(20), 91);
// console.log(primeProduct(100), 2491);

module.exports = primeProduct;
