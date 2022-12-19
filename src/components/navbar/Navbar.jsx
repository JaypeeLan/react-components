import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("toggle_nav");
  };

  return (
    <header>
      <h1>Logo</h1>

      <nav ref={navRef}>
        <a href="#">Contact</a>
        <a href="#">About us</a>
        <a href="#">sign In</a>
        <a href="#">Register</a>

        <button className="nav-btn nav-close" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn nav-close" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
