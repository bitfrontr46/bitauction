import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

const Profile = () => {

    const user_id = useSelector(state => state.userAction.user_id);
    const [myProfile,setProfile] = useState({});

    useEffect(()=>{
        Axios.post('http://localhost:4000/api/myProfile', {user_id : user_id})
        .then(res => {
            console.log(user_id);
            console.log(res.data);
            setProfile(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    return(
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;