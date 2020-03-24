import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendList = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then((response) => setData(response.data))
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }, [])
    const submitFriend = (friend) => {
        axiosWithAuth()
            .post('/api/friends', friend)
            .then((response) => setData(response.data))
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }
    return (
        <>
            <FriendForm submit={submitFriend}/>
            {data.map((friend) => {
                return (
                    <Friend key={friend.id} friend={friend} />
                )
            })}
        </>
    )
}

export default FriendList;