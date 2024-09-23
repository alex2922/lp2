import React from "react";
import "./About.scss";
import { FaRegCheckCircle } from "react-icons/fa";
import lifeIcon from "../../assets/icons/life.gif";
import sugarIcon from "../../assets/icons/glucose_meter.gif";
import emotinalIcon from "../../assets/icons/emotional-intelligence.gif";
import physIcon from "../../assets/icons/phys.gif";
import Button from "../../comps/button/Button";

function About() {

  const doctorData = [
    {
      image: physIcon,
      name: "General Physician",
      designation: "OPD Timings: 10am-4pm",
    },
    {
      image: sugarIcon,
      name: "Diabetologist",
      designation: "OPD Timings: 10am-4pm",
    },
    {
      image: lifeIcon,
      name: "Gynecologist",
      designation: "OPD Timings: 10am-4pm",
    },
    {
      image: emotinalIcon,
      name: "Mental Health Counselor",
      designation: "OPD Timings: 10am-4pm",
    },
  ];
  return (
    <>
      {/* First section start */}

      <div className="parent about-parent">
        <div className="container about-container">
          <div className="about-left bg-img-cover"></div>
          <div className="about-right">
            <h2>Revolutionising the way we deliver healthcare</h2>
            <p>
              AxonCare, a service brand by Axonic, is a global healthcare
              network connecting doctors and patients worldwide through
              cutting-edge technology solutions. We are revolutionizing
              healthcare delivery by creating a seamless, connected system,
              allowing you to access healthcare when and where you need it,
              without delay. With our network of specialists, the "Anytime
              Health" technology, and our mobile app, AxonCare, you become part
              of a healthcare ecosystem that transcends barriers of language and
              distance, receiving care in your preferred way.
            </p>
           <Button text="Book Now" />
          </div>
        </div>
      </div>

      <div className="parent about-parent about-parent2">
        <div className="container about-container about-container2">
          <div className="about-left"></div>
          <div className="about-right">
            <h2>AxonCare : Multispeciality Smart Clinic</h2>
            <p>
              Imagine healthcare like never before, with world-class facilities
              at your fingertips. No more running between specialists and
              hospitals—AxonCare Clinic is your one-stop solution for high-tech,
              comprehensive healthcare. AxonCare Clinic connects you with
              top-tier specialists from around the world, making global
              healthcare expertise just a tap away.
            </p>
            <div className="icon-box">
              <span className="core-icon">
                <FaRegCheckCircle />
              </span>
              <p className="list-p">
                <span
                  className="left-p-span
                          "
                >
                  Global Access
                </span>
                {/* Connect with top specialists worldwide. */}
              </p>
            </div>

            <div className="icon-box">
              <span className="core-icon">
                <FaRegCheckCircle />
              </span>
              <p className="list-p">
                <span
                  className="left-p-span
                          "
                >
                  Multilingual Support
                </span>
                {/* Communicate in your preferred language. */}
              </p>
            </div>

            <div className="icon-box">
              <span className="core-icon">
                <FaRegCheckCircle />
              </span>
              <p className="list-p">
                <span
                  className="left-p-span
                          "
                >
                  Save Time and Money
                </span>
                {/* Convenient appointments, no travel. */}
              </p>
            </div>

            <div className="icon-box">
              <span className="core-icon">
                <FaRegCheckCircle />
              </span>
              <p className="list-p">
                <span
                  className="left-p-span
                          "
                >
                  Seamless Communication
                </span>
                {/* Seamless interaction with healthcare providers. */}
              </p>
            </div>

            <div className="icon-box">
              <span className="core-icon">
                <FaRegCheckCircle />
              </span>
              <p className="list-p">
                <span
                  className="left-p-span
                          "
                >
                  Coordinated Care
                </span>
                {/* Centralised medical records, personalised support. */}
              </p>
            </div>
            <Button text="Book Now" />
          </div>
        </div>
      </div>

      {/* First section ends */}


      {/* Second section start */}

      <div className="card-parent parent">
        <div className="container card-container">
          {doctorData.map((item, index) => (
            <div className="card" key={index}>
              <div className="front">
                <div className="image">
                  <div
                    className="icon"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </div>
                <div className="doctor_name">
                  <h2>{item.name}</h2>
                </div>
              </div>
              <div className="back">
                <p> {item.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second section ends */}




      {/* Third section start */}

      <div className="parent dr-parent sectionbreak">
        <div className="container dr-container">
          <div className="left-img"></div>
          <div className="left-text">
            <div className="text">
              <div className="text-contain">
                <h3 className="left-h3">Book a Specialist Appointment Now!</h3>
                <p>
                  {" "}
                  Schedule a consultation with a top specialist in your
                  preferred field. Select your speciality, choose a
                  time slot, and book your appointment online.
                </p>
              </div>
              <Button text="Book Now" />
            </div>
          </div>
        </div>
      </div>

      <div className="parent dr-parent dr-parent2 ">
        <div className="container dr-container bottom">
          <div className="left-img left-img-2"></div>
          <div className="left-text">
            <div className="text">
              <div className="text-contain">
                <h3> Get a Second Opinion in Seconds</h3>
                <p>
                  {" "}
                  Need a second opinion? Upload your
                  medical records to the AxonCare app and receive a personalized
                  evaluation from a qualified expert. 
                </p>
              </div>
              <Button text="Book Now" />
            </div>
          </div>
        </div>
      </div>


      {/* Third section ends */}


    </>
  );
}

export default About;
