

const express = require('express')
const router = express.Router();
const multer = require('multer');




//백엔드 -> 프론트 엔드로 파일 저장, 정보 전달
//Seller

var storage = multer.diskStorage({
    destination: function (req, file, cb) { //어디에 파일이 저장되는지.
      cb(null, 'uploads/') //파일이 저장될 경로
    },
    //파일명
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}_${file.originalname}`)
    }
    //함수가 호출될 때 두 번째 인자로 파일 객체 전달
  })

  var upload = multer({storage : storage }).single("file");

  //api/product/image
  router.post('/image', (req,res)=>{
    upload(req,res, err =>{
      if(err){
        return res.json({success: false, err});
      }
      return res.json({ //결과값을 보낼 때 res
        success: true,
        filePath: res.req.file.path,
        fileName: res.req.file.filename,
      });
    });
  });
  

module.exports = router;


  //router를 통해 index.js에서 사용 가능
  
//받아온 이미지 정보 db에 저장하기
