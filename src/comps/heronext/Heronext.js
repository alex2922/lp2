import React from "react";
import "./heronext.scss";
import Button from "../button/Button";

function Heronext() {
  return (
    <>
      <div className="heronext-parent parent">
        <div className="heronext-container container">
          {/* ----------box1---------- */}
          <div className="box">
            <span className=" icon icon1 bg-img-cover"></span>
            <h4>For Patients</h4>
            <p className="box-p">
              24/7 care anytime, anywhere—from checkups to specialist
              appointments, world-class care is just a few clicks away.
            </p>

            <div className="btn-div">
              <Button text="Book Now" />
            </div>
          </div>

          {/* ----------box2---------- */}
          <div className="box">
            <span className=" icon icon2 bg-img-cover"></span>
            <h4>For Doctors</h4>
            <p className="box-p">
              Expand your practice, boost revenue, and make a global impact with
              flexible scheduling and no administrative overhead.
            </p>
            <div className="btn-div">
              <Button
                text="Book Now
"
              />
            </div>
          </div>
          {/* ----------box3---------- */}
          <div className="box">
            <span className=" icon icon3 bg-img-cover"></span>
            <h4>AxonCare Clinic</h4>
            <p className="box-p">
              Your one-stop shop for comprehensive, high-tech healthcare with
              global access to top specialists and centralised records
            </p>
            <div className="btn-div">
              <Button text="Book Now" />
            </div>
          </div>

          {/* ----------box4---------- */}
          <div className="box">
            <span className=" icon icon4 bg-img-cover"></span>
            <h4 className="box-heading">AxonCare Clinic</h4>
            <p className="box-p">
              Your one-stop shop for comprehensive, high-tech healthcare with
              global access to top specialists and centralised records
            </p>

            <div className="btn-div">
              <Button text="Book Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heronext;
