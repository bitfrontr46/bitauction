

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


const Review = ({sellerInfo,userInfo}) => { //판매자,구매자(리뷰 작성자) props
//sellerInfo, userInfo를 부모 컴포넌트에서 props로 받아옴 
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

    

    // const sellerInfo = { //부모 컴포넌트에서 전달받은 데이터들
    //     id,
    //     name,
    // }

    // const userInfo = {
    //     id,
    //     name
    // }


    // 프런트 -> 서버로 접근할 수 있는 axios 추가
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

 //post 메서드로 userInfo.id, seller_id를 json 데이터로 전달받음


    return (
      <div className={classes.root} style={{maxWidth:"700px", margin:"2rem auto"}}>
        <label>구매자 만족도</label>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="large" value={rating}/>
        <textarea placeholder="후기를 남겨주세요~"></textarea>
        <button type="submit" style={{maxWidth:"100px"}} value={text}>확인</button>
        
        {/* {seller.name} 판매자에게 보냄 
            text,
            rating */}
           



      </div>
    );
}



function Review2(props) {
    return (
        <div>
            
        </div>
    );
}


export default Review;











/*

1.함수형 컴포넌트에 첫 번째 매개변수는 컴포넌트에 들어온 props 객체
구조 분해를 사용해 props 내부의 값을 추출한 후, name과 age에 할당함

2.네이버 쇼핑몰 후기와 비슷하게.

3.
axios.post('url', {
    //데이터
           user_id : userInfo.id,
           seller_id : sellerInfo.id,
           name : userInfo.name,
           text : 'text',
           rating : 'rating',
})

4. 후기 작성 후 판매자에게 정보를 보냄

5.postman으로 api 테스트





*/