//_________________
// type SetOptional<T, K extends keyof T> = {
//     [P in K]?: T[P];
// } & {
//     [P in Exclude<keyof T, K>]: T[P];
// }
const test4 = {
    name: 'Ivan',
};
export {};
