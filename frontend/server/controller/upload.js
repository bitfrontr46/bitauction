
const aws = require('aws-sdk')
const express = require('express')
const multer = require('multer');
const multerS3 = require('multer-s3')
const path = require("path");
const AWS = require("aws-sdk");

const router = express.Router();
const {Upload} = require('../models/Upload');


//백엔드 -> 프론트 엔드로 파일 저장, 정보 전달
// 파일을 로컬이 아닌 aws에 저장하기 위해서 multer s3 사용


let s3 = new AWS.S3(); 

//옵션 설정




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
  //multer s3으로 설정


  // var upload = multer({
  //   storage : multerS3({
  //     s3,
  //     acl:"",
  //     bucket: "project-portfolio-uploads"
  //   })
  // })
  


  //api/product/image
  router.post('/image', (req,res)=>{
    //가져온 이미지를 저장을 해주면 됨
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

  router.post('/', (req,res)=>{
    //index에서 api/upload로 맞춰줬기 때문에 /로 생략 가능!
    //받아온 정보들을 DB에 넣어줌(body)
    
    const upload = new Upload(req.body)
    upload.save((err)=>{
      if(err) return res.status(400).json({success: false, err})
      return res.status(200).json({success:true})
    })

  });


  router.post('/uploads', (req,res)=>{
 
    //upload collection에 들어있는 모든 정보를 가져오기 
    Upload.find()
    .exec((err, uploadInfo)=>{
      if(err) return res.status(400).json({success:false,err});
      return res.status(200).json({
        success: true,
        uploadInfo,
        postSize: uploadInfo.length
      })
    })

  });
 
  router.get('/uploads_by_id', (req,res)=>{

    let type = req.query.type
    let uploadId = req.query.id
    //uploadId를 이용해서 DB에서 uploadId와 같은 상품의 정보를 가져온다.

    Upload.find({_id: uploadId})
    .exec((err,upload) =>{ //db에서 정보를 찾아옴!
      if(err) return res.status(400).send(err)
      return res.status(200).send({success:true,upload})
    })

  });
   
   



  



  

module.exports = router;


  //router를 통해 index.js에서 사용 가능
  
//받아온 이미지 정보 db에 저장하기
