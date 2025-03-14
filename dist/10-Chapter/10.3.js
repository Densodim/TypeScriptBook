import React, { useState } from "react";
const [state, setState] = useState(0);
export const useToggle = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const toggleValue = () => setValue(!value);
    return [value, toggleValue];
};
//_____________________________
export const Body = () => {
    const [isVisible, toggleVisible] = useToggle(false);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: toggleVisible }),
        isVisible && React.createElement("div", null, "World")));
};
