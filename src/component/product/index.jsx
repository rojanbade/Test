import { useState } from "react";
import PropTypes from 'prop-types'

function Product(props) {
    const [age, setAge] = useState(20)

    const handleChange = () => {
        setAge((prevState) => prevState + 1)
    }

    return (
        <div>

            {props.name}
            <br />
            {age}
            <br />

            <button onClick={handleChange}>Change age</button>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string
}

export default Product