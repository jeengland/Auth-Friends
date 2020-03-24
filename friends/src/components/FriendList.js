import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';

const FriendList = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then((response) => setData(response.data))
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }, [])
    return (
        <>
            {data.map((friend) => {
                return (
                    <Friend friend={friend} />
                )
            })}
        </>
    )
}

export default FriendList;