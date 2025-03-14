import React, { createRef, forwardRef } from "react";
const Button2 = forwardRef((props, ref) => (React.createElement("button", { type: 'button', ...props, ref: ref }, props.children)));
//____________________
const reference = createRef();
//____________________
// type ClickableListProps<T> = {
//     items: T[]
//     onSelect: (item: T) => void
//     mRef?: Ref<HTMLUListElement> | null
// }
// function ClickableList<T>({mRef, ...props}: ClickableListWithRefProps<T>) {
//     return null
// }
const items = [1, 2, 3, 4, 5];
function ClickableListInner(props, ref) {
    return (React.createElement("ul", { ref: ref }, props.items.map((item, i) => (React.createElement("li", { key: i },
        React.createElement("button", { onClick: (el) => props.onSelect(item) }, "Select"))))));
}
export const ClickableList = React.forwardRef(ClickableListInner);
