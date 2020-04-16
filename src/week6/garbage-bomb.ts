function getNumber(cityMap: number[][], i: number, j: number) {
    return (cityMap[i] || [])[j] || 0;
}

function getSum(cityMap: number[][], i: number, j: number) {
    return (
        getNumber(cityMap, i, j) +
        getNumber(cityMap, i + 1, j) +
        getNumber(cityMap, i, j + 1) +
        getNumber(cityMap, i + 1, j + 1) +
        getNumber(cityMap, i - 1, j) +
        getNumber(cityMap, i, j - 1) +
        getNumber(cityMap, i - 1, j - 1) +
        getNumber(cityMap, i - 1, j + 1) +
        getNumber(cityMap, i + 1, j - 1)
    );
}

export function bestPlaces(cityMap: number[][]) {
    let maxSum = 0;
    let count = 0;

    for (let i = 0; i < cityMap.length; i += 1) {
        for (let j = 0; j < cityMap[0].length; j += 1) {
            const sum = getSum(cityMap, i, j);

            if (sum > maxSum) {
                count = 1;
                maxSum = sum;
            } else if (sum === maxSum) {
                count += 1;
            }
        }
    }

    return count;
}
