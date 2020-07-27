import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import RoomList from "./RoomList";
import { CircularProgress } from "@material-ui/core";

const Main = () => {
  const user_id = useSelector((state) => state.userAction.user_id);
  const [listData, setListData] = useState([]);
  const [is_loading, setLoading] = useState(true);
  const loadingStyle = {
    display: "block",
    margin: "18% auto",
  };

  useEffect(() => {
    const fetchlistData = async () => {
      await Axios.post("http://localhost:4000/roomList", { user_id: user_id })
        .then((res) => {
          setListData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchlistData();
    return () => setListData([]);
  }, [user_id]);

  return (
    <div>
      {is_loading ? (
        <CircularProgress style={loadingStyle} />
      ) : (
        <RoomList listData={listData} />
      )}
    </div>
  );
};

export default Main;
