import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminHome from "../pages/Admin/AdminHome";
import AdminSettings from "../pages/Admin/AdminSettings";
import AdminAccountList from "../pages/Admin/AdminAccountList";
import AdminTagsList from "../pages/Admin/AdminTagsList";

function AdminRoutes() {

  const dispatch = useDispatch();

  useEffect(() => {
    const is_login = () => {
      if (localStorage.getItem("is_login") === "true") {
        return true;
      } else {
        return false;
      }
    };
    const is_seller = () => {
      if (localStorage.getItem("is_seller") === "true") {
        return true;
      } else {
        return false;
      }
    };
    const user_id = localStorage.getItem("user_id");
    const userName = localStorage.getItem("userName");
    if (is_login()) {
      console.log("자동로그인!");
      dispatch({
        type: "LOGIN",
        payload: {
          user_id: user_id,
          is_seller: is_seller(),
          userName: userName,
        },
      });
    }
  }, [dispatch]);

  return (
    <>
      {/* 관리자 페이지 */}
      <BrowserRouter>
      <Switch>
      <Route path="/adminlogin" component={AdminLogin} exact />
      <Route path="/adminhome" component={AdminHome} exact />
      <Route path="/adminsettings" component={AdminSettings} exact />
      <Route path="/adminaccountlist" component={AdminAccountList} exact />
      <Route path="/admintagslist" component={AdminTagsList} exact />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default AdminRoutes;
