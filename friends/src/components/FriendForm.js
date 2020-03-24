import React, { useState } from 'react';

const FriendForm = (props) => {
    const [state, setState] = useState({ name: '', age: undefined, email: ''})
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit(state);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='formRow'>
                <label htmlFor='name'>Name:</label>
                <input required type='text' name='name' id='name' onChange={handleChange} value={state.name}/>
            </div>
            <div className='formRow'>
                <label htmlFor='age'>Age:</label>
                <input required type='number' name='age' id='age' onChange={handleChange} value={state.age}/>
            </div>
            <div className='formRow'>
                <label htmlFor='email'>Email:</label>
                <input required type='email' name='email' id='email' onChange={handleChange} value={state.email}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default FriendForm