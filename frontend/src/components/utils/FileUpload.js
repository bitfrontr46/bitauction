import React, {useState} from 'react';
import Dropzone from "react-dropzone";
import axios from 'axios'


function FileUpload(props) {

  const [Images, setImages] = useState([]); //내용 저장

  //업로드를 눌렀을 경우 호출되는 함수
  const dropHandler = (files) => {

    let formData = new FormData(); //객체
    const config = { //config 객체
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]); //첫 번째로 가져오기 위해 array 설정

    //axios 사용해서 백엔드에게 파일 보내기. 서버로 post 요청

    axios.post("http://localhost:4000/api/upload/image", formData, config)
    .then((response)=>{ 
      if(response.data.success){ //res가 성공한다면
        console.log(response.data);
        setImages([...Images, response.data.filePath]);
        props.refreshFunction([...Images, response.data.filePath])
      }else{
        alert("파일을 저장하는데 실패했습니다.");
      }
    });


  };

  const deleteHandler = (image) =>{ //이미지 삭제
    const currentIndex = Images.indexOf(image)
    let newImages = [...Images]
    newImages.splice(currentIndex,1)
    setImages(newImages)
    props.refreshFunction(newImages)
  }


  return (
    <div>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: 300,
                height: 240,
                border: "1px solid lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center ",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
           
            </div>
          </section>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => deleteHandler(image)} key={index}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:4000/${image}`}

            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;



/*
FormData
-자바스크립트를 사용하여 데이터를 서버에 보낼 수 있으며
비동기식으로 데이터나 파일 전송 가능

src={`http://localhost:4000/${image}`}
-img 태그는 src라는 attribute를 가지게 됨
-이미지를 저장해주는 위치가 local이라 저렇게 써줄 수 있음

post 방식은 url로 요청할 수 X
사진을 업로드 시 axios로 post로 요청을 하는 것을 구현!

//이미지 경로
"https://project-portfolio-upload.s3.ap-northeast-2.amazonaws.com/uploads/"





*/