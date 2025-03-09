
function check<T>(obj:T): asserts obj is T & {checked: true} {
    (obj as T & {checked:boolean}).checked = false;
}

export const person = {
    name: "John",
    age: 42,
}

check(person)

console.log(person)