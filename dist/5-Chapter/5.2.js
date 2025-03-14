"use strict";
myCollection
    .addClass('toggle-off')
    .removeClass('toggle-on')
    .on('click', (e) => {
});
const safeAccessCollection = new Proxy(myCollection, {
    get(target, property) {
        if (typeof property === 'string' &&
            property in target &&
            "" + parseInt(property) !== property) {
            return target[property];
        }
        return undefined;
    }
});
