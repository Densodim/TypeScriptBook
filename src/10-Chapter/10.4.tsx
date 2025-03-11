import React, {createRef, forwardRef, JSX, Ref} from "react";

const Button2 = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <button type='button' {...props} ref={ref}>
        {props.children}
    </button>
))

type ButtonProps = JSX.IntrinsicElements['button']

//____________________
const reference = createRef<HTMLButtonElement>();


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


//_________________________________
// function ClickableListInner<T>(
//     props: ClickableListProps<T>,
//     ref: ForwardedRef<HTMLUListElement>
// ) {
//     return (
//         <ul ref={ref}>
//             {props.items.map((item, index) => (
//                 <li key={index}>
//                     <button onClick={(el) => props.onSelect(item)}>Select</button>
//                 </li>
//             ))}
//         </ul>
//     )
// }
//
// const ClickableListWithRef = forwardRef(ClickableListInner);
//
// type ClickableListWithRefProps<T> = ClickableListProps<T> & {
//     mRef?: Ref<HTMLUListElement>
// }

//_________________________________

declare module 'react' {
    function forwardRef<T, P = {}>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}

type ClickableListProps<T> = {
    items: T[]
    onSelect: (item: T) => void
}

function ClickableListInner<T>(props: ClickableListProps<T>, ref: React.ForwardedRef<HTMLUListElement>) {
    return (
        <ul ref={ref}>
            {props.items.map((item, i)=>(
                <li key={i}>
                    <button onClick={(el)=>props.onSelect(item)}>Select</button>
                </li>
            ))}
        </ul>
    )
}

export const ClickableList = React.forwardRef(ClickableListInner)