"use strict";
function indentity(t) {
    return t;
}
let a = indentity('Hello World');
const b = indentity(5000);
const c = indentity({ a: 2 });
/////
function pairs(a, b) {
    return [a, b];
}
const time = pairs(1, '4');
function pairs1(a, b) {
    return [a, b];
}
const a1 = pairs1(8, 8);
