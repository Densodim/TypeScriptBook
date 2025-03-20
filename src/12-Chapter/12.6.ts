let person = {
    name: 'Ivan',
    age: 25,
}

type PersonType = typeof person

let anothePerson: PersonType = {
    name: "Anothe Ivan",
    age: 36
}

function update<K extends keyof PersonType>(key: K) {
    person[key] = anothePerson[key]
}

update('age')

//__________________________________
type Switch = {
    address: number
    on: 0|1
}
declare const switcher: Switch
declare const key: keyof Switch

switcher[key] = 1
// switcher[key] = 2 //error
//____________________________________
