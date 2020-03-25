export function NameMe(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, 'name', {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
    });
}
