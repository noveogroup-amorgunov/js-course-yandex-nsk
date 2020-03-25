export function makeLooper(str: string) {
    let idx = 0;
    // eslint-disable-next-line no-return-assign,no-plusplus
    return () => str[idx++ % str.length];
}
