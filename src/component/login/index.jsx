import React, { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'
import './login.css'

const Login = () => {
    const theme = useContext(ThemeContext);

    return (
        <form className={`form-${theme}`}>
            <h1>Login</h1>
            <label>Email</label>
            <input type='text' />
            <br />
            <label>Password</label>
            <input type='password' />
            <input type='submit' />
        </form>
    )
}

export default Login