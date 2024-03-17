import { current } from "@reduxjs/toolkit";
import { useCallback, useMemo, useRef, useState } from "react"

function Calculator() {

    const inputRef = useRef(0);



    const add = useCallback(function addition(a, b) {
        return a + b
    }, [a, b])

    const value = useMemo((a, b) => {
        return a + b
    }, [a, b])




    return (
        <div>
            <h1>{value}</h1>
            <h1>{inputRef.current}</h1>
            <button onClick={add(10, 2)}>Add me</button>
        </div>
    )

}

export default Calculator;

