import React from "react";
function Button({ onClick, children }) {
    return React.createElement("button", { onClick: onClick }, children);
}
//_____________________________
function handleClick(event) {
    console.log(event.currentTarget.tagName);
}
const btn = React.createElement(Button, { onClick: handleClick }, "Hello");
let button = React.createElement(Button, { onClick: handleClick }, "Work");
let link = React.createElement("a", { href: '/', onClick: handleClick }, "Works");
// let broken = <div onClick={handleClick}>Does not work</div> //Error
//_____________________
function onInput(event) {
    event.preventDefault();
}
const inp = React.createElement("input", { type: 'text', onInput: onInput });
