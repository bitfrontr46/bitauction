import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home/Home";
import Enroll from "./pages/enroll/Enroll";
import ProductList from "./pages/ProductList/ProductList";
import ProductShow from "./pages/ProductShow";
import Bidding from "./pages/bidding/Bidding";
import Login from "./pages/Login";
import Join from "./pages/join/JoinHome";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminHome from "./pages/Admin/AdminHome";
import AdminSettings from "./pages/Admin/AdminSettings";
import AdminAccountList from "./pages/Admin/AdminAccountList";
import AdminTagsList from "./pages/Admin/AdminTagsList";
import Test from "./Test";

//css reset 참고하기.
function App() {
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
