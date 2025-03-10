import React, {JSX} from "react";

type ButtonProps = Omit<JSX.IntrinsicElements["button"], 'type'>

function Button(props: ButtonProps) {
    return <button type="button" {...props}/>
}

// const aButton = <Button type="button">Hi</Button>//Error

//______________________

type SubmitButton = Omit<JSX.IntrinsicElements["button"], 'type'>

function SubmitButton(props: SubmitButton) {
    return <button type="submit" {...props}/>
}

//____________________________

type StyledButton = Omit<JSX.IntrinsicElements['button'], 'type' | 'className' | 'style'> & {
    type: "primary" | "secondary"
}

function StyledButton({type, ...allProps}: StyledButton) {
    return <Button className={`btn-${type}`}{...allProps}/>
}

//__________________

type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

type ImgProps = MakeRequired<JSX.IntrinsicElements['img'], 'alt' | 'src'>

export function Img(props: ImgProps) {
    return <img {...props}/>
}

const aImage = <Img src='10.1.tsx' alt='fdfd'/>