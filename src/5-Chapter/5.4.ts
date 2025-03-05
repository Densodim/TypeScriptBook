type Person2 = {
    name: string
    age: number
    profession?: string
}

// type PersonStrings = {
//     name: string
//     profession: string
// }

// type PersonStrings = {
//     [K in keyof Person2 as Person2[K] extends string | undefined
//         ? K
//         : never]: Person2[K]
// }

type Select<O, T> = {
    [K in keyof O as O[K] extends T | undefined ? K : never]?: O[K];
}

type PersonStrings = Select<Person2, string>
type PersonNumbers = Select<Person2, number>

type StringFnsReturningNumber = Select<String, (...args: any[]) => number>;

type PersonName = Pick<Person2, "name" | "profession">

type PersonWithoutAge = Omit<Person2, "age">;


type Remove<O, T> = {
    [K in keyof O as O[K] extends T | undefined ? never : K]: O[K]
}

export type User = {
    name: string
    age: number
    profession?: string
    posts():string[]
    greeting():string
}

type SerializeableUser = Remove<User, Function>

