import React, {createRef, forwardRef, JSX} from "react";

const Button2 = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <button type='button' {...props} ref={ref}>
        {props.children}
    </button>
))

type ButtonProps = JSX.IntrinsicElements['button']

const reference = createRef<HTMLButtonElement>();
<Button2 className='primary' ref={reference}>Hello</Button2>