"use strict";
function concat(arr1, arr2) {
    return [...arr1, ...arr2];
}
const test2 = concat([1, 2, 3], [4, 5, 'rt']); //const test2: [number, number, number, number, number, string]
const [name1, age] = ['Ivan', 52];
