import { createContext, useContext, useState } from "react";

const Context = createContext()

export const PlayProvider = ({ children }) => {
    const [play, setPlay] = useState(false)
    const [hasScroll, setHasScroll] = useState(false)
    const [end, setEnd] = useState(false)
    const [scrollMoment, setScrollMoment] = useState(0)

    return (
        <Context.Provider
            value={{play, setPlay, hasScroll, setHasScroll, end, setEnd, scrollMoment, setScrollMoment}}
        >
            {children}
        </Context.Provider>
    )
}


export const usePlay = () => {
    const context = useContext(Context)

    if(context === undefined) {
        throw new Error("usePlay must be used within a Play")
    }

    return context
}