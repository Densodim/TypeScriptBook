//action: string[]  readonly ["CREATE", "UPDATE", "DELETE", "READ"]
const actions = ['CREATE', 'UPDATE', 'DELETE', 'READ'] as const;

function execute(action: string) {
    if (includes(actions, action)) {

    }
}

//________________ #1____________
// interface ReadonlyArray<T> {
//     includes(searchElement: any, fromIndex?: number): searchElement is T;
// }

//________________#2_________________

function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
    return coll.includes(el as T);
}