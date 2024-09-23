import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import "./header.scss";
import { IoIosMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../"
const Header = () => {
  const [nav, setNav] = useState(false);
  const [drop, setDrop] = useState(false);
  const handleScroll = useCallback(() => {
    if (nav) {
      setNav(false);
    }
  }, [nav]);

  useEffect(() => {
    if (nav) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav, handleScroll]);

  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="header-parent parent">
        <div className="header-container container">
          <Link to="/" className="logo bg-img-contain"></Link>
          <div className="menu-icon" onClick={() => setNav(true)}>
            <RiMenu3Line />
          </div>

          {/* Mobile Header */}
          {nav && (
            <div className="mobile-header" data-aos="fade-down">
              <div
                className="close"
                onClick={() => setNav(false)}
                data-aos="fade-down"
                data-aos-delay="1200"
              >
                <IoCloseSharp />
              </div>
              <div className="menu-links">
                <div className="top">
                <Link to="/"
                  onClick={() => setNav(false)}
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  Home
                </Link>
                <Link to="/about"
                  onClick={() => setNav(false)}
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  About
                </Link>

                <ul>
                  <a
                    href="#"
                    onClick={() => setDrop(!drop)}
                    data-aos="fade-down"
                    data-aos-delay="600"
                  >
                    AxonCare NetWork
                    <FaAngleDown />
                  </a>

                  {drop && (
                    <div className="menudropdown">
                      <a href="/#partners" onClick={() => setNav(false)}>Labs and Pharmacies</a>
                      <a  href="/#partners" onClick={() => setNav(false)}>Corporates</a>
                      <a href="/#partners" onClick={() => setNav(false)}>Elderly Care</a>
                      <a href="/#partners" onClick={() => setNav(false)}>Societies</a>
                      <a href="/#partners" onClick={() => setNav(false)}>Schools</a>
                    </div>
                  )}
                </ul>

                <Link to="/contact"
                  onClick={() => setNav(false)}
                  data-aos="fade-down"
                  data-aos-delay="800"
                >
                  Contact Us
                </Link>
                </div>

               <div className="bottom">
               <div className="mobile-number" data-aos-delay="1000">
                  <a href="mailto:info@axonichealth.com" className="contact">
                    <div className="icon">
                      <IoIosMail />
                    </div>
                    <p>info@axonichealth.com</p>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/Lm8J55WWh1qwUqdc8"
                    target="_blank"
                    className="contact"
                  >
                    <div className="icon">
                      <ImLocation2 />
                    </div>
                    <p>3911 Concord Pike #8030, Wilmington, Delaware, 19803</p>
                  </a>
                </div>
               </div>
              </div>
              <div className="clickarea" onClick={() => setNav(false)}></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
