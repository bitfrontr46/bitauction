
import React, { Component } from 'react';

//db 사용하지 않고 게시판 만들기


class Board extends Component {

    //더미데이터 
    state ={
        maxNo: 3,
        boards : [
            { //json 형식
                brdno: 1,
                brdwriter: '김영은',
                brdtitle: '프로젝트',
                brddate: new Date()
            },
            {
                brdno:2,
                brdwriter: 'so sino',
                brdtitle: 'Founder for',
                brddate: new Date()
            },
            {
                brdno:3,
                brdwriter: 'ㅇㅇ',
                brdtitle: '게시판 만들기',
                brddate: new Date()
                
            }
            
        ]
    }
    
    handleSavaData = (data)=>{ //함수 실행안됨
       // console.log("handleSaveData");
        this.setState({
            maxNo: this.state.maxNo+1,
            boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data})
        }) //저장시 글 번호(brdno)와 작성일자(brddate)을 생성한다.
    }

    //concat

    render() {
        const {boards} = this.state; //const boards = this.state.boards(state에 있는 데이터를 boards에 저장)
        // const list = boards.map(function(row){
        //     console.log("list");
        //     return row.brdno + row.brdwriter;
        // });

        return (
          <div>
            {/* {list} */}
            {/* 파라미터로 handleSAveData()함수를 onSaveData()라는 이름으로 넘겨줌 */}
             <BoardForm onSaveData={this.handleSavaData}/>
            <table border="1">
              <tbody>
                <tr align="center">
                    <td width="50">No.</td>
                    <td width="300">Title</td>
                    <td width="100">Name</td>
                    <td width="100">Date</td>
                </tr>
                { 
                   boards.map(function(row){
                       return (<BoardItem key={row.brdno} row={row}/>)
                   })
                    //row라는 변수로 boards의 행(row)을 하나씩 지정해서 넘겨줌
                    //boarditem 컴포넌트에서 이 row를 this.props로 받아서 사용함
                }

              </tbody>
            </table>
          </div>
        );
    }
}


class BoardItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
            </tr>
        );
    }
    //컴포넌트 자신이 사용하는 것 -> state, 부모로부터 받은 것은 props
}




class BoardForm extends Component {

    state = {}

    handleChange = (e)=>{ //값을 입력할 때마다 입력값을 받아서 저장
      
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e)=>{ //사용자가 값을 입력하고 저장할 때 발생
        console.log("handleSubmit");
        this.props.onSaveData(this.state);//onSaveData 함수를 호출하여 데이터 저장
        this.setState({});
       
    }
    

    render() {
        return (
            <div>
                <input placeholder="title" name="brdtitle" onChange={this.handleChange}/>
                <input placeholder="name" name="brdwriter" onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>등록</button>
             </div>      
        );
    }
}



export default Board;



/*

다하면 클래스형 -> 함수형으로 바꾸기!

-컴포넌트 내의 변수나 함수(이벤트 핸들러)를 참조할 때는 this 붙이기!

1. 주어진 배열의 내용을 출력하는 글 리스트 작성
2. 테이블(table)태그로 게시판 리스트처럼 출력함
3. 값을 입력받아서 저장하는 글 쓰기 기능 구현
-html 컨트롤과 이벤트가 react와 연동되는 법을 알아야 함


*등록버튼을 누르면 글이 추가되지 않고 새로고침됨
e.preventDefault 없애면 글이 추가되는 동시에 사라짐

-> <form onSubmit={this.handleSubmit}></form>
을 삭제하고 <button onClick={this.handleSubmit} 추가

form이 submit 되면서 페이지가 리로드됨





*/