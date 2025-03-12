import React from "react";

type WithChildren<T = {}> = T & { children?: React.ReactNode }

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
} & WithChildren

function Button({onClick, children}: ButtonProps) {
    return <button onClick={onClick}>{children}</button>
}

//_____________________________
function handleClick(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    console.log(event.currentTarget.tagName);
}

const btn = <Button onClick={handleClick}>Hello</Button>
let button = <Button onClick={handleClick}>Work</Button>
let link = <a href='/' onClick={handleClick}>Works</a>

// let broken = <div onClick={handleClick}>Does not work</div> //Error
//_____________________


function onInput(event: React.SyntheticEvent) {
    event.preventDefault()

}

const inp = <input type={'text'} onInput={onInput}/>

