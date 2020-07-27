const mongoose = require("mongoose");

let biddingSchema = mongoose.Schema({
  request_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "request",
    required: true,
  }, // 어느 리퀘스트인지 request의 ObjectID
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // 누가 입찰 했는가 판매자의 ObjectID
  price: { type: Number, required: true }, //가격
});

module.exports = mongoose.model("bidding", biddingSchema);
