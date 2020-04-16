const a = {
    counter: 1,
    valueOf() {
        // eslint-disable-next-line no-plusplus
        return this.counter++;
    },
};

// @ts-ignore
// eslint-disable-next-line eqeqeq
console.log(a == 1 && a == 2 && a == 3);
