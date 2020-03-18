export function add(a: number) {
    return function(b: number) {
        return a + b;
    };
}

export function subtract(a: number) {
    return function(b: number) {
        return a - b;
    };
}

export function multiply(a: number) {
    return function(b: number) {
        return a * b;
    };
}

export function apply(fn: Function) {
    return fn;
}
