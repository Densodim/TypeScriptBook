"use strict";
function loadFile(fileName, encoding, callback) {
}
function request(url, callback) {
}
function promisify(fn) {
    return function (...args) {
        return new Promise((resolve) => {
            function callback(res) {
                resolve(res);
            }
            fn.call(null, ...[...args, callback]);
        });
    };
}
const loadFilePromise = promisify(loadFile);
const requestPromise = promisify(request);
function tuple(...args) {
    return args;
}
function getArrayOfNumber() {
    return [];
}
const number = getArrayOfNumber();
const t1 = tuple('root', 3, true); //const t1: [string, number, boolean]
const t2 = tuple('bar', ...number); //const t2: [string, ...number[]]
