const mongoose = require("mongoose");

let biddingSchema = mongoose.Schema({
  requestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "request",
    required: true,
  }, //해당 구매 글
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "sellerInfo" }, //유저가 seller정보를 볼 수 있도록
  price: { type: Number, required: true }, //가격
});

const BiddingSchema = mongoose.model("bidding", biddingSchema);

module.exports = BiddingSchema;
