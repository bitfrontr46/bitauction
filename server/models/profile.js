const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, //누구의 프로필인지 user objectID
  image: { type: String }, //이미지 링크
  text: { type: String }, //그외 설명
});

module.exports = mongoose.model("profile", profileSchema);
