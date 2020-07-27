import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Input, Container, Button } from "@material-ui/core";
import ChatList from "./ChatList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
  myChat: {
    float: "right",
  },
  container: {
    webkitScrollbar: {
      background: "transparent",
    },
    backgroundColor: "skyblue",
    width: "100%",
    height: "700px",
    overflowY: "scroll",
    overflowX: "hidden",
    margin: "auto",
  },
}));

function ChatBox(props) {
  const classes = useStyles();

  const [message, setMessage] = useState("");

  const [messageList, setMessageList] = useState([]);

  const [userInfo] = useState(props.location.state);

  const [page, setPage] = useState(1);

  const objDiv = useRef();

  const socket = useRef();

  const showChatList = messageList.map((data, i) => {
    return <ChatList key={i} data={data} userInfo={userInfo} />;
  });

  useEffect(() => {
    const startChat = () => {
      socket.current = io("http://localhost:4000");
      socket.current.emit("loading", { ...userInfo, page: 0 });
      socket.current.emit("joinRoom", userInfo);
      socket.current.emit("read", userInfo);
      socket.current.on("new message", (data) => {
        setMessageList((messageList) => [...messageList, data]);
        objDiv.current.scrollTop = objDiv.current.scrollHeight;
      });
      socket.current.on("loading", (data) => {
        console.log("load", data);
        setMessageList((messageList) => [...data, ...messageList]);
        objDiv.current.scrollTop = objDiv.current.scrollHeight / 2;
      });
    };
    startChat();
    return () => {
      socket.current.disconnect();
      socket.current.emit("leaveRoom", userInfo);
    };
  }, [userInfo]);

  useEffect(() => {
    objDiv.current.scrollTop = objDiv.current.scrollHeight;
  }, []);

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onSubmitForm = (e) => {
    if (e.keyCode === 13)
      if (!e.shiftKey) {
        if (message) {
          e.preventDefault();
          socket.current.emit("new message", {
            ...userInfo,
            message: message,
          });
          setMessage("");
        } else {
          e.preventDefault();
          return;
        }
      }
  };

  const onClickForm = () => {
    if (message) {
      socket.current.emit("new message", {
        ...userInfo,
        message: message,
      });
      setMessage("");
    } else {
      return;
    }
  };

  const handleScroll = (e) => {
    if (e.target.scrollTop === 0) {
      setPage(page + 1);
      setTimeout(
        socket.current.emit("loading", { ...userInfo, page: page }),
        500
      );
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container
        onScroll={handleScroll}
        ref={objDiv}
        className={classes.container}
      >
        <List className={classes.root}>{showChatList}</List>
      </Container>
      <form onKeyDown={onSubmitForm}>
        <Input
          style={{ width: "93%" }}
          rowsMax={4}
          multiline
          value={message}
          onChange={onChangeMessage}
        />
        <Button style={{ backgroundColor: "yellow" }} onClick={onClickForm}>
          보내기
        </Button>
      </form>
    </div>
  );
}

export default ChatBox;
