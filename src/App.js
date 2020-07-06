import React, { Component } from 'react';

import './App.css';

import { Route } from "react-router-dom";

import Enroll from './project/Enroll'

//import { response } from 'express'; 가끔 response라고 쓰면 얘가 이렇게 걸어버리는데 바로 에러뜬다 조심하자


class App extends Component {
  
    


  render() {
    
    return (
        <div className="App">
       
          <Route path="/Enroll" component={Enroll} exact = {true}  />
 
          <button onClick = {
            () => {
              localStorage.removeItem('userID');
              localStorage.removeItem('userToken');
            }
          }>임시 로그아웃</button>
        </div>
    );
    ;
  }
}

export default App;



