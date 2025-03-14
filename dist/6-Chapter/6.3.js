"use strict";
format("Hello {world}. My name is {you}", {
    world: "World",
    you: "Ivan",
});
function format(fmtString, params) {
    let ret = fmtString;
    for (let k in params) {
        ret = ret.replaceAll(`{${k}}`, params[k]);
    }
    return ret;
}
console.log(format("Hello {world}. My name is {you}", {
    world: "World",
    you: "Ivan",
}));
