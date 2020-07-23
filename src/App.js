import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Enroll from "./pages/enroll/Enroll";
import ProductList from "./pages/ProductList/ProductList";
import ProductShow from "./pages/ProductShow";
import Bidding from "./pages/bidding/Bidding";
import Login from "./pages/Login";
import Join from "./pages/Join";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminHome from "./pages/Admin/AdminHome";
import AdminSettings from "./pages/Admin/AdminSettings";
import AdminAccountList from "./pages/Admin/AdminAccountList";
import Test from "./Test";
import AdminTagsList from "./pages/Admin/AdminTagsList";

//css reset 참고하기.
function App() {
  return (
    <>
      <div>
        {/* 일반 회원 페이지 */}

        <Route path="/" component={Home} exact />
        <Route path="/list" component={ProductList} exact />
        <Route path="/list/:id" component={ProductShow} exact />
        <Route path="/list/:id/bidding" component={Bidding} exact />
        <Route path="/enroll" component={Enroll} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/join" component={Join} exact />
      </div>
      <div>
        {/* 관리자 페이지 */}
        <Route path="/adminlogin" component={AdminLogin} exact />
        <Route path="/adminhome" component={AdminHome} exact />
        <Route path="/test" component={Test} exact />
        <Route path="/adminsettings" component={AdminSettings} exact />
        <Route path="/adminaccountlist" component={AdminAccountList} exact />
        <Route path="/admintagslist" component={AdminTagsList} exact />
      </div>
    </>
  );
}

export default App;