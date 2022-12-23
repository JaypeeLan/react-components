import React from "react";
import Navbar from "../components/navbars/navbar/Navbar";
import NavbarOne from "../components/navbars/navbarOne/NavbarOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/navbars/navbarOne/Home";
import About from "../components/navbars/navbarOne/About";
import Services from "../components/navbars/navbarOne/Services";
import NavbarTwo from "../components/navbars/navbarTwo/NavbarTwo";
import Sidebar from "../components/navbars/sidebar/Sidebar";

const Navbars = () => {
  return (
    <Router>
      <>
        {/* <Navbar
          navItemOne="Home"
          navItemTwo="About Us"
          navItemThree="Contact"
          navItemFour="Register"
        /> */}

        {/* --------------------------------------- */}
        {/* <NavbarOne
          navItemOne="About Us"
          navItemTwo="Services"
          navItemThree="Contact"
          navItemFour="Register"
          btnTitle="Sign In"
        /> */}

        {/* <NavbarTwo /> */}

        <Sidebar />
        {/* ======================================= */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        {/* ---------------------------------------------------- */}
      </>
    </Router>
  );
};

export default Navbars;
