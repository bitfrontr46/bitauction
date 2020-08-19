const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    reviews : [{type:Object}], //객체 배열을 받음
})

module.exports = mongoose.model('review', reviewSchema)