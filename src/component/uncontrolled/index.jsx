import React from 'react';

class Uncontrolled extends React.Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.fileInput.current.files[0])
        alert('Name:' + this.fileInput.current.files[0].name)
    }

    render() {


        return (
            <form onSubmit={this.handleSubmit}>
                <input type='file' ref={this.fileInput} />

                <input type='submit' value='submit' />
            </form>
        )
    }
}
export default Uncontrolled