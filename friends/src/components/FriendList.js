import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendList = (props) => {
    const [data, setData] = useState([]);
    const [formState, setFormState] = useState({ name: '', age: undefined, email: ''})
    const [editing, setEditing] = useState({});
    const [editId, setEditId] = useState(undefined);
    const history = useHistory();
    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then((response) => setData(response.data))
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }, [])
    useEffect(() => {
        editing && setFormState(editing);
    }, [editing])
    const submitFriend = (friend) => {
        axiosWithAuth()
            .post('/api/friends', friend)
            .then((response) => setData(response.data))
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }
    const deleteFriend = (id) => {
        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then((response) => setData(response.data))
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }
    const editFriend = (friend) => {
        axiosWithAuth()
            .put(`/api/friends/${editing.id}`, friend)
            .then((response) => {
                setData(response.data);
                setEditing({});
            })
            .catch((error) => console.error(`${error.response.status}: ${error.response.statusText}`));
    }
    const logout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }
    return (
        <>
            <button type='button' onClick={() => logout()}>Logout</button>
            <FriendForm submit={submitFriend} edit={editFriend} state={formState} setState={setFormState} editing={Object.keys(editing).length > 0 ? true : false} />
            {data.map((friend) => {
                return (
                    <Friend key={friend.id} friend={friend} delete={deleteFriend} edit={setEditing}/>
                )
            })}
        </>
    )
}

export default FriendList;