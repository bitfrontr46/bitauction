const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  roomName: { type: String, required: true },
  userName: { type: String, required: true },
  message: { type: String },
  created: { type: String, required: true },
  read: { type: Boolean, required: true },
});

module.exports = mongoose.model("chat", chatSchema);
