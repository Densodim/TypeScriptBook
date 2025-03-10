import React, {JSX, useState} from "react";
import {OnlyRequired} from "../8-Chapter/8.1";


function Input({...allProps}: InputProps) {
    return (<input {...allProps} />)
}

type ControlledProps = OnlyRequired<JSX.IntrinsicElements['input'], 'value' | 'onChange'> & {
    defaultValue?: never
}

type UncontrolledProps = Omit<JSX.IntrinsicElements['input'], 'value' | 'onChange'> & {
    defaultValue: string
    value?: never
    onChange?: never
}

type InputProps = ControlledProps | UncontrolledProps

//____________-
function AComponentUsingInput() {
    const [value, setValue] = useState('')
    return (
        <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

function Controlled() {
    const [value, setValue] = useState('')
    return <Input value={value} onChange={(e) => setValue(e.target.value)}/>
}

function Uncontrolled() {
    return <Input defaultValue='Hello'/>
}

