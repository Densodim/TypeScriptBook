"use strict";
function reset(filter) {
    if ('combinator' in filter) {
        return { combinator: 'and', rules: [] };
    }
    return { rules: [] };
}
const filter = { combinator: 'or', rules: [] };
const resetFilter = reset(filter);
//////
// function reset1<F extends Filter>(filter: F): F {
//     if ('combinator' in filter) {
//         return {combinator: 'and', rules: []}
//     }
//     return {rules: []}
// } //Error
//////
function reset2(filter) {
    const result = { ...filter };
    result.rules = [];
    if ('combinator' in result) {
        result.combinator = 'and';
    }
    return result;
}
const resultFilter2 = reset2(filter);
// function createRootItem<T extends TreeItem>():T {
//     return {id:'root', children:[]}
// } //Error
function createRootItem() {
    return { id: 'root', children: [] };
}
function attachRoot(children) {
    return { id: 'root', children };
}
const root = attachRoot([]);
////////////
function attachRoot1(children) {
    return { id: 'root', children };
}
const root2 = attachRoot([
    {
        id: 'child',
        children: [],
        collapsed: false,
    }
]);
