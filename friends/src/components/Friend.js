import React from 'react';

const Friend = ({ friend }) => {
    return (
        <div className='friend'>
            <h2>{friend.name}</h2>
            <p className='age'>Age: {friend.age}</p>
            <p className='email'>{friend.email}</p>
        </div>
    )
}

export default Friend;