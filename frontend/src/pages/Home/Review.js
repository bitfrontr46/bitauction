
/*

import React, { useState } from 'react';
import Axios from 'axios';

//네이버 쇼핑몰 후기와 비슷하게!
//postman으로 프런트 -> 백으로 내용이 들어갔는지 확인 
//sellerInfo, userInfo props로 받아옴

 const[text, setText] = useState;
 const[rating, setRating] = useState;



const Review = ({sellerInfo,userInfo}) => { 

    // sellerInfo {
    //     id,
    //     name,
    // }

    // userInfo{
    //     id,
    //     name
    // }

    Axios.post('/review',{
        user_id : userInfo.id, //onject아이디!,  이메일 아이디X
        seller_id : sellerInfo.id, //판매자 아이디
        name : userInfo.name,
        text : 'text',
        rating : 'rating', //별점
    })

    return(
        <div>
            {seller.name} 
            text, 
            rating
        </div>
    )
}

export default Review;



*/

