import React from "react";
function Button(props) {
    return React.createElement("button", { type: "button", ...props });
}
function SubmitButton(props) {
    return React.createElement("button", { type: "submit", ...props });
}
function StyledButton({ type, ...allProps }) {
    return React.createElement(Button, { className: `btn-${type}`, ...allProps });
}
export function Img(props) {
    return React.createElement("img", { ...props });
}
const aImage = React.createElement(Img, { src: '10.1.tsx', alt: 'fdfd' });
