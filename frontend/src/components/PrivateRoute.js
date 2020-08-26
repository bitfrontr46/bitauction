import React from "react";
import { Route, Redirect } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

const PraviteRoute = ({ component: Component, ...rest }) => {
  //id 로그인 여부 확인: Login.js의 setItem해놓은 is_login
  const is_login = () => {
    if (localStorage.getItem("is_login") === "true") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Route
      {...rest}
      render={() => {
        if (is_login()) {
          return (
            <MainLayout>
              <Component />
            </MainLayout>
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PraviteRoute;
