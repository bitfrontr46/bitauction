const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    reviews : [{type:Object}], //객체 배열을 받음
})


module.exports = mongoose.model('review', reviewSchema) 


//const Upload = mongoose.model('Upload', uploadSchema);
//module.exports = {Upload}




//별점, 설명 포함 -> 객체, 판매자 리뷰 여러개
 //string으로 받아도 됨! 

 //type:Object로 한 번에 받아버릴 때 데이터 문제?
 