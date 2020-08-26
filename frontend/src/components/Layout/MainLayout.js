// Navigation, Footer가 Main page들만 나오도록 설정
import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <Navigation />
      </div>
      {children}
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <Footer />
      </div>
    </>
  );
};
export default MainLayout;
