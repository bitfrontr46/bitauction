const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  request_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "request",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  roomName: { type: String, required: true },
});

module.exports = mongoose.model("room", roomSchema);
