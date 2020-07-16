import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Enroll from "./pages/enroll/Enroll";
import ProductList from "./pages/ProductList/ProductList";
import ProductShow from "./pages/ProductShow";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Bidding from "./pages/bidding/Bidding";
import Login from "./pages/Login";
import Join from "./pages/Join";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminHome from "./pages/Admin/AdminHome";

function App() {
  return (
    <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/list" component={ProductList} exact />
          <Route path="/list/:id" component={ProductShow} exact />
          <Route path="/list/:id/bidding" component={Bidding} exact />
          <Route path="/enroll" component={Enroll} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/join" component={Join} exact />
          <Route path="/adminlogin" component={AdminLogin} exact />
          <Route path="/adminhome" component={AdminHome} exact />
        </Switch>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
