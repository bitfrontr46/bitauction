import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../pages/Home/Home";
import Enroll from "../pages/enroll/Enroll";
import ProductList from "../pages/ProductList/ProductList";
import ProductShow from "../pages/ProductShow";
import Bidding from "../pages/bidding/Bidding";
import Login from "../pages/Login";
import Join from "../pages/join/JoinHome";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import MyPage from "../pages/MyPage";

function GeneralRoutes() {
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
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/list" component={ProductList} exact />
          <Route path="/list/:id" component={ProductShow} exact />
          <Route path="/list/:id/bidding" component={Bidding} exact />
          <Route path="/enroll" component={Enroll} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/join" component={Join} />
          <Route path="/mypage" component={MyPage} />
          <Footer />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default GeneralRoutes;
