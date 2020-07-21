const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    userEmail: { type: String, required: true, unique: true },
    userPassword: { type: String, required: true },
    is_seller: { type: Boolean, required: TextTrackCue}, // true : 판매자 , false : 구매자
});

module.exports = mongoose.model('user', userSchema);
