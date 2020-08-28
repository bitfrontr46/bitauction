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
import UploadPage from "../pages/UploadPage/UploadPage";
import Landing from "../pages/Landing/Landing";
import DetailPage from '../pages/Detail/DetailPage';
import Payment from '../components/utils/Payment';
import Review from '../pages/review/Review';
import Board from '../pages/Board/Board';

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
          <Route exact path="/" component={Home} />
          <Route path="/list" component={ProductList} />
          <Route path="/list/:id" component={ProductShow} />
          <Route path="/list/:id/bidding" component={Bidding} />
          <Route path="/enroll" component={Enroll} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/fileupload" component={UploadPage} />
          <Route path="/upload/:uploadId" component={DetailPage}/>
          <Route path="/landing" component={Landing}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/review" component={Review}/>
          <Route path="/board" component={Board}/>

        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default GeneralRoutes;


//일반 유저 routes
