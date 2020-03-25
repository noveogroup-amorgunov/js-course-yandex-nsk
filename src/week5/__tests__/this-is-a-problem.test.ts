import { NamedOne } from '../this-is-an-other-problem';

describe('функция-констуктор NamedOne', () => {
    test('должна устанавливать виртуальное свойство fullName', () => {
        // @ts-ignore
        const n = new NamedOne('John', 'Doe');

        expect(n.fullName).toEqual('John Doe');
    });

    test('должна обновлять свойство fullName после изменения имени', () => {
        // @ts-ignore
        const n = new NamedOne('John', 'Doe');

        n.firstName = 'Bill';

        expect(n.firstName).toEqual('Bill');
        expect(n.fullName).toEqual('Bill Doe');
    });

    test('должна обновлять свойство fullName после изменения фамилии', () => {
        // @ts-ignore
        const n = new NamedOne('John', 'Doe');

        n.lastName = 'Board';

        expect(n.lastName).toEqual('Board');
        expect(n.fullName).toEqual('John Board');
    });

    test('должна обновлять firstName и lastName после обновления  fullName', () => {
        // @ts-ignore
        const n = new NamedOne('John', 'Doe');

        n.fullName = 'Giovanni Fabbri';

        expect(n.lastName).toEqual('Fabbri');
        expect(n.firstName).toEqual('Giovanni');
        expect(n.fullName).toEqual('Giovanni Fabbri');
    });
});
