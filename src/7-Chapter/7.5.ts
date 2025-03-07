function curryEasy<T extends any[], U extends any[], R>(
    f: (...args: [...T, ...U]) => R,
    ...t: T
) {
    return (...u: U) => f(...t, ...u)
}

type Fn2<T extends any[], U extends any[]> = (...args: [...T, ...U]) => any

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

const test3 = curryEasy(applyClass, 'remove')
console.log(test3)