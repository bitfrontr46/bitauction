import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminHome from "../pages/Admin/AdminHome";
import AdminSettings from "../pages/Admin/AdminSettings";
import AdminAccountList from "../pages/Admin/AdminAccountList";
import AdminTagsList from "../pages/Admin/AdminTagsList";
import UserPageApp from "../pages/UserPage/UserPageApp";

function AdminRoutes() {
  return (
    <>
      {/* 관리자 페이지 */}
      <BrowserRouter>
        <Switch>
          <Route path="/adminlogin" component={AdminLogin} />
          {/* <Route path={`${match.url}/admin`} component={AdminHome} /> */}
          <Route path="/admin" component={AdminHome} />
          <Route path="/adminsettings" component={AdminSettings} />
          <Route path="/adminaccountlist" component={AdminAccountList} />
          <Route path="/admintagslist" component={AdminTagsList} />
          <Route path="/userpage" component={UserPageApp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default AdminRoutes;
