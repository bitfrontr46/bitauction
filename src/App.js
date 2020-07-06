import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import { Route } from "react-router-dom";

import  Enroll from './project/Enroll'
function App() {
  return (
    <div className="App">
     <Enroll/>
    </div>
  );
}

export default App;
