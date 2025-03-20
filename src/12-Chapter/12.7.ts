import {KeyboardEventHandler, MouseEventHandler} from "react";

type SearchArguments =
    | [query: string, callback: (results: unknown[]) => void]
    | [query: string]

type ReturnSearch<T> = T extends [query: string]
    ? Promise<Array<unknown>>
    : void

declare function search<T extends SearchArguments>(...args: T): ReturnSearch<T>;

const z = search("omikron", (res) => {
})
const y = search("omikron")

//__________________________________--

function search1(query: string): Promise<unknown[]>;
function search1(query: string, callback: (result: unknown[]) => void): void;
function search1(
    query: string,
    callback?: (result: unknown[]) => void
): void | Promise<unknown> {

}

//__________________________________

// type Handler =
//     | MouseEventHandler<HTMLButtonElement>
//     | KeyboardEventHandler<HTMLButtonElement>
//
// type Ev<T> = T extends MouseEventHandler<infer R>
//     ? MouseEvent<R>
//     : T extends KeyboardEventHandler<infer R>
//         ? KeyboardEvent<R>
//         : never
//
