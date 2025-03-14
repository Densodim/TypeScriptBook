import { handlerName } from "./6.2";
function greet(name) {
    return `Hello ${name}!`;
}
greet('Ivan');
console.log(greet('Ivan'));
class EventSystem {
    events;
    constructor() {
        this.events = {};
    }
    defineEventHandler(ev, cd) {
        this.events[ev] = this.events[ev] ?? [];
        this.events[ev]?.push(cd);
    }
    trigger(ev, value) {
        let callback = this.events[ev];
        if (callback) {
            callback.forEach((cd) => {
                cd({ val: value });
            });
        }
    }
    watch(obj) {
        const self = this;
        return new Proxy(obj, {
            get(target, property) {
                //1
                if (typeof property === 'string' &&
                    property.startsWith('on') &&
                    property.endsWith('Changed')) {
                    //2
                    return (cb) => {
                        self.defineEventHandler(property, cb);
                    };
                }
                //3
                return target[property];
            },
            set(target, property, value) {
                if (property in target && typeof property === 'string') {
                    //1
                    target[property] = value;
                    //2
                    self.trigger(handlerName(property), value);
                    return true;
                }
                return false;
            }
        });
    }
}
export const system = new EventSystem();
// system.defineEventHandler('click', ()=>{}) //Error
system.defineEventHandler('onClick', () => {
});
system.defineEventHandler('onChange', () => {
});
