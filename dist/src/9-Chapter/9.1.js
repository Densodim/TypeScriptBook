import { person } from "../4-Chapter/4.6";
function isKey(x, k) {
    return k in x;
}
// function printPerson(p: Person) {
//     Object.keys(p).forEach((k) => {
//         if (isKey(p, k)) console.log(k, p[k])
//     })
// }
function printPerson(p) {
    const you = {
        name: 'Ivan',
        age: NaN
    };
    p.age = you.age;
    for (let k in p) {
        console.log(k, p[k]);
    }
}
printPerson(person);
