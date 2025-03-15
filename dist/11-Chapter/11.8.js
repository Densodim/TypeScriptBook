"use strict";
class User1 {
    #id;
    static #nextTheadId;
    constructor(id) {
        this.#id = id;
    }
    equals(user) {
        return this.#id === user.#id;
    }
    async openThead(title, contex) {
        const theardId = User1.#nextTheadId++;
        await fetch('http://localhost:8080', {
            method: 'POST',
            body: JSON.stringify({
                contex,
                title,
                theardId,
            })
        });
        return theardId;
    }
}
class Admin extends User1 {
    #privileges;
    constructor(id, privileges = []) {
        super(id);
        this.#privileges = privileges;
    }
    async closeThead(id) {
        await fetch('http://localhost:8080', {
            method: 'POST',
            body: "" + id
        });
    }
}
const user = new User1(1);
const admin = new Admin(2);
console.log(user.equals(admin));
// console.log(admin.equals(user)) //Error
//_________________________
class OptionBuilder {
    #option = new Map();
    constructor() {
    }
    add(name, value) {
        this.#option.set(name, value);
        return this;
    }
    has(name) {
        return this.#option.has(name);
    }
    build() {
        return Object.fromEntries(this.#option);
    }
}
const options = new OptionBuilder()
    .add('default', true)
    .add('compressionFactor', 10)
    .build();
console.log(options);
class StringOprionBuilder extends OptionBuilder {
    safeAdd(name, value) {
        if (!this.has(name)) {
            this.add(name, value);
        }
        return this;
    }
}
const languages1 = new StringOprionBuilder()
    .add('EN', 'English')
    .safeAdd('de', 'Deutsch');
