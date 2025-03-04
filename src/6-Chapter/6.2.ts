import {Callback, EventName, system} from "./6.1";

let person2 = {
    name: "John",
    age: 32,
}

const watchPerson = system.watch(person2)

watchPerson.onAgeChanged((ev) => {
    console.log(ev.val, 'changed age')
})

watchPerson.age = 41;

export type WatchedObject<T> = {
    [K in string & keyof T as `on${Capitalize<K>}Changed`]: (ev: Callback<T[K]>) => void
}

type WachedPerson = {
    onNameChanged: (ev: Callback<string>) => void
    onAgeChanged: (ev: Callback<number>) => void
}

function capitalize(inp: string) {
    return inp.charAt(0).toUpperCase() + inp.slice(1)
}

export function handlerName(name: string): EventName {
    return `on${capitalize(name)}Changed` as EventName
}




