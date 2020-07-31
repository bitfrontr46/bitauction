import React from "react";
import { Button } from "@material-ui/core";
import Axios from "axios";


const Test = () => {
  function test1() {
    Axios.get("http://localhost:1234/user/userList").then((a) => {
      console.log(a);
    });
  }

  return (
    <div>
      <h1>hello</h1>
      <Button onClick={test1}>hello</Button>
    </div>
  );
};

export default Test;
