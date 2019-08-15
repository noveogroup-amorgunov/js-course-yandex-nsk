const getObjectOfPrimeNumbers = (n) => {
    const result = { 0: 0, 1: 0 };

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

const primeProduct = (n) => {
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
