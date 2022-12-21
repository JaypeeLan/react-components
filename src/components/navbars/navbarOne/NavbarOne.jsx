import React from "react";
import logo from "../../../assets/react.svg";
// import "./navbarOne.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarOneComponents";

const NavbarOne = ({
  navItemOne,
  navItemTwo,
  navItemThree,
  navItemFour,
  btnTitle,
}) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            {navItemOne}
          </NavLink>
          <NavLink to="/services" activeStyle>
            {navItemTwo}
          </NavLink>
          <NavLink to="/about" activeStyle>
            {navItemThree}
          </NavLink>
          <NavLink to="/services" activeStyle>
            {navItemFour}
          </NavLink>
          {/* Second Nav */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">{btnTitle}</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavbarOne;
