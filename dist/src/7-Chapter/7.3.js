function add(a, b, c) {
    return a + b + c;
}
const partialAdd5and3 = add.bind(this, 5, 3);
const result = partialAdd5and3(2);
console.log(result);
export function curry(fn) {
    let curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
    return curried;
}
const curriedAdd = curry(add);
const add5 = curriedAdd(5); // Функция, ожидающая два аргумента
const add5and3 = add5(3); // Функция, ожидающая ещё один аргумент
const result1 = add5and3(2); // Вычисляет 5 + 3 + 2 = 10
const result2 = curriedAdd(5)(3)(2); // Тоже 10
console.log("curriedAdd:", curriedAdd);
console.log("add5:", add5);
console.log("add5and3:", add5and3);
console.log("result1:", result1); // 10
console.log("result2:", result2); // 10
function applyClass(method, className, event) {
    if (this === event.target) {
        this.classList[method](className);
    }
}
const applyClassCurried = curry(applyClass);
const removeToggle = applyClassCurried('remove')('hidden');
// document.querySelector(".toggle")?.addEventListener("click", removeToggle)
