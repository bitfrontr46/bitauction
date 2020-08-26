const Re = require("../models/reviewSchema")
const express = require('express');

//모델에 있는 리뷰 스키마를 가져옴


exports.Review = (req, res)=>{ //백엔드-> 프론트 
    console.log(req.body)

    //가져온 이미지를 저장을 해주면 됨.index 쪽으로 먼저 갔다가 router
    Re(req, res, err =>{
      if(err){
        return res.json({success: false, err});
      } 
      return res.json({ //결과값을 보낼 때 res
        success: true,
        location: res.req.file.location

      });
    });
  }


  //(req, res) => {}
  //req -> 요청(post)
  //res -> 응답(get)
