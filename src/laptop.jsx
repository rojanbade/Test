import React from 'react';
import Users from './component/user';
import Forms from './component/forms/form';
// import Forms from './component/forms';

const Passions = [
    {
        id: '1',
        item: 'Sleeping'
    },
    {
        id: '2',
        item: 'Gaming'
    },
    {
        id: '3',
        item: 'Watching movie'
    },
    {
        id: '4',
        item: 'Riding'
    }
]

class Laptop extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Forms />
                {/* <Forms /> */}
                <Users name='Ajay khadgi' passion={Passions} />
            </>
        )
    }
}

export default Laptop





