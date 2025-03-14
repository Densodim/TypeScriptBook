"use strict";
const Direction2 = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
};
function move(direction) {
}
// move(30); //Error
move(0);
move(Direction2.Left);
const commandItems = [
    'echo',
    'grep',
    'sed',
    'awk',
    'cup',
    'uniq',
    'head',
    'tail',
    'xargs',
    'shift'
];
function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}
function createEnum(arr, numeric) {
    let obj = {};
    for (let [i, el] of arr.entries()) {
        obj[capitalize(el)] = numeric ? i : el;
    }
    return obj;
}
const Command = createEnum(commandItems, false);
console.log(Command);
// type Test1 = Command['Shift'];
const CommandN = createEnum(commandItems, true);
