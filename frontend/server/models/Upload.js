
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uploadSchema = mongoose.Schema({
    //판매자 아이디
   
    title  : { //제목
        type : String,
        maxlength : 50
    },

    profile : { //프로필(상세 설명)
        type : String,
    },

    images : { //이미지
        type : Array,
        default :[]
    },
    
     imageurl : {
         type : String, //이미지 경로 저장
    //     default : "https://project-portfolio-upload.s3.ap-northeast-2.amazonaws.com/uploads/"
     }
    //url는 string


})

const Upload = mongoose.model('Upload', uploadSchema);
module.exports = {Upload}
//exports 
