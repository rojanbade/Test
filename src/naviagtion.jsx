import './navigation.css'
import { Link } from "react-router-dom";

function Navigation() {

    const user = {
        name: 'paras',
        age: 20,
        address: 'rukum'
    }

    const menu = [
        {
            id: 1,
            title: 'Home'
        },
        {
            id: 2,
            title: 'Service'
        },
        {
            id: 3,
            title: 'About'
        }
    ]

    return (
        <div>
            <Link to='/youtube'>Youtube</Link>
            <h1>{user.name}</h1>
            <ul>
                {
                    menu.map((item) => {
                        return (
                            <li>{item.title}</li>
                        )
                    })
                }
            </ul>

            <div>
                <div></div>

            </div>
        </div>


    )
}

export default Navigation;