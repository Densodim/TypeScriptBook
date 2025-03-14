"use strict";
const storage = {
    currentValue: 0
};
// Object.defineProperty(storage, 'maxValue', {
//     value: 9001,
//     writable: false
// })
defineProperty(storage, 'maxValue', {
    value: 9001,
    writable: false
});
console.log(storage.maxValue);
// storage.maxValue = 2 //Error
console.log(storage);
const storageName = 'My Storage';
defineProperty(storage, 'name', {
    get() {
        return storageName;
    }
});
storage.name; //string
// defineProperty(storage, 'broken', {    //Error
//     get(): any {
//         return storageName
//     },
//     value: 4000
// })
//
console.log(storage);
//___________________
function defineProperty(obj, prop, val) {
    Object.defineProperty(obj, prop, val);
}
//___________________-
function assertIsNumber(val) {
    if (typeof val !== 'number') {
        throw new Error('Not a number');
    }
}
function multiply(x, y) {
    assertIsNumber(x);
    assertIsNumber(y);
    return x * y;
}
