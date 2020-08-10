//상세 페이지

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UploadImage from './Sections/UploadImage';
import UploadInfo from './Sections/UploadInfo';
import {Row, Col} from 'antd';

function DetailPage(props) {

    const uploadId = props.match.params.uploadId
    const [Upload, setUpload] = useState({}) //upload 모든 정보들이 들어가게 됨

    useEffect(()=>{
      //쿼리스트링 형식으로 서버에 요청을 보내면 해당 id를 가진 upload 정보를 내려줌
       axios.get(`http://localhost:4000/api/upload/uploads_by_id?id=${uploadId}&type=single`)
       .then(response=>{
            if(response.data.success){
               console.log('response.data', response.data);
               setUpload(response.data.upload[0])
            }else{
                alert("상세 정보 가져오기를 실패했습니다.")
            }
       })
    },[])



    return (
      <div style={{ width: "100%", padding: "3rem 4rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{Upload.title}</h1>
        </div>
        <br />

        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24}>
                {/* <UploadImage detail={Upload}/> */}
          </Col>

          <Col lg={12} sm={24}>
              <UploadInfo detail={Upload}/>

          </Col>

        </Row>


      </div>
    );
}

export default DetailPage;


///upload/:uploadId"
//upload 컴포넌트를 보여줌. id라는 파라미터를 화면에 렌더링함 


//uploads_by_id?id -> 쿼리스트링 
// 슬래시 -> 띄어쓰기용 
