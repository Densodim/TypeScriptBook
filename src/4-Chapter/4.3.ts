function indentity<T>(t: T) {
    return t
}

let a = indentity('Hello World')
const b = indentity<number>(5000)
const c = indentity<{ a: 2 }>({a: 2})

/////

function pairs<T, U>(a: T, b: U): [T, U] {
    return [a, b]
}

const time = pairs(1, '4')

function pairs1<T>(a: T, b: T): [T, T] {
    return [a, b]
}

const a1 = pairs1(8, 8)

