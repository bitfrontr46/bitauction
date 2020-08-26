import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Seller from './pages/SellerPage';
import User from './pages/UserPage';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';

import AdminRoute from "./components/AdminRoute"
import AdminLogin from "./pages/Admin/AdminLogin"
import AdminHome from "./pages/Admin/AdminHome"
import AdminAccountList from "./pages/Admin/AdminAccountList"
import AdminTagsList from "./pages/Admin/AdminTagsList"

import NotFound from "./components/NotFound";

function App() {
  //Login Session 유지
  const dispatch = useDispatch();

  const is_login = () => {
    if (localStorage.getItem('is_login') === 'true') {
      return true
    } else {
      return false
    }
  }
  const is_seller = () => {
    if (localStorage.getItem('is_seller') === 'true') {
      return true
    } else {
      return false
    }
  }
  const user_id = localStorage.getItem('user_id');

  const userName = localStorage.getItem('userName');

  useEffect(() => {
    if (is_login()) {
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
        <Switch>
          <Route path="/" component={Home} exact />
          <PrivateRoute path="/seller" component={Seller} />
          <PrivateRoute path="/user" component={User} />
          {/* 관리자 페이지 */}
          <Route path="/admin/login" component={AdminLogin} />
          <AdminRoute path="/admin/home" component={AdminHome} />
          <AdminRoute path="/admin/accountlist" component={AdminAccountList} />
          <AdminRoute path="/admin/tagslist" component={AdminTagsList} />
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
