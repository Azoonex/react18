import React, { useState } from 'react'
import { produce } from 'immer'

export default function State() {
    let [count, setCounter] = useState(0)
    let [names, setNames] = useState({
        name1: "reza",
        name2: "hsane"
    })

    const [ages, setAges] = useState({
        pets: ['dog', 'cat'],
        packages: [
            { name: 'react', installed: true },
            { name: 'redux', installed: true },
        ],
    })

    function handleClick() {
        setCounter(count + 33)
        setNames({
            ...names, name2: 'amir'
        })
    }

    function chnageAges() {
        setAges(produce(draft => {
           
        }))
    }

    return (
        <div>State
            <button onClick={handleClick}>increment</button>
            {count}
            <br />
            {names.name1}
            {names.name2}
            <br />
            <button onClick={chnageAges}>chnageAges</button>
            <br />
            {ages.map(i => <li>{i}</li>)}
            {ages.pets}
        </div>
    )
}
