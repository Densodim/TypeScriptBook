const array = [1, 2, 3, '', undefined, 4, null] as const; //const array: (number | null | undefined)[]

// const filtered = array.filter((val) => !!val); //const filtered: (number | null | undefined)[]

const filtered = array.filter(Boolean);

const nullOrOne: Array<0 | 1> = [0, 1, 0, 1] //const nullOrOne: (0 | 1)[]

const onlyOnes = nullOrOne.filter(Boolean); //const onlyOnes: 1[]
//__________________

type Truthy<T> = T extends "" | false | 0 | 0n ? never : T;

interface Array<T> {
    filter(predicate: BooleanConstructor): Truthy<NonNullable<T>>[]
}

interface ReadonlyArray<T> {
    filter(predicate: BooleanConstructor): Truthy<NonNullable<T>>[];
}

//__________________________-