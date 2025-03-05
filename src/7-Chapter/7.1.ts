function concat<T extends unknown[], U extends unknown[]>(
    arr1: [...T],
    arr2: [...U]
): [...T, ...U] {
    return [...arr1, ...arr2];
}

const test2 = concat([1, 2, 3], [4, 5, 'rt']); //const test2: [number, number, number, number, number, string]

type PersonProps = [string, number]

const [name1, age]: PersonProps = ['Ivan', 52]

type Foo<T extends unknown[]> = [string, ...T, number];

type T1 = Foo<[boolean]> //[string, boolean, number]
type T2 = Foo<[number, number]> //[string, number, number, number]
type T3 = Foo<[]> //[string, number]

type Bar<
    T extends unknown[],
    U extends unknown[]
> = [...T, string, ...U]

type T4 = Bar<[boolean], [number]>//[boolean, string, number]
type T5 = Bar<[number, number], [boolean]>//[number, number, string, boolean]
type T6 = Bar<[], []>//[string]




