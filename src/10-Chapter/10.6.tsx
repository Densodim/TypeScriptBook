import React from "react";

type CardProps = {
    title: string
    content: string
}

function Card({content, title}: CardProps) {
    return (
        <>
            <h2>{title}</h2>
            <div>{content}</div>
        </>
    )
}

// <Card title='Info' content='Your task has been processed'/>

const Info = withInjectedProps({title: "Info"}, Card);
<Info content='Your task has been processed'/>

function withInjectedProps<T extends {}, U extends T>(
    injected: T,
    Component: React.ComponentType<U>
) {
    return function (props: Omit<U, keyof T>) {
        const newProps = {...injected, ...props} as U;
        return <Component {...newProps}/>
    }
}

function withTitle<U extends { title: string }>(
    title: string,
    Component: React.ComponentType<U>
) {
    return withInjectedProps({title}, Component)
}

const CardTitle = withTitle('fdfsdf', Card);
<CardTitle content='vxvxcvxcvxcv'/>