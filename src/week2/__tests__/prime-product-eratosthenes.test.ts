import { primeProductEratosthenes as primeProduct } from '../prime-product-eratosthenes';

describe('функция prime-product-eratosthenes', () => {
    test('должна вернуть максимальное произведение', () => {
        expect(primeProduct(1)).toEqual(0);
        expect(primeProduct(3)).toEqual(0);
        expect(primeProduct(4)).toEqual(4);
        expect(primeProduct(5)).toEqual(6);
        expect(primeProduct(6)).toEqual(9);
        expect(primeProduct(7)).toEqual(10);
        expect(primeProduct(8)).toEqual(15);
        expect(primeProduct(9)).toEqual(14);
        expect(primeProduct(10)).toEqual(25);
        expect(primeProduct(11)).toEqual(0);
        expect(primeProduct(12)).toEqual(35);
        expect(primeProduct(20)).toEqual(91);
        expect(primeProduct(100)).toEqual(2491);
    });
});
