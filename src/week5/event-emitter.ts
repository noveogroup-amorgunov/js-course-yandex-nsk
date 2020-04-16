export class EventEmitter {
    private store: Record<string, Map<object, Array<Function>>> = {};

    on(eventName: string, subscriber: object, handler: Function) {
        if (!this.store[eventName]) {
            this.store[eventName] = new Map();
        }

        if (!this.store[eventName].has(subscriber)) {
            this.store[eventName].set(subscriber, []);
        }

        this.store[eventName].get(subscriber).push(handler);

        return this;
    }

    off(eventName: string, subscriber: object) {
        this.store[eventName].delete(subscriber);

        return this;
    }

    emit(eventName: string) {
        if (!this.store[eventName]) {
            return this;
        }

        this.store[eventName].forEach((handlers, subscriber) => {
            handlers.forEach(handler => handler.call(subscriber));
        });

        return this;
    }
}

const event = new EventEmitter();

const counter = {
    value: 0,
    tick() {
        this.value += 1;
    },
};

event
    .on('notification', counter, counter.tick)
    .emit('notification')
    .emit('notification')
    .off('notification', counter)
    .emit('notification');

console.log(counter);
