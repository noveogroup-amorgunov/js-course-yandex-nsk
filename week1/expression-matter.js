function expressionMatter(a, b, c) {
    const operations = [
        a + b + c,
        a * b * c,
        (a + b) * c,
        a * (b + c)
    ];

    return Math.max(...operations);
}

module.exports = expressionMatter;
