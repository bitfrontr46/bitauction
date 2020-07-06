const mongoose = require('mongoose');

let biddingSchema = mongoose.Schema({
    requestId : {type:String, required : true},
    userId : {type : String, required : true},
    price : {type:Number, required:true},
    optionText : {type:String, required:true},
    isSuccess : {type:Boolean, default : false}
});

const BiddingSchema = mongoose.model('bidding', biddingSchema );

module.exports = BiddingSchema;

