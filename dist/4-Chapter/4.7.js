"use strict";
function createElement(tag, props) {
    const elm = document.createElement(tag);
    return Object.assign(elm, props);
}
// const a  = createElement("a")
const aHref = createElement('a', { href: "https://fettblog.eu" });
const x = createElement('a', { href: "https://fettblog.eu" });
const b1 = createElement("video", { src: "/movie.mp4", autoplay: true });
const c1 = createElement("my-element");
