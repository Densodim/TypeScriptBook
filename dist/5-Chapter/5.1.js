"use strict";
function createLabel(input) {
    if (typeof input === 'number') {
        return { id: input };
    }
    else if (typeof input === 'string') {
        return { name: input };
    }
    else if ("id" in input) {
        return { id: input.id };
    }
    else {
        return { name: input.name };
    }
}
function inputToLabel(input) {
    return createLabel(input);
}
