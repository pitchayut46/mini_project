import React from "react";
// import "./Navbar.css";
import logo from "../assets/got7logo.png";
import { Routes, Route, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>
        {`
@font-face {
  font-family: 'My Custom Font';
  src: url('../font/JosefinSans-VariableFont_wght.ttf') format('woff2')
}

.navbar {
  display: flex;
  align-items: center;
  padding: 10px;
}

.navbar-logo {
  margin: 10px;
}

.logo7{
  width:100%;
  height: 60px;

}

.navbar-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin-left: 8px;
}

.navbar-item {
  margin: 0 10px;
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
}

.navbar-link {
  color: #ffffff;
  text-decoration: none;
}

.navbar-link:hover {
  color: #0ecd4d;
}
    
    `}
      </style>
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="pic" style={{ marginRight: "0" }}>
            <img className="logo7" src={logo} alt="Logo" />
          </div>
        </div>
        <div style={{ justifyItems: "start" }}>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                HOME
              </a>
            </li>
            <li className="navbar-item">
              <a href="/discography" className="navbar-link">
                DISCOGRAPHY
              </a>
            </li>
            <li className="navbar-item">
              <a href="/notice" className="navbar-link">
                NOTICE
              </a>
            </li>
            <li className="navbar-item">
              <a href="/schedule" className="navbar-link">
                SCHEDULE
              </a>
            </li>
            <li className="navbar-item">
              <a href="/contact" className="navbar-link">
                CONTACT
              </a>
            </li>
            <li className="navbar-item">
              <a href="/about" className="navbar-link">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
