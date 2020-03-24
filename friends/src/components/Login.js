import React, { useState } from 'react';

const Login = (props) => {
    const [login, setLogin] = useState({username: '', password: ''});
    const handleChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value,
        })
    }
    return (
        <form>
            <div className='formRow'>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username' value={login.username} onChange={handleChange}/>
            </div>
            <div className='formRow'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' value={login.password} onChange={handleChange}/>
            </div>
        </form>
    )
}

export default Login;