

import React, { useState } from 'react';
import Axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import {makeStyles} from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme)=>({ //css 
  //theme
  //제작하는 어플리케이션의 전체적인 테마 


    root : {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
          },
         


    }
}))

//pros로 받아온 데이터(판매자,유저 정보)를 axios로 이용해서 서버로 보내기
const Review = ({user_id,seller_id,userName}) => { //판매자,구매자(리뷰 작성자) props

    const[text, setText] = useState({});
    const[rating, setRating] = useState({});
   
    const classes = useStyles();

    const textChangeHandelr = (e) =>{
        setText(e.currentTarget.value)
    }
    const ratingChangeHandler = (e) =>{
        setRating(e.currentTarget.value)
    }

  
    const submitHandler = (e) =>{
        e.preventDefault(); //클릭해서 넘어가는 것을 방지함
        Axios.post('http://localhost:4000/api/review', {
            // user_id : userInfo.id, //두 번째 파라미터에 등록하고자 하는 정보
            // seller_id : sellerInfo.id, //id prop를 읽을 수 없는 타입에러 
            // name : userInfo.id,
            text: text,
            rating: rating,
    

        })
        .then(function(response){
            console.log(response);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    

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
      <div
        className={classes.root}
        style={{ maxWidth: "700px", margin: "2rem auto" , textAlign: "center", marginBotton: "2rem" }}
      >
        <div>
        <label><h2><b>판매자 만족도는 어떠신가요?</b></h2></label>
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          size="large"
          align="center"
        />
       </div>
        선택하세요

        <br/>
        <br/>
        <h2><b>사용 후기는 어떠신가요?</b></h2>
        <TextareaAutosize 
        placeholder="만족도에 대한 후기를 남겨주세요"
        style={{backgroundColor:"whitesmoke"}}
        />
        <br/>
        <br/>

        <div>
        <Button
          onClick={submitHandler}
          type="submit"
          style={{ maxWidth: "100px" }}
          variant="contained"
          color="primary"
        >
          등록
        </Button>
        </div>

        {/* <Button
              type="submit"
              style={{ maxWidth: "100px" }}
              variant="contained"
            //   color="red" //디폴트 색상(회색)
        >
            취소
        </Button> */}
     

      </div>
    );
}



export default Review;











/*

1.함수형 컴포넌트에 첫 번째 매개변수는 컴포넌트에 들어온 props 객체
구조 분해를 사용해 props 내부의 값을 추출한 후, name과 age에 할당함

2.레이아웃-네이버 쇼핑과 비슷하게
부모 컴포넌트(거래 완료 페이지) - 리뷰쓰기 버튼 ->리뷰페이지가 팝업으로 열림

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

6.value 값 넣으면 별점 클릭이 안됨!


const Person = () =>{
    const [data, setData] = useState({
        age:0,
        name: '',

    })
}

7. 취소를 누르면 원래 화면으로 넘어갈 수 있게함 
-router,history push 이용

        {seller.name} 판매자에게 보냄 
            text,
            rating 

        -리뷰 입력 화면 


8. 리뷰 페이지 ui 반응형으로 바꾸기 
-grid 사용


9. 


*/

