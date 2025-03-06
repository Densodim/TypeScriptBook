

function addTree(a: number, b: number, c: number) {
    return a + b + c;
}

const adder = curry2(addTree);
const add7 = adder(5, 2)
const result3 = add7(2)
console.log(result3)

export function curry2<A extends any[], R extends any>(fn: (...args: A) => R): Curried2<A, R> {
    let curried: Function = (...args: any) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        }
        return fn(...args)
    }
    return curried as Curried2<A, R>
}

type Curried2<A extends any[], R extends any> = A extends [infer F, ...infer L]
    ? <K extends Overloads<L>>(
        arg: F,
        ...args: K
    ) => Curried2<Remove<L, K>, R>
    : R;

type Overloads<A extends any[]> = A extends [infer A, ...infer L]
    ? [A] | [A, ...Overloads<L>] | []
    : []

type Overloaded = Overloads<[string, number, string]>

type Remove<T extends any[], U extends any[]> = U extends [infer _, ...infer UL]
    ? T extends [infer _, ...infer TL]
        ? Remove<TL, UL>
        : never
    : T

