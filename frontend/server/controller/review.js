
const express = require('express')
const router = express.Router();



  router.post('',(req,res)=>{ // 
   
    upload(req,res, err =>{
      if(err){
        return res.json({success: false, err});
      } 
      return res.json({ //결과값을 보낼 때 res
        success: true,
        // filePath: res.req.file.path,//파일 경로 
        // fileName: res.req.file.filename,
     
      });
    });

  });

  module.exports = router;
