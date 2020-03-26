function sum(num: number) {
    let count = num;

    function func(num2: number): Function {
        count += num2;

        return func;
    }

    // @ts-ignore
    // eslint-disable-next-line no-proto
    func.__proto__.valueOf = () => count;

    return func;
}

// eslint-disable-next-line eqeqeq
console.log(sum(5)(4)(3) == 12);
// eslint-disable-next-line eqeqeq
console.log(sum(1)(1)(1)(1)(1) == 5);
