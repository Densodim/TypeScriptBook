"use strict";
function defer(fn, ...args) {
    return () => fn(...args);
}
const log = defer(console.log, 'Hello World');
log();
function search(query, tags) {
    throw 'to be done';
}
const searchParams = [
    'Variadic',
    ['TypeScript', 'JS'],
];
search(...searchParams);
const deferSearch = defer(search, ...searchParams);
console.log(deferSearch());
