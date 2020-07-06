const mongoose = require('mongoose');
let reviewSchema = mongoose.Schema({
    author : {type:String, required:true}, 
    buyerId : {type:String, required:true}, 
    reviewText : {type:String, required:true},
    reviewImgLink : {type:String},
    star : {type: Number, require:true}
});