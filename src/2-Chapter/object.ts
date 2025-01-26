// const person = {
//     name1: "John",
//     age1: 32,
// }
//
// const {name1, age1} = person
//
// const person2 = ['Join', 32]
// const [anotherName, anotherAge] = person2
// console.log(anotherName)
// console.log(anotherAge)

// const person2:[string, number] = ['Join', 32]
// person2[1] = 43
// person2[2] = false

// function fn(input: number): number
// function fn(input: string): string
// function fn(input: string | number): string | number {
//     if (typeof input === 'number') {
//         return "this also works with numbers"
//     } else {
//         return 11255
//     }
// }
// _____________________________________________________________________-

// const button = document.querySelector('button')
// button?.addEventListener('click', handleToggle)
//
// const input = document.querySelector('input')
// input?.addEventListener('click', handleToggle)
//
// function handleToggle(this: HTMLElement) {
//     this.classList.toggle('active')
// }
// type ToogleThis = typeof handleToggle
// type ithoutThis = OmitThisParameter<ToogleThis>
// type ToggleFnThis = ThisParameterType<ToogleThis>

// _____________________________________________________________________-

// Symbol.for('print')
//
// const user = {
//     name: 'Ivan',
//     age: 45,
//     [Symbol.for('print')]: function () {
//         console.log(`${this.name}: ${this.age}\n`)
//     }
// }
//
// const usedSymbolKeys = []
//
// function extendObject(obj: any, sym: symbol, value: any) {
//     const key = Symbol.keyFor(sym)
//
//     if (!usedSymbolKeys.includes(key)) {
//         usedSymbolKeys.push(key)
//     }
//     obj[key] = value
// }
//
// function printAllValues(obj) {
//     usedSymbolKeys.forEach(key => {
//         console.log(obj[Symbol.for(key)])
//     })
// }
// _____________________________________________________________________-

class Person {
    name: string;

    constructor(n: string) {
        this.name = n
    }
}

function printPerson(person: Person) {
    console.log(person.name)
}

// printPerson(new Person("John"));
// printPerson({name: "John"});

function checkPerson(person:Person) {
    const b = person instanceof Person;
    return b;
}

checkPerson(new Person("John"));
checkPerson({name: "John"});