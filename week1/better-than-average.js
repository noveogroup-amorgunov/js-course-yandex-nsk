function betterThanAverage(classPoints, yourPoint) {
    const sum = classPoints.reduce((acc, item) => acc + item, yourPoint);
    const average = sum / (classPoints.length + 1);

    return yourPoint > average;
}

module.exports = betterThanAverage;
