type Person4 = {
    name: string;
    age: number;
    profession: string;
}

type SelectPartial<T, K extends keyof T> = {
    [P in K]?: T[K];
}

type Age = SelectPartial<Person4, 'age'>

//_________________

type SetOptional<T, K extends keyof T> = {
    [P in K]?: T[P];
} & {
    [P in Exclude<keyof T, K>]: T[P];
}
type OptionalAge = SetOptional<Person4, 'age'|'profession>