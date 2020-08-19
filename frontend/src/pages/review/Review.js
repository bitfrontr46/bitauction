

import React, { useState } from 'react';
import Axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({ //css 
    root : {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
          },

    }
}))

//네이버 쇼핑몰 후기와 비슷하게 

const Review = ({sellerInfo,userInfo}) => { //판매자,구매자(리뷰 작성자) props

    const[text, setText] = useState("{}");
    const[rating, setRating] = useState("{}");
   
    const classes = useStyles();

    const textChangeHandelr = (e) =>{
        setText(e.currentTarget.value)
    }
    const ratingChangeHandler = (e) =>{
        setRating(e.currentTarget.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault(); //클릭해서 넘어가는 것을 방지함
    }

    

    // sellerInfo {
    //     id,
    //     name,
    // }

    // userInfo{
    //     id,
    //     name
    // }


    // 프런트 -> 서버로 보냄
    // Axios.post('http://localhost:4000/api/review',{ //데이터 
    //     user_id : userInfo.id, //id가 정의되어 있지 않음
    //     seller_id : sellerInfo.id,
    //     name : userInfo.name,
    //     text : 'text',
    //     rating : 'rating',
    // }).then(function(response){
    //     console.log(response);
    // }).catch(function(error){
    //     console.log(error);
    // })



    return (
      <div className={classes.root} style={{maxWidth:"700px", margin:"2rem auto"}}>
        <label>구매자 만족도</label>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="large"/>
        <textarea placeholder="후기를 남겨주세요~"></textarea>
        <button type="submit" style={{maxWidth:"100px"}}>확인</button>
        
        {/* {seller.name} 판매자에게 보냄 
            text,
            rating */}

      </div>
    );
}

export default Review;




/*
axios.post('url', {
    //데이터
           user_id : userInfo.id,
           seller_id : sellerInfo.id,
           name : userInfo.name,
           text : 'text',
           rating : 'rating',
})

*/