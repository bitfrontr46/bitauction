const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const chat = require("./routes/socket");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://young:3195@cluster0-cafds.mongodb.net/Action?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

let db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connected!!");
});
db.on("error", (err) => {
  console.log(err);
});

const roomModel = require("./models/Chat/room");


chat(io);

app.post("/roomList", (req, res) => {
  roomModel
    .find({ user_id: req.body.user_id })
    .populate({
      path: "request_id",
      populate: { path: "user_id", select: "userName" },
    })
    .populate("user_id", "userName")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});




app.use("/api", require("./routes/index"));
app.use('/api/upload', require('./controller/upload'));
app.use('/uploads', express.static('uploads')) 
//uploads 폴더에 저장되어있는 이미지를 가져올 때 사용.
//express.static을 이용해서 uploads 파일을 공유할 수 있게 한다
//이미지,파일과 같은 정적 파일을 제공할 때 express.static을 사용하면 편리함

// const fileUpload = require('express-fileupload');
// app.use(fileUpload());




http.listen(4000, () => {
  console.log("Server is Running... http://localhost:4000");
});

