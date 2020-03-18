export function expressionMatter(a: number, b: number, c: number) {
    const operations = [a + b + c, a * b * c, (a + b) * c, a * (b + c)];

    return Math.max(...operations);
}
