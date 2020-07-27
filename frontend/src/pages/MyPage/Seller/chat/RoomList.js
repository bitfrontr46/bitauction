import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    border: "1px solid black",
    margin: "5px",
  },
}));

const RoomList = ({ listData }) => {
  const classes = useStyles();

  const showRoomList = listData.map((obj) => {
    return (
      <ListItem
        button
        className={classes.list}
        component={Link}
        to={{
          pathname: `/mypage/chat/inside`,
          state: {
            roomName: obj.roomName,
            request_id: obj.request_id._id,
            user_id: obj.user_id._id,
            userName: obj.user_id.userName,
          },
        }}
        key={obj._id}
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={obj.request_id.user_id.userName}
          secondary={obj.request_id.category}
        />
      </ListItem>
    );
  });

  return <List className={classes.root}>{showRoomList}</List>;
};

export default RoomList;
