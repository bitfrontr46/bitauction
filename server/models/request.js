const mongoose = require('mongoose');

let requestSchema = mongoose.Schema({
    author : {type:mongoose.Schema.Types.ObjectId, ref:'user', required:true}, //작성자 (구매자의 ObjectID)
    detail : {type:String, required:true},
    category : {type:String, required:true},
    uploadAt : {type:String, required:true},
    deadLine : {type:Number, required:true}, // 경매 마감일
    hopeDate : {type:String, required:true}, // 희망 작업 완료일
    tags :[{type : String}]
});

module.exports = mongoose.model('request', requestSchema );