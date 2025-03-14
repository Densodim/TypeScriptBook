"use strict";
function groupToys(toys) {
    const groups = {};
    for (let toy of toys) {
        groups[toy.kind] = groups[toy.kind] ?? [];
        groups[toy.kind]?.push(toy);
    }
    return groups;
}
