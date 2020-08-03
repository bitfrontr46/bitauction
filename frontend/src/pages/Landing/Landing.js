import React, { useEffect, useState } from 'react';
import axios from "axios"
import {Icon, Col, Card, Row} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Image from 'material-ui-image';

function Landing(props) {
    
    const [Uploads, setUploads] = useState([])

    useEffect(()=>{
       
        axios.post("http://localhost:4000/api/upload/uploads", )
        .then(response=>{
            if(response.data.success){
                //console.log(response.data);
                //  -> 연속해서 콘솔 로그가 찍히는 문제 발생(무한반복)

                setUploads(response.data.uploadInfo)
            }else{
                alert("이미지를 가져오는데 실패했습니다.")
            }
        })
    })

    const renderCards = Uploads.map((upload,index)=>{
        // console.log('upload', upload);
        // ->연속해서 콘솔 로그 찍히는 문제 발생

        return <Col log={6} md={8} xs={24} key={index}>
        <Card 
            cover={<a href={`/upload/${upload._id}`}><Image src={`http://localhost:4000/${upload.images[0]}`}/></a>}
        >
            <Meta
                title={upload.title}
            />
        </Card>
        </Col>
    })

    //이미지에 하이퍼링크를 걸어서 
    //이미지를 클릭하면 상세페이지로 넘어갈 수 있게끔하기



  

    return (
        <div style={{width:"75%", margin: "3rem auto"}}>
           <div style={{textAlign: "center"}}>
                <h1>프로필</h1>
           </div> 

           {/* Card */}
           <Row gutter={[16,16]}>
            {renderCards}
           </Row>
          


        </div>
    );
}

export default Landing


//DB에 저장된 이미지를 가져오기
