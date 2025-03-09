import {person} from "../4-Chapter/4.6";

// Object.keys(person).map(k => person[k])

type Person = {
    name: string,
    age: number,
}

function isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
    return k in x;
}

// function printPerson(p: Person) {
//     Object.keys(p).forEach((k) => {
//         if (isKey(p, k)) console.log(k, p[k])
//     })
// }

function printPerson<T extends Person>(p: T) {
    const you:Person = {
        name: 'Ivan',
        age: NaN
    }
    p.age = you.age
    for (let k in p){
        console.log(k, p[k])
    }
}

printPerson(person);