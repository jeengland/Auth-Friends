import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
    const [login, setLogin] = useState({username: '', password: ''});
    const handleChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/login', login)
            .then((response) => {
                localStorage.setItem('token', response.data.payload)
            })
            .catch((error) => console.error(error.response));
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='formRow'>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username' value={login.username} onChange={handleChange}/>
            </div>
            <div className='formRow'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' value={login.password} onChange={handleChange}/>
            </div>
            <input type='submit' />
        </form>
    )
}

export default Login;