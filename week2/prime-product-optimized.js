function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let j = 2, s = Math.sqrt(n); j <= s; j += 1) {
        if (n % j === 0) {
            return false;
        }
    }

    return true;
}

function primeProductOptimized(n) {
    for (let i = Math.floor(n); i > 1; i -= 1) {
        const j = n - i;

        if (isPrime(i) && isPrime(j)) {
            return i * j;
        }
    }

    return 0;
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

module.exports = primeProductOptimized;
