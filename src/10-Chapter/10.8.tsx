import React, {JSX} from "react";

type WithChildren<T extends {}> = T & { children?: React.ReactNode };

type CtaElements = 'a' | 'button'

type CtaProps<T extends CtaElements> = WithChildren<{
    as: T
} & JSX.IntrinsicElements[T]>

function Cta<T extends CtaElements>({as: Component, children, ...props}: CtaProps<T>) {
    return React.createElement(Component, props, children);
}

function Test() {
    return (
        <>
            <Cta as={'a'} type={'button'} href={''} onClick={()=>{}}>He hey</Cta>
            {/*<Cta as={'button'} type={'button'} href={''} onClick={()=>{}}>He hey</Cta> //Error*/}
        </>
    )
}