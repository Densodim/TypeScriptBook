function add(a: number, b: number, c: number) {
    return a + b + c
}

const partialAdd5and3 = add.bind(this, 5, 3)
const result = partialAdd5and3(2)
console.log(result)


export function curry<F extends Function>(fn: F): Curried<F> {
    let curried: Function = (...args: any) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        }
        return fn(...args)
    }
    return curried as Curried<F>
}

export type Curried<F> = F extends (...args: infer A) => infer R
    ? A extends [infer F, ...infer L]
        ? L extends []
            ? (a: F) => R
            : (a: F) => Curried<(...args: L) => R>
        : () => R
    : never;

const curriedAdd = curry(add);

const add5 = curriedAdd(5);       // Функция, ожидающая два аргумента
const add5and3 = add5(3);         // Функция, ожидающая ещё один аргумент
const result1 = add5and3(2);      // Вычисляет 5 + 3 + 2 = 10
const result2 = curriedAdd(5)(3)(2); // Тоже 10

console.log("curriedAdd:", curriedAdd);
console.log("add5:", add5);
console.log("add5and3:", add5and3);
console.log("result1:", result1); // 10
console.log("result2:", result2); // 10

function applyClass(
    this: HTMLElement,
    method: 'remove' | 'add',
    className: string,
    event: Event
) {
    if (this === event.target) {
        this.classList[method](className)
    }
}

const applyClassCurried = curry(applyClass)
const removeToggle = applyClassCurried('remove')('hidden')

// document.querySelector(".toggle")?.addEventListener("click", removeToggle)

