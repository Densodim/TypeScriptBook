"use strict";
format("Hello {world:string}. My name is {you}, {age:number}", {
    world: "World",
    age: 38,
    you: "Ivan",
});
function format(fmtString, params) {
    let ret = fmtString;
    for (let k in params) {
        let val = `${params[k]}`;
        let searchPattern = new RegExp(`{${k}:?.*?}`, 'g');
        ret = ret.replaceAll(searchPattern, val);
    }
    return ret;
}
