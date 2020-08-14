import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import Landing from '../../Landing/Landing'
import UploadPage from '../../UploadPage/UploadPage';
import Button from '@material-ui/core/Button';

const Profile = () => {
  const user_id = useSelector((state) => state.userAction.user_id);
  const [myProfile, setProfile] = useState({});

  useEffect(() => {
    Axios.post("http://localhost:4000/api/myProfile", { user_id: user_id })
      .then((res) => {
        console.log(user_id);
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <Landing></Landing>
  

    </div>
  );
};

export default Profile;
