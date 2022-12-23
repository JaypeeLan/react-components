import React, { useState } from "react";
import "./sidebar.css";
import { NavLink as Link, Link as Links } from "react-router-dom";
import Test from "../../../pages/Test";

const Sidebar = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Links to="/" className="nav-logo">
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className="nav-logo-name">Homepage</span>
            </Links>

            <div className="nav-list">
              <Link to="/" className="nav-link">
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Services</span>
              </Link>
              <Link to="/services" className="nav-link">
                <i className="fas fa-hotel nav-link-icon"></i>
                <span className="nav-link-name">About Us</span>
              </Link>
              <Link to="/about" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Contact</span>
              </Link>
              <Link to="/contact" className="nav-link">
                <i className="fas fa-dollar-sign nav-link-icon"></i>
                <span className="nav-link-name">Transaction</span>
              </Link>
            </div>
          </div>

          <Link to="/logout" className="nav-link">
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>

      {/* <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, velit.
      </div> */}
    </main>
  );
};

export default Sidebar;
