export function balancedNumber(num: number) {
    const strNumber = String(num);
    const steps = Math.round(strNumber.length / 2 - 1);
    let r = 0;
    let l = 0;

    for (let i = 0; i < steps; i += 1) {
        l += Number(strNumber[i]);
        r += Number(strNumber[strNumber.length - 1 - i]);
    }

    return l === r ? 'Balanced' : 'Not balanced';
}
