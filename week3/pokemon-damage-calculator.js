const effectiveValue = {
    SUPER_EFFECTIVE: 2,
    NEUTRAL: 1,
    NOT_EFFECTIVE: 0.5
};

const effectivenessMap = {
    fire: {
        grass: effectiveValue.SUPER_EFFECTIVE,
        water: effectiveValue.NOT_EFFECTIVE,
        fire: effectiveValue.NOT_EFFECTIVE
    },
    grass: {
        water: effectiveValue.SUPER_EFFECTIVE,
        fire: effectiveValue.NOT_EFFECTIVE,
        grass: effectiveValue.NOT_EFFECTIVE
    },
    water: {
        fire: effectiveValue.SUPER_EFFECTIVE,
        grass: effectiveValue.NOT_EFFECTIVE,
        electric: effectiveValue.NOT_EFFECTIVE,
        water: effectiveValue.NOT_EFFECTIVE
    },
    electric: {
        water: effectiveValue.SUPER_EFFECTIVE,
        electric: effectiveValue.NOT_EFFECTIVE
    }
};

function calculateDamage(yourType, opponentType, attack, defense) {
    const effectiveness = effectivenessMap[yourType][opponentType] || effectiveValue.NEUTRAL;

    return Math.ceil(50 * (attack / defense) * effectiveness);
}

console.log(calculateDamage('fire', 'water', 100, 100), 25);
console.log(calculateDamage('grass', 'water', 100, 100), 100);
console.log(calculateDamage('electric', 'fire', 100, 100), 50);
console.log(calculateDamage('water', 'water', 120, 130), 24);
console.log(calculateDamage('fire', 'grass', 100, 120), 84);
console.log(calculateDamage('electric', 'water', 90, 99), 91);
console.log(calculateDamage('water', 'fire', 130, 95), 137);
console.log(calculateDamage('electric', 'electric', 90, 99), 23);
console.log(calculateDamage('grass', 'electric', 89, 105), 43);
console.log(calculateDamage('grass', 'fire', 90, 79), 29);
console.log(calculateDamage('water', 'electric', 120, 96), 32);
