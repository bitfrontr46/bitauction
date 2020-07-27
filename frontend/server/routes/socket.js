const chatModel = require("../models/Chat/chat");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Connected!");

    socket.on("disconnect", () => {
      console.log("Disconnected!");
    });

    socket.on("loading", (data) => {
      chatModel
        .find({ roomName: data.roomName })
        .skip(10 * data.page)
        .limit(10)
        .sort({ _id: -1 })
        .then((roomData) => {
          console.log(roomData[0] === undefined);
          if (roomData[0] === undefined) {
            return;
          } else {
            const arr = roomData.sort(() => {
              return -1;
            });
            socket.emit("loading", arr);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });

    socket.on("joinRoom", (data) => {
      socket.join(data.roomName, () => {
        io.to(data.roomName).emit(
          "new message",
          `${data.userName}님이 입장하였습니다.`
        );
      });
    });

    socket.on("leaveRoom", (data) => {
      socket.leave(data.roomName, () => {
        io.to(data.roomName).emit(
          "new message",
          `${data.userName}님이 퇴장하였습니다.`
        );
      });
    });

    socket.on("new message", (data) => {
      let now = new Date().toTimeString().substr(0, 8);
      let realData = {
        roomName: data.roomName,
        userName: data.userName,
        message: data.message,
        created: now,
        read: false,
      };
      chatModel
        .create(realData)
        .then(() => {
          return;
        })
        .catch((err) => {
          console.log(err);
        });
      io.to(data.roomName).emit("new message", realData);
    });

    socket.on("read", (data) => {
      chatModel
        .updateMany(
          {
            userName: { $ne: data.userName },
            read: false,
            roomName: data.roomName,
          },
          { $set: { read: true } }
        )
        .then(() => {
          console.log("good?");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
};
