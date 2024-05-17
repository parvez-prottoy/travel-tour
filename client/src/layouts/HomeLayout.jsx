import React from "react";
import Footer from "../components/features/Footer";
import Navbar from "../components/features/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
