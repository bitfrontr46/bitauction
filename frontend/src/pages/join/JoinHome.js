import React from "react";
import { Route } from "react-router-dom";
import JoinSelect from "./JoinSelect";
import JoinForm from "./JoinForm";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const JoinHome = () => {
  return (
    <div>
      <Navigation />
      <Route exact path="/join" component={JoinSelect} />
      <Route path="/join/form" component={JoinForm} />
      <Footer />
    </div>
  );
};

export default JoinHome;
