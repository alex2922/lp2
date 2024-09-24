import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import footerimg from "../../assets/logo/logow.png";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className="footer-parent parent bg-img-cover">
      <div className="footer-container container">
        <div className="footer-top">
          <div className="logo-box footer-box">
            <Link to="/" className="footer-logo-box">
              <img src={footerimg} alt="" className="footer-logo" />
            </Link>
            <h2 className="heading">About </h2>
            <p>
              AxonCare, a service brand by Axonic, is a global healthcare
              network that connects doctors and patients worldwide through
              cutting-edge technology solutions.
            </p>
          </div>
          <div className="links-box-container footer-box">
            <h2 className="heading">Links</h2>
            <div className="links-box">
              <Link to="/" className="link">Home</Link>
              <Link to="/about" className="link">About</Link>
              <Link to="/contact" className="link">Contact </Link>
            </div>
          </div>
          <div className="legals-box-container footer-box">
            <h2 className="heading">Legals</h2>
            <div className="legals-box">
              <Link to="privacy&policy" className="link">Privacy & Policy</Link>
              <Link to="terms&conditions" className="link">Terms & Conditions</Link>
            </div>
          </div>
          <div className="address-box-container footer-box">
            <h2 className="heading">Address</h2>
            <a href="mailto:info@axonichealth.com" className="address-box" >
              <span>
                <MdMailOutline />
              </span>
              <p>info@axonichealth.com</p>
            </a>
            <a href="https://maps.app.goo.gl/CVWvUKyAZnHMcXpX6" className="address-box" target="__blank">
              <span>
                <MdOutlineLocationOn />
              </span>
              <p>3911 Concord Pike #8030, Wilmington, Delaware, 19803</p>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright AxonCare 2024. All right reserved.</p>
        </div>
      </div>
    </div>
    <div className="gototop"  onClick={()=>window.scrollTo({
      top:0,
      behavior:"smooth"
    })} >
    <span>
    <FaArrowUp />
    </span>
    </div>
    </>
  );
};

export default Footer;
