const mongoose = require("mongoose");

let requestSchema = mongoose.Schema({
  userId: { type: String, required: true },
  // userId : {type:mongoose.Schema.Types.ObjectId, ref:'userInfo', required:true},
  detail: { type: String, required: true },
  category: { type: String, required: true },
  uploadAt: { type: String, required: true },
  deadLine: { type: Number, required: true },
  tags: [{ type: String }],
});

const RequestSchema = mongoose.model("request", requestSchema);
module.exports = RequestSchema;
