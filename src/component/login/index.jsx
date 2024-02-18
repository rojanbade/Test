import React from 'react'

const Login = () => {
    return (
        <form>
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