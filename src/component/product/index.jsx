import { useState } from "react";

function Product(props) {
    const [age, setAge] = useState(20)
    const [firstName, setFirstName] = useState('')

    const handleChange = () => {
        setAge(30)
    }
    return (
        <div>
            <div>
                <input type="text" />
                <input type="checkbox" /><label>Only show products in stock</label>

            </div>

            <table>
                {props.name}:
                {age}
            </table>
            <button onClick={handleChange}>Change age</button>

        </div>
    )
}

export default Product