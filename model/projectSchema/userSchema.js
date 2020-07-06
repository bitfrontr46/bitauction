const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    userId:{type:String, required:true},
    hashedPwd:{type:String, required:true},
    name:{type:String, required:true},
    email:{type:String, required:true},
});

const UserInfo = mongoose.model('userInfo', userSchema );

module.exports = UserInfo;

