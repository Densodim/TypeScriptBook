function check(obj) {
    obj.checked = false;
}
export const person = {
    name: "John",
    age: 42,
};
check(person);
console.log(person);
