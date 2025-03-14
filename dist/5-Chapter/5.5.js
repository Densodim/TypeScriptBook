"use strict";
const person1 = {
    name: 'John',
    age: 38,
    profession: {
        title: 'Software Engineer',
        level: 5,
        printProfession() {
            console.log(`${this.title}, Level ${this.level}`);
        }
    },
    hello() {
        return `Hello ${this.name}`;
    },
    serialize() {
        return `${this.name}: ${this.profession.title} Level ${this.profession.level}`;
    }
};
class Serializer {
    constructor() {
    }
    serialize(obj) {
        if (typeof obj === 'object' && obj && 'serialize' in obj && typeof obj.serialize === 'function') {
            return obj.serialize();
        }
        const ret = {};
        for (let k in obj) {
            if (typeof obj[k] === 'object') {
                ret[k] = this.serialize(obj[k]);
            }
            else if (typeof obj[k] !== 'function') {
                ret[k] = obj[k];
            }
        }
        return ret;
    }
}
const serializer = new Serializer();
const serializedPerson = serializer.serialize(person1);
console.log(serializedPerson);
