import React, { useState } from "react";
function Input({ ...allProps }) {
    return (React.createElement("input", { ...allProps }));
}
//____________-
function AComponentUsingInput() {
    const [value, setValue] = useState('');
    return (React.createElement(Input, { value: value, onChange: (e) => setValue(e.target.value) }));
}
function Controlled() {
    const [value, setValue] = useState('');
    return React.createElement(Input, { value: value, onChange: (e) => setValue(e.target.value) });
}
function Uncontrolled() {
    return React.createElement(Input, { defaultValue: 'Hello' });
}
