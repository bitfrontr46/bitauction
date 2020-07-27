const mongoose = require("mongoose");

let reviewSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userInfo",
    required: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sellerInfo",
    required: true,
  },
  reviewText: { type: String, required: true },
  reviewImgLink: { type: String },
  star: { type: Number, require: true },
});

const Reviews = mongoose.model("review", reviewSchema);

module.exports = Reviews;
