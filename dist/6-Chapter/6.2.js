import { system } from "./6.1";
let person2 = {
    name: "John",
    age: 32,
};
const watchPerson = system.watch(person2);
watchPerson.onAgeChanged((ev) => {
    console.log(ev.val, 'changed age');
});
watchPerson.age = 41;
function capitalize(inp) {
    return inp.charAt(0).toUpperCase() + inp.slice(1);
}
export function handlerName(name) {
    return `on${capitalize(name)}Changed`;
}
