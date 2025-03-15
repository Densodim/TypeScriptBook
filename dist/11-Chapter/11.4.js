"use strict";
class Collection {
    items;
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    contains(item) {
        return this.items.includes(item);
    }
}
const numbers = new Collection();
numbers.add(1);
numbers.add(2);
const strings = new Collection();
strings.add('Hello');
strings.add('World');
// const numbersInf = new Collection() //Error
// numbersInf.add(1) //Error
