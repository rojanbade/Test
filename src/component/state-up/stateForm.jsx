import React from "react";

class StateForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        return (
            <>
                <h1>Child</h1>
                <input type="text" value={this.props.temperature} onChange={this.handleChange} />
            </>
        )
    }

}

export default StateForm;