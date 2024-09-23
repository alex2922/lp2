import React from "react";
import Videosec from "../../comps/videosec/Videosec";
import patientvideo from "../../assets/videos/Render_webm.webm";
import Partners from "../../comps/partners/Partners";
import FourCard from "../../comps/fourCard/FourCard";
import Herosection from "../../comps/hero/Herosection";
import doctorVideo from "../../assets/videos/doctor_video.webm"
// icons
import optpmetrist from "../../assets/icons/optometrist.gif";
import twentyfourseven from "../../assets/icons/24-7.gif";
import opinion from "../../assets/icons/opinion.gif";
import admin from "../../assets/icons/phys.gif";
import boost from "../../assets/icons/rocket.gif";
import global from "../../assets/icons/world.gif";

import Herosection from "../../comps/hero/Herosection";
import About_sec from "../../comps/about/About_sec";
function Home() {
  const cardData = [
    {
      icon: optpmetrist,
      heading: "Get Your One-Stop Specialists",
      desc: "We are a specialist hub providing appointments at your convenience. No need to search for specialist clinics or travel long distances; we have all the specialists you need under one roof.",
      btn_text: " Book an Appointment ",
      href_link: "/",
      animation:"fade-up"
    },
    {
      icon: twentyfourseven,
      heading: "24/7 Comprehensive Care For You",
      desc: "We pride ourselves on our ability to provide care whenever you need it. Our services ensure that you get timely, comprehensive care for both physical and mental health concerns.",
      btn_text: " Book an Appointment ",
      href_link: "/",
       animation:"fade-down"
    },
    {
      icon: opinion,
      heading: "Second Opinions at Your Fingertips",
      desc: "When it comes to healthcare, getting a second opinion is crucial. Our network of specialists provides expert insights on diagnoses, treatments, and prognoses for you and your family.",
      btn_text: " Book an Appointment",
      href_link: "/",
       animation:"fade-up"
    },
  ];
  const cardData2 = [
    {
      icon: admin,
      heading: "No Admins, No Overheads – Just Care",
      desc: "With AxonCare’s AI-powered practice management, you can focus solely on patient care, while we handle all administrative tasks, allowing you to work on your terms and enjoy a balanced life. ",
      btn_text: " Join AxonCare Network  ",
      href_link: "/",
       animation:"fade-up"
    },
    {
      icon: boost,
      heading: "Expand Your Reach, Boost Your Revenue",
      desc: "Increase your patient base and boost your revenue by attracting more patients through AxonCare's extensive global network. Our platform connects doctors with patients worldwide.",
      btn_text: " Join AxonCare Network ",
      href_link: "/",
       animation:"fade-down"
    },
    {
      icon: global,
      heading: "The Global Healthcare Network ",
      desc: "Join a global network of healthcare professionals. With AxonCare, you are providing much-needed care to patients worldwide while revolutionising the way healthcare is delivered.",
      btn_text: " Join AxonCare Network ",
      href_link: "/",
       animation:"fade-up"
    },
  ];
  return (
    <div>
      <Herosection />
      <About_sec/>

      
      <Videosec
        heading="For Patients -"
        highlight=" Care Anytime, Anywhere, In Any Language "
        desc="We bring healthcare to you—from daily health checkups to specialist appointments, you receive world-class care with just a few clicks. Our multispecialty smart clinic connects you to a specialist in minutes, allowing you to book appointments and store medical records in the AxonCare app. Our “Anytime Health” kiosk provides over 130 rapid test results, offering real-time health insights for both you and your doctor. This integrated service ensures a comprehensive view of your health for seamless, accurate care."
        btn_text="Book Appointment"
        videoSource={patientvideo}
      />
      <FourCard cardData={cardData} />
      <Videosec
        heading="For Doctors -"
        highlight=" With AxonCare, Make The Whole World Your OPD "
        desc="Doctors are a powerful community and are at the heart of the healthcare system. The AxonCare network is what you need if you're looking to expand your practice, boost clinic revenue, and make a global impact—all on a flexible schedule that suits your convenience. Our service network allows you to consult with patients from any corner of the world, at your preferred time. With AxonCare's support, you receive a comprehensive health history of patients, reducing consultation time and increasing patient reach. This enables you to grow your practice and revenue, while making a global impact through our healthcare network."
        btn_text=" Join the AxonCare Network "
        videoSource={doctorVideo}
      />
      <FourCard cardData={cardData2} />
      <Partners />
    </div>
  );
}

export default Home;
