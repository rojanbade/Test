import React from "react";
import { Calculator } from "../calculator/calculator";
import PersonCard from "./personCard";


const user = [
    {
        id: 1,
        name: 'hari',
        age: 18,
        isMarried: false,
        weight: {
            US: 150,
            Nepali: 60
        }
    },
    {
        id: 2,
        name: 'sita',
        age: 19,
        isMarried: false,
        weight: {
            US: 100,
            Nepali: 47
        }
    },
    {
        id: 3,
        name: 'hari',
        age: 18,
        isMarried: false,
        weight: {
            US: 150,
            Nepali: 60
        }
    },

]

class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
        }
    }

    // handleClick = () => {

    // }

    render() {
        return (
            <>
                {/* <h1>Conditional rendering</h1>

                {this.state.isLogin ?
                    <Calculator /> :
                    <h1>Please login</h1>
                } */}

                <div style={{ display: 'flex' }}>

                    {
                        user.map((person) => {
                            return (
                                <PersonCard person={person} key={person.id} />
                            )
                        })
                    }

                </div>

            </>
        )
    }
}

export default ConditionalRendering;