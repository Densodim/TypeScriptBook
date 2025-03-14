"use strict";
class PersonClass {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.#name.toUpperCase();
    }
}
const nyName = new PersonClass('Ivan');
console.log(nyName.name);
class Category {
    title;
    id;
    reference;
    constructor(title, id, reference) {
        this.title = title;
        this.id = id;
        this.reference = reference;
    }
}
