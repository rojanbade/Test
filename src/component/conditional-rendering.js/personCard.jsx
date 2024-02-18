import React from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card">
                <h1>{this.props.person.name}</h1>
                <p>Age: {this.props.person.age}</p>
                <h3>{this.props.person.isMarried}</h3>
                <h4>Nepali weight: {this.props.person.weight.Nepali}</h4>
            </div>
        )
    }
}

export default PersonCard