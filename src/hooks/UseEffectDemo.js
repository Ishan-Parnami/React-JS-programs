import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [message, setmessage] = useState("Hi How are you")
    useEffect(() => {
        setTimeout(() => {
            setmessage("I am fine")
        }, 2000)
    })
    return (
        <div>
            <h1>UseState and UseEffect Demo</h1>
            <h3>{message}</h3>
        </div>
    )
}

export default UseEffectDemo