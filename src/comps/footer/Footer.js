import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import footerimg from "../../assets/logo/logo.webp";
const Footer = () => {
  return (
    <div className="footer-parent parent">
      <div className="footer-container container">
        <div className="logo-box footer-box">
          <Link to="/" className="footer-logo-box">
            <img src={footerimg} alt="" className="footer-logo" />
          </Link>
          <div className="heading">About Us</div>
          <p>
            AxonCare, a service brand by Axonic, is a global healthcare network
            that connects doctors and patients worldwide through cutting-edge
            technology solutions.
          </p>
        </div>
        <div className="links-box-container footer-box">
            <div className="heading">Links</div>
            <div className="links-box">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contactUS">Contact Us</Link>
            </div>
        </div>
        <div className="legals-box footer-box">
            <div className="heading">Legals</div>
            <div className="legals-box">
                <Link>Privacy & Policy</Link>
                <Link>Terms & Conditions</Link>
            </div>
        </div>
        <div className="address-box footer-box">
            <div className="address-box">
                <span></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
