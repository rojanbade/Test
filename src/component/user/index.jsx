import React from 'react';
import PropTypes from 'prop-types';

class Users extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, passion } = this.props;
        return (
            <>
                <h1>{name}</h1>
                <h2>Passion</h2>
                <ul>
                    {
                        passion.map((data) => {
                            return (
                                <li key={data.id}>{data.item}</li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

Users.propTypes = {
    name: PropTypes.string,
    passion: PropTypes.array
}

export default Users





