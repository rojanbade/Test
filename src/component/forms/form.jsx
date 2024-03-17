import React, { useState } from "react";

function Forms(props) {
    const [fromData, setFormData] = useState({
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        axios
        e.preventDefault()
        setCar('Audi')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign UP</h1>
            <>
                <label>First name </label>
                <input name="firstName" type="text" value={fromData.firstName} onChange={handleChange} />
            </>
            <>
                <label>Last name </label>
                <input name="lastName" type="text" value={fromData.lastName} onChange={handleChange} />
            </>

            <input type="submit" />
        </form>
    )
}

export default Forms