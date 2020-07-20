import React from "react";
import Stepper from "./EnrollStepper";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function Enroll() {
  return (
    <div>
      <Navigation />
      <Stepper />
      <Footer />
    </div>
  );
}

export default Enroll;
