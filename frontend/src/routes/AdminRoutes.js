import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminHome from "../pages/Admin/AdminHome";
import AdminSettings from "../pages/Admin/AdminSettings";
import AdminAccountList from "../pages/Admin/AdminAccountList";
import AdminTagsList from "../pages/Admin/AdminTagsList";

function AdminRoutes() {



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
