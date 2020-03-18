export const compose = (...funcs: Function[]) => (param: unknown) =>
    funcs.reduceRight((acc, func) => func(acc), param);
