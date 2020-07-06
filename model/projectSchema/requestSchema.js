
const mongoose = require('mongoose');

let requestSchema = mongoose.Schema({
    title : {type:String, required:true},
    userId : {type:String, required:true}, 
    detail : {type:String, required:true},
    category : {type:String, required:true},
    uploadAt : {type:String, required:true},
    deadLine : {type:String, required:true},
    tags :[{tag : String}]
});

const RequestSchema = mongoose.model('request', requestSchema );
module.exports = RequestSchema;