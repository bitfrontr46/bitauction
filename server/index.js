const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/dev");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api", require("./routes/index"));

const port = 4000;
app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
