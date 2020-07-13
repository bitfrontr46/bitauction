const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    sellerId:{type:String, required:true, unique : true },
    hashedPwd:{type:String, required:true},
    name:{type:String, required:true},
    email:{type:String, required:true},
    review : {type:mongoose.Schema.Types.ObjectId, ref:'review', required:true}
});

const SellerInfo = mongoose.model('sellerInfo', userSchema );

module.exports = SellerInfo;