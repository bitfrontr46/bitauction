import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminHome from "../pages/Admin/AdminHome";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminSettings from "../pages/Admin/AdminSettings";
import AdminAccountList from "../pages/Admin/AdminAccountList";
import AdminTagsList from "../pages/Admin/AdminTagsList";
import Home from "../pages/Home/Home";
import Enroll from "../pages/enroll/Enroll";
import ProductList from "../pages/ProductList/ProductList";
import ProductShow from "../pages/ProductShow";
import Bidding from "../pages/bidding/Bidding";
import Login from "../pages/Login";
import Join from "../pages/join/JoinHome";
import Test from "../Test";
import NotFound from "../components/NotFound";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Main 페이지 */}
          {/* Navigation과 Footer은 필요한 페이지에 추가 */}
          <Route exact path="/" component={Home} />
          <Route path="/list" component={ProductList} />
          <Route path="/list/:id" component={ProductShow} />
          <Route path="/list/:id/bidding" component={Bidding} />
          <Route path="/enroll" component={Enroll} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/test" component={Test} />
          {/* 관리자 페이지 */}
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/home" component={AdminHome} />
          <Route path="/admin/settings" component={AdminSettings} />
          <Route path="/admin/accountlist" component={AdminAccountList} />
          <Route path="/admin/tagslist" component={AdminTagsList} />
          {/* Not Found */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
