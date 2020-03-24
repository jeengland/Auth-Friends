import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendList = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then((response) => setData(response.data))
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }, [])
    return (
        <h1>Hello from Friend List</h1>
    )
}

export default FriendList;