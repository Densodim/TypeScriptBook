interface HTMLElementTagNameMap {
    [x: string]: HTMLUnknownElement
}

function createElement<T extends keyof AllElements>(
    tag: T,
    props?: Partial<AllElements[T]>
): AllElements[T];
function createElement(tag: string, props?: Partial<HTMLElement>): HTMLElement {
    const elm = document.createElement(tag);
    return Object.assign(elm, props);
}

// const a  = createElement("a")
const aHref = createElement('a', {href: "https://fettblog.eu"});
const x = createElement('a', {href: "https://fettblog.eu"});
const b1 = createElement("video", {src: "/movie.mp4", autoplay: true})
const c1 = createElement("my-element")


type AllElements = HTMLElementTagNameMap & {
    [x in `${string}-${string}`]: HTMLElement;
};

type A = AllElements['a' | 'div']