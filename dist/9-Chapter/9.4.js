"use strict";
//action: string[]  readonly ["CREATE", "UPDATE", "DELETE", "READ"]
const actions = ['CREATE', 'UPDATE', 'DELETE', 'READ'];
function execute(action) {
    if (includes(actions, action)) {
    }
}
//________________ #1____________
// interface ReadonlyArray<T> {
//     includes(searchElement: any, fromIndex?: number): searchElement is T;
// }
//________________#2_________________
function includes(coll, el) {
    return coll.includes(el);
}
