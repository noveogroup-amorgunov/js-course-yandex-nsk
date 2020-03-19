export function NamedOne(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(val: string) {
            const [first, last] = val.split(' ');

            if (!first || !last) {
                return;
            }

            this.firstName = first;
            this.lastName = last;
        },
    });
}
