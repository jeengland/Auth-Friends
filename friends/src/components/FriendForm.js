import React, { useState } from 'react';

const FriendForm = (props) => {
    const handleChange = (event) => {
        props.setState({
            ...props.state,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.editing) {   
            props.edit(props.state);
        } else {
            props.submit(props.state);
        }
        props.setState({ name: '', age: undefined, email: ''})
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='formRow'>
                <label htmlFor='name'>Name:</label>
                <input required type='text' name='name' id='name' onChange={handleChange} value={props.state.name}/>
            </div>
            <div className='formRow'>
                <label htmlFor='age'>Age:</label>
                <input required type='number' name='age' id='age' onChange={handleChange} value={props.state.age}/>
            </div>
            <div className='formRow'>
                <label htmlFor='email'>Email:</label>
                <input required type='email' name='email' id='email' onChange={handleChange} value={props.state.email}/>
            </div>
            <button type='submit'>{ props.editing ? 'Edit' : 'Submit' }</button>
        </form>
    )
}

export default FriendForm