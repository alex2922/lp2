import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import "./header.scss";
import { IoIosMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
// import "../"
const Header = () => {
    const[nav,setNav]=useState(false);

  return (
    <>
      <div className="header-parent parent">
        <div className="header-container container">
          <Link className="logo bg-img-contain"></Link>
          <div className="menu-icon" onClick={()=>setNav(true)}>
            <RiMenu3Line />
          </div>

          {/* Mobile Header */}
          {nav && <div className="mobile-header">
            <div className="close" onClick={()=>setNav(false)}> 
              <IoCloseSharp />
            </div>
            <div className="menu-links">
              <Link>Home</Link>
              <Link>About</Link>
              <Link>AxonCare NetWork</Link>
              <Link>Contact Us</Link>

              <div className="mobile-number">
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
          </div>}
        </div>
      </div>
    </>
  );
};

export default Header;
