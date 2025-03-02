type ElementList = {
    addClass: (className: string) => ElementList;
    removeClass: (className: string) => ElementList;
    on: (event: string, callback: (ev: Event) => void) => ElementList;
    length: number;
    [x: number]: HTMLElement;
}

declare const myCollection: ElementList;

myCollection
    .addClass('toggle-off')
    .removeClass('toggle-on')
    .on('click', (e) => {
    })

const safeAccessCollection: SafeAccess = new Proxy(myCollection, {
    get(target, property) {
        if (
            typeof property === 'string' &&
            property in target &&
            "" + parseInt(property) !== property
        ) {
            return target[property as keyof typeof target];
        }
        return undefined;
    }
})

// safeAccessCollection[0].classList.toggle('toggle-on'); //Error

type ElementListKeys = keyof ElementList;

type JustString<T> = T extends string ? T : never;

type SafeAccess = Pick<ElementList, JustString<keyof ElementList>>;

