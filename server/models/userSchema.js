const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
});

const UserInfo = mongoose.model("userInfo", userSchema);

module.exports = UserInfo;
