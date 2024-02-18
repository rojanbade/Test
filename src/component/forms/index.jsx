import React from "react";

class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            firstName: '',
            lastName: '',
            age: 0,
            email: '',
            address: '',
            citizenship: ''
        }
    }

    handleChange = (e) => {

        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <>
                    <label>First name </label>
                    <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                </>
                <>
                    <label>Last name </label>
                    <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
                </>
                <>
                    <label>Age </label>
                    <input name="age" type="number" value={this.state.age} onChange={this.handleChange} />
                </>
                <>
                    <label>Email </label>
                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                </>
                <>
                    <label>Address </label>
                    <input name="address" type="text" value={this.state.address} onChange={this.handleChange} />
                </>
                <>
                    <label>Citizenship number </label>
                    <input name="citizenship" type="number" value={this.state.citizenship} onChange={this.handleChange} />
                </>

                <input type="submit" />
            </form>
        )
    }
}

export default Forms;