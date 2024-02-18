import Navigation from "../../naviagtion";

function Calculator() {

    const name = 'Ram milan';

    const user = {
        firstName: 'rabin ram',
        lastName: 'thakur',
        car: 'vespa'
    }

    function play() {
        return 'I am player'
    }
    return (
        <div>
            <h1>
                Calculator
            </h1>
            <p>
                {name}
            </p>
            <ul>
                <li>{user.firstName + '' + user.lastName}</li>
                <li>{user.car}</li>
                <li>{play()}</li>
            </ul>
        </div>
    )
}

function Paper() {

    const name = 'Ram milan';

    const user = {
        firstName: 'rabin ram',
        lastName: 'thakur',
        car: 'vespa'
    }

    function play() {
        return 'I am player'
    }
    return (
        <div>
            <h1>
                <Navigation />
                Calculator
            </h1>
            <p>
                {name}
            </p>
            <ul>
                <li>{user.firstName + '' + user.lastName}</li>
                <li>{user.car}</li>
                <li>{play()}</li>
            </ul>
        </div>
    )
}

export { Calculator, Paper }