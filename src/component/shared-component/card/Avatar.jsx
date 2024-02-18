import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/themeContext";
import './avatar.css'
import axios from "axios";

function Avatar(props) {
    const theme = useContext(ThemeContext)

    const [name, setName] = useState('hero')
    const [age, setAge] = useState()
    const [phone, setPhone] = useState()
    const [id, setId] = useState(1)

    function handleIdChange() {
        setId(id++)
    }

    useEffect(() => {
        axios.get(`https://post/${id}`).then().catch()
    }, [id])

    useEffect(() => {
        map(lat, lan)
    }, [lat, lan])

    useEffect(() => {
        document.title(name, age)
    })
    return (
        <div>
            <img src={props.user.imageUrl} alt="avatar" style={{ width: '60px', height: '60px' }} />
            <h3 className={`title-${theme}`}>{props.user.firstName} {props.user.lastName}</h3>
            <ul>
                <li>{props.user.email}</li>
                <li>{props.user.contact}</li>
            </ul>

            <button >asd</button>
        </div>
    )
}

export default Avatar;