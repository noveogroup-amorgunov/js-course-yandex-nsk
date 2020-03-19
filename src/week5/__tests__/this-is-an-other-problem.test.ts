import { NameMe } from '../this-is-a-problem';

describe('функция-констуктор NameMe', () => {
    test('должна устанавливать виртуальное свойство name', () => {
        // @ts-ignore
        const n = new NameMe('John', 'Doe');

        expect(n.firstName).toEqual('John');
        expect(n.lastName).toEqual('Doe');
        expect(n.name).toEqual('John Doe');
    });
});
