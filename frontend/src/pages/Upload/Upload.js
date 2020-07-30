
import FileUpload from '../../components/utils/FileUpload'
import React, {useState} from 'react';
import {Button, Form, Input} from 'antd';
import Axios from 'axios';
import 'antd/dist/antd.css'
const {TextArea} = Input;


function Upload(props) {

    const[Title, setTitle] = useState("")
    const[SellerProfile, setSellerProfile] = useState("")
    const[Images, setImages] = useState([]) //업로드 이미지

    const titleChangeHandler = (e) =>{
        setTitle(e.currentTarget.value)
    }

    const sellerChangeHandler = (e) =>{
        setSellerProfile(e.currentTarget.value)
    }
    
    const updateImages = (newImages) =>{
        //이미지 업데이트
        setImages(newImages)
    }

    const submitHandler = (e) => {
      e.preventDefault();

      const body = {
        title: Title,
        profile: SellerProfile,
        images: Images,
      };
      
      if(!Title || !SellerProfile || !Images){
        return alert("모든 값을 넣어주세요")
      }

      Axios.post("/api/upload", body).then((response) => {
        if (response.data.success) {
          alert("업로드 성공"); 
          props.history.push("/");
        } else {
          alert("업로드 실패 ");
        }
      });
    };

    //서버에 채운 값들을 request로 보낸다.
  

    //업로드하고 자동으로 랜딩 페이지로 오게 하게끔!
   

    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2>판매자 프로필</h2>
        </div>

        <Form onSubmit={submitHandler}>
          <br />
          <br />
          <label>제목</label>
          <Input onChange={titleChangeHandler} value={Title} />
          <label>이미지</label>
          {/* DropZone */}
          {/* FileUpload 컴포넌트에 전달 */}
          <FileUpload refreshFunction={updateImages}></FileUpload>
          <br />
          <br />
          <label>설명</label>
          <TextArea onChange={sellerChangeHandler} value={SellerProfile} />
          <br />
          <Button onClick={submitHandler}>확인</Button>
          <br />
          <br />
        </Form>
      </div>
      
    );
}

export default Upload;