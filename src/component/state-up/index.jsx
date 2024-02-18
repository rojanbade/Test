import React from "react";
import StateForm from "./stateForm";


class StateUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        }
    }

    handleChange = (temp) => {
        this.setState({
            temperature: temp
        })
    }

    render() {
        return (
            <>
                <h1>parent</h1>
                <p>{this.state.temperature} rendered in parent</p>

                <StateForm temperature={this.state.temperature} onTemperatureChange={this.handleChange} />
            </>
        )
    }
}

export default StateUp;