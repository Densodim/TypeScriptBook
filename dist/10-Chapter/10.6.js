import React from "react";
function Card({ content, title }) {
    return (React.createElement(React.Fragment, null,
        React.createElement("h2", null, title),
        React.createElement("div", null, content)));
}
// <Card title='Info' content='Your task has been processed'/>
const Info = withInjectedProps({ title: "Info" }, Card);
React.createElement(Info, { content: 'Your task has been processed' });
function withInjectedProps(injected, Component) {
    return function (props) {
        const newProps = { ...injected, ...props };
        return React.createElement(Component, { ...newProps });
    };
}
function withTitle(title, Component) {
    return withInjectedProps({ title }, Component);
}
const CardTitle = withTitle('fdfsdf', Card);
React.createElement(CardTitle, { content: 'vxvxcvxcvxcv' });
