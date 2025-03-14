function addTree(a, b, c) {
    return a + b + c;
}
const adder = curry2(addTree);
const add7 = adder(5, 2);
const result3 = add7(2);
console.log(result3);
export function curry2(fn) {
    let curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
    return curried;
}
