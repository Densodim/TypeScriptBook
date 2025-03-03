const person1: Person3 = {
    name: 'John',
    age: 38,
    profession: {
        title: 'Software Engineer',
        level: 5,
        printProfession() {
            console.log(`${this.title}, Level ${this.level}`)
        }
    },
    hello() {
        return `Hello ${this.name}`
    },
    serialize() {
        return `${this.name}: ${this.profession.title} Level ${this.profession.level}`
    }
}

type Person3 = {
    name: string;
    age: number;
    hello: () => void
    profession: {
        title: string
        level: number
        printProfession: () => void
    }
    serialize: () => string
}

type Remove1<O, T> = {
    [K in keyof O as O[K] extends T | undefined ? never : K]: O[K]
}

type TypeSerialize<T> = T extends { serialize(): infer R }
    ? R
    : NestSerialization<Remove1<T, Function>>

type NestSerialization<T> = {
    [K in keyof T]: T[K] extends object ? TypeSerialize<T[K]> : T[K]
}


class Serializer {
    constructor() {
    }

    serialize<T>(obj: T): TypeSerialize<T> {
        if (typeof obj === 'object' && obj && 'serialize' in obj && typeof obj.serialize === 'function') {
            return obj.serialize()
        }

        const ret: Record<string, any> = {}

        for (let k in obj) {
            if (typeof obj[k] === 'object') {
                ret[k] = this.serialize(obj[k])
            } else if (typeof obj[k] !== 'function') {
                ret[k] = obj[k]
            }
        }
        return ret as TypeSerialize<T>
    }
}


const serializer = new Serializer();
const serializedPerson = serializer.serialize(person1);

console.log(serializedPerson)