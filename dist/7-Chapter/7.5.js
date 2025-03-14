"use strict";
function curryEasy(f, ...t) {
    return (...u) => f(...t, ...u);
}
function applyClass(method, className, event) {
    if (this === event.target) {
        this.classList[method](className);
    }
}
const test3 = curryEasy(applyClass, 'remove');
console.log(test3);
