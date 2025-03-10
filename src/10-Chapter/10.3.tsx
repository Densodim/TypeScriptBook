import React, {useState} from "react";

const [state, setState] = useState(0)

export const useToggle = (initialValue: boolean) => {
    const [value, setValue] = useState(initialValue);
    const toggleValue = () => setValue(!value)
    return [value, toggleValue] as const
}


//_____________________________
export const Body = () => {
    const [isVisible, toggleVisible] = useToggle(false);
    return (
        <>
            <button onClick={toggleVisible}></button>

            {isVisible && <div>World</div>}
        </>
    )
}