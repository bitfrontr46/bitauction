
const express = require('express')
const multer = require('multer');
const multerS3 = require('multer-s3')
const AWS = require("aws-sdk");
const router = express.Router();
const {Upload} = require('../models/Upload');
const { response } = require('express');


//백엔드 -> 프론트 엔드로 파일 저장, 정보 전달
// 파일을 로컬이 아닌 aws에 저장하기 위해서 multer s3 사용


//AWS 키 외부(github)에 공개되면 안됨. aws 요금폭탄 위험
 
const s3 = new AWS.S3({ //S3 객체 사용
  accessKeyId: '', //생성한 s3의 accesskey
  secretAccessKey: '', //생성한 s3의 secret key
  region: 'ap-northeast-2', //지역설정
});

// //multerS3에 파일 업로드
const storage = multerS3({ //storage:저장되는 파일명이나 인코딩 조작

  s3 : s3, 
  bucket : 'project-portfolio-upload',//s3 생성시 버킷이름
  contentType: multerS3.AUTO_CONTENT_TYPE, //자동으로 콘텐츠 타입 세팅
  acl : 'public-read' ,//업로드 된 데이터를 url로 읽을 때 설정하는 값. 외부에 공개할 이미지
  metadata: function(req, file,cb){
    cb(null, {fieldName: file.fieldname}) //파일 메타정보 저장
  },
  key: function(req,file,cb){ //디렉토리 이름(uploads)/${Date.now}
            //s3 uploads 폴더 안에 파일명 : 날짜+파일명으로 넣기  
    cb(null, `uploads/${Date.now()}_${file.originalname}`) //저장될 파일 명과 똑같이 해줌!
  }, 
})
const upload = multer({storage:storage}).single("file"); //single(): 하나의 파일 업로드할 때 사용 


//multer
/*
var storage = multer.diskStorage({ //diskStorage:임시저장소 
    destination: function (req, file, cb) { //어디에 파일이 저장되는지.
      cb(null, 'uploads/') //파일이 저장될 경로
    },
    //파일명
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}_${file.originalname}`) //저장되는 파일명
    }
    //함수가 호출될 때 두 번째 인자로 파일 객체 전달
  })

  var upload = multer({storage : storage }).single("file");
  // req.files는 'file'이라는 필드의 파일 정보
  // 텍스트 필드가 있는 경우 req.body가 이를 포함함


*/
 

  router.post('/image',(req,res)=>{ //백엔드-> 프론트 
    //가져온 이미지를 저장을 해주면 됨.index 쪽으로 먼저 갔다가 router
    upload(req,res, err =>{
      if(err){
        return res.json({success: false, err});
      } 
      return res.json({ //결과값을 보낼 때 res
        success: true,
        // filePath: res.req.file.path,//파일 경로 
        // fileName: res.req.file.filename,
        location: res.req.file.location

        //multer -> s3
        //구성 내용이 바뀌면서 path가 존재하지 않음 
     
      });
    });

  });

    
  
  router.post('/', (req,res)=>{ //'/image'
    //index에서 api/upload로 맞춰줬기 때문에 /로 생략 가능!
    //받아온 정보들을 DB에 넣어줌(body)

    //s3 객체 url 
    //image_url = "https://project-portfolio-upload.s3.ap-northeast-2.amazonaws.com/uploads/" + image_time+ "." + image_type //업로드된 이미지의 url이 설정갑으로 저장됨 

    const upload = new Upload(req.body) 
    upload.save((err)=>{ //모든 정보 저장 
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
 
  //여기서 자꾸 get 404뜸
  router.get('/uploads_by_id', (req,res)=>{
      //uploadId를 이용해서 DB에서 uploadId와 같은 상품의 정보를 가져온다.
    let type = req.query.type
    let uploadId = req.query.id
    //req.query.id: 요청의 query객체의 id프로퍼티 값
  
    Upload.find({_id: uploadId})
    .exec((err,upload) =>{ //db에서 정보를 찾아옴!
      if(err) return res.status(400).send(err)
      return res.status(200).send({success:true,upload})
    })

  });
   

  //이미지 데이터 삭제




module.exports = router;


//router를 통해 index.js에서 사용 가능  
//받아온 이미지 정보 db에 저장하기

/*
-FormData의 경우 req로부터 데이터를 얻을 수 X
multer를 통해서 데이터를 읽을 수 있음.
-> multer는 multipart/form-data가 아닌 폼에서는 동작하지 않음!


-multer-s3 key
: 파일명 앞에 디렉토리명을 써서 올리면 해당 디렉토리 안으로 파일이 업로드됨

-스토리지 엔진
destination, filename

-S3
key-value 형태의 객체 스토리지로 파일,폴더 모두 버킷 내 객체
deleteObjects 메소드를 통해 객체(파일/폴더)를 삭제할 수 있으며,
포더 인 경우 모두 비워져 있어야만 삭제 가능함

-save() 메서드 
몽고db는 save() 메서드를 사용하여 _id속성이 일치하는 데이터를
저장하면 자동으로 원래 데이터 수정

-remove() 메서드
데이터를 삭제할 때는 remove() 메서드 사용함.
Upload.remove(매개변수)
매개변수를 입력하지 않고 메서드를 사용하면 모든 데이터를 제거하므로 주의


*/


