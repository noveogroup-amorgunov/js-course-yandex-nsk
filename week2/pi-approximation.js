function iterPi(epsilon) {
    let result = 1;
    let iterations = 1;
    let sign = -1;

    while (Math.abs(result * 4 - Math.PI) > epsilon) {
        result += sign / (iterations * 2 + 1);
        sign *= -1;
        iterations += 1;
    }

    return [
        iterations,
        parseFloat((result * 4).toFixed(10))
    ];
}

module.exports = iterPi;
