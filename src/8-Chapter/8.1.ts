import {Remap} from "./8.3";

export type Person4 = {
    name: string;
    age: number;
    profession: string;
}

type SelectPartial<T, K extends keyof T> = {
    [P in K]?: T[K];
}

type Age = SelectPartial<Person4, 'age'>

//_________________

// type SetOptional<T, K extends keyof T> = {
//     [P in K]?: T[P];
// } & {
//     [P in Exclude<keyof T, K>]: T[P];
// }
const test4: OptionalAge = {
    name: 'Ivan',
}
type SetOptional<T, K extends keyof T = keyof T> = Remap<Partial<Pick<T, K>> & Omit<T, K>>

type OptionalAge = SetOptional<Person4, 'age' | 'profession'>

//________________________

type SetRequered<T, K extends keyof T = keyof T> = Remap<
    Required<Pick<T, K>> & Omit<T, K>
>

//________________
type OnlyRequired<T, K extends keyof T = keyof T> = Remap<
    Required<Pick<T, K>> & Partial<Omit<T, K>>
>