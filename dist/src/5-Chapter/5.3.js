"use strict";
// function groupToys1(toys: Toy[]): GroupedToys1 {
//     const groups: GroupedToys1 = {}
//
//     for (let toy of toys) {
//         (groups[toy.kind] as Toy[]) = groups[toy.kind] ?? [];
//         (groups[toy.kind] as Toy[])?.push(toy);
//     }
//
//     return groups;
// }
function groupToys1(toys) {
    const groups = {};
    for (let toy of toys) {
        assing(groups, toy.kind, toy);
    }
    return groups;
}
function assing(groups, key, value) {
    groups[key] = groups[key] ?? [];
    groups[key]?.push(value);
}
