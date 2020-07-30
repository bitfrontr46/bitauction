import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1><br/>
      <h3>지정된 주소를 찾을 수 없습니다...</h3>
      <br />
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
