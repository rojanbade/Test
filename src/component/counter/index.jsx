import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../redux/slice/counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [data, setData] = useState(0)

    const handleChange = (e) => {
        setData(e.target.value)
    }

    return (
        <>
            <button onClick={() => dispatch(increment())}>+</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>-</button>

            <input type='number' value={data} onChange={handleChange} />
            <button onClick={() => dispatch(incrementByAmount(parseFloat(data)))}>Add value</button>
        </>
    )
}

export default Counter