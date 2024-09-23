import React from "react";
import { Link } from "react-router-dom"
import { RiMenu3Line } from "react-icons/ri";
import "./header.scss"
// import "../"
const Header = () => {
  return (
    <>
      <div className="header-parent parent">
        <div className="header-container container">
          <Link className="logo"></Link>
          <div className="menu-icon">
            <RiMenu3Line />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
