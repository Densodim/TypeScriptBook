import {handlerName, WatchedObject} from "./6.2";

export type EventName = `on${string}`

function greet(name: string) {
    return `Hello ${name}!`
}

greet('Ivan');
console.log(greet('Ivan'));

export type EventObject<T> = {
    val: T
}

export type Callback<T = any> = (ev: EventObject<T>) => void;

type Events = {
    [x: EventName]: Callback[] | undefined
}

class EventSystem {
    events: Events;

    constructor() {
        this.events = {}
    }

    defineEventHandler(ev: EventName, cd: Callback) {
        this.events[ev] = this.events[ev] ?? []
        this.events[ev]?.push(cd)
    }

    trigger(ev: EventName, value: any) {
        let callback = this.events[ev]
        if (callback) {
            callback.forEach((cd) => {
                cd({val: value})
            })
        }
    }

    watch<T extends object>(obj: T): T & WatchedObject<T> {
        const self = this
        return new Proxy(obj, {
            get(target, property) {
                //1
                if (
                    typeof property === 'string' &&
                    property.startsWith('on') &&
                    property.endsWith('Changed')
                ) {
                    //2
                    return (cb: Callback) => {
                        self.defineEventHandler(property as EventName, cb)
                    }
                }
                //3
                return target[property as keyof T];
            },
            set(target, property, value) {
                if (property in target && typeof property === 'string') {
                    //1
                    target[property as keyof T] = value;
                    //2
                    self.trigger(handlerName(property), value)
                    return true
                }
                return false
            }
        }) as T & WatchedObject<T>;
    }
}

export const system = new EventSystem();
// system.defineEventHandler('click', ()=>{}) //Error

system.defineEventHandler('onClick', () => {
})
system.defineEventHandler('onChange', () => {
})

