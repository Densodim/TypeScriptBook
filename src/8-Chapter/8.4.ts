import {Remap} from "./8.3";

type Person2 = {
    name: string
    age?: number
}

function printPerson(person: Person2) {

}

type Student = {
    name: string
    semester: number
}

const student: Student = {
    name: 'Ivan',
    semester: 54
}
//___________________
type Name = {
    name: string
}
// type Test = Name extends Required<Name> ? true : false // nitial type:true
// type Test = Person2 extends Required<Person2> ? true : false // false
type Test = Required<Person2> extends Person2 ? true : false //true
//______________________________

type RequiredPerson = Remap<{
    [K in keyof Person2 as Person2[K] extends Required<Person2>[K]
        ? K
        : never]: Person2[K]
}>



//___________________________

type GetRequired<T> = {
    [K in keyof T as T[K] extends Required<T>[K]
        ? K
        : never]: T[K]
}

type RequiredKey<T> = keyof GetRequired<T>

type GetOptional<T> = Omit<T, RequiredKey<T>>