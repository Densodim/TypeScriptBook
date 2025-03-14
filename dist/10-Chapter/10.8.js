import React from "react";
function Cta({ as: Component, children, ...props }) {
    return React.createElement(Component, props, children);
}
function Test() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Cta, { as: 'a', type: 'button', href: '', onClick: () => { } }, "He hey")));
}
