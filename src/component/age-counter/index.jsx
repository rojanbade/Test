import React from 'react'
import { useReducer } from 'react'
import { counterReducer } from '../../reducer/counterReducer'

const AgeCounter = () => {
    const [state, dispatch] = useReducer(counterReducer, { age: 27 })
    return (
        <div>
            <button onClick={() => {
                dispatch({ type: 'incremented_age' })
            }}>
                Increment age
            </button>
            <p>Hello! You are {state.age}.</p>
        </div>
    )
}

export default AgeCounter