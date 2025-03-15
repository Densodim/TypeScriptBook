"use strict";
function logField(value, contex) {
    return function (initialValue) {
        console.log(`Initializing ${contex.name.toString()} to ${initialValue}`);
        return initialValue;
    };
}
function logDec(value, context) {
    return function (...args) {
        console.log(`calling ${context.name.toString()}`);
        const val = value.call(this, ...args);
        console.log(`calling ${context.name.toString()}: ${val}`);
        return val;
    };
}
function isPromise(val) {
    return (typeof val === 'object' &&
        val &&
        "then" in val &&
        typeof val.then === "function");
}
function logMethod(value, context) {
    return function (...args) {
        console.log(`calling ${context.name.toString()}`);
        const val = value.call(this, ...args);
        if (isPromise(val)) {
            val.then((p) => {
                console.log(`calling ${context.name.toString()}: ${p}`);
                return p;
            });
        }
        else {
            console.log(`calling ${context.name.toString()}: ${val}`);
        }
        return val;
    };
}
class ToggleDec {
    @logField
    #toogled = false;
    @logMethod
    toogle() {
        this.#toogled = !this.#toogled;
    }
}
const toogle = new ToggleDec();
toogle.toogle();
