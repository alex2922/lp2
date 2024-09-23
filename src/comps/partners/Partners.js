import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';

import "../../comps/partners/Partners.scss";
import Button from '../button/Button';
import Flipcard from '../flipcard/Flipcard';
import img1 from "../../assets/Grid/lab.jpg"
import img2 from "../../assets/Grid/corporate.jpg"
import img3 from "../../assets/Grid/Residencial.jpg"
import img4 from "../../assets/Grid/elderly.jpg"
import img5 from "../../assets/Grid/school.jpg"

const cardData = [
  { title: 'Labs and Pharmacies', imageUrl: '/path-to-lab-image.jpg' },
  { title: 'Elderly Care Facilities', imageUrl: '/path-to-elderly-care-image.jpg' },
  { title: 'Corporate Enterprises', imageUrl: '/path-to-corporate-image.jpg' },
  { title: 'Residential Societies', imageUrl: '/path-to-residential-image.jpg' },
  { title: 'School Health', imageUrl: '/path-to-school-image.jpg' }
];


const flipCardData = [
  {
    heading: "Labs and Pharmacies",
    desc: "Become part of our network as Lab and Pharmacy partners—key pillars in the healthcare journey. While patients visit labs for tests or pharmacies for medication, AxonCare brings doctor consultations directly to your facility, offering patients instant insights and cost-effective health solutions.",
    btn: "Enquire Now",
    btn_link: "/contact",
    img: img1,
  },
  {
    heading: "Corporate Enterprises",
    desc: "Ensure the health and productivity of your employees with AxonCare. We provide an Anytime Health kiosk at your workplace, offering 24/7 specialist consultations, daily health monitoring through point-of-care testing, and mental health support—reducing absenteeism and empowering your workforce.",
    btn: "Enquire Now",
    btn_link: "/contact",
    img: img2,
  }, {
    heading: "Residential Societies",
    desc: "AxonCare brings world-class healthcare to your doorstep. Avoid long trips to specialist clinics by setting up an AxonCare clinic within your society, providing easy access to specialists and offering consultations, prescriptions, and more—all through the AxonCare app.",
    btn: "Enquire Now",
    btn_link: "/contact",
    img: img3,
  }, {
    heading: "Elderly Care Facilities",
    desc: "Reduce frequent hospital visits for elderly residents by setting up an AxonCare clinic within your facility. Offer daily health monitoring (glucose levels, ECGs), instant access to specialists, and real-time health insights for family members—delivering convenient, continuous care.",
    btn: "Enquire Now",
    btn_link: "/contact",
    img: img4,
  }, {
    heading: "School Health",
    desc: "Monitor the health of your students from a young age with an AxonCare clinic on your school premises. Early detection of potential health issues ensures better physical and mental development, giving both students and parents peace of mind with real-time health insights.",
    btn: "Enquire Now",
    btn_link: "/contact",
    img: img5,
  }
]

function Partners() {
  return (
    <>
      <div className="partners parent">
        <div className="partners-container container" id="five-card">
          <div className="partners-top" id='partners'>
            <span className="section-indicator">AxonCare Partners</span>
            <h2>The Global  AxonCare Network </h2>
            <p>Become a partner in revolutionising healthcare delivery with our tech-powered service, connecting you to the AxonCare network. Our cutting-edge "Anytime Health" kiosk, equipped with point-of-care testing devices, is at the heart of this network, linking healthcare professionals (doctors, labs, pharmacies) with beneficiaries (patients, corporates, elderly care facilities, schools, and residential societies).</p>

            {/* <Button
              href="https://axonichealth.com/"
              text="Join the AxonCare Network" /> */}
          </div>

          <div className="partners-bottom">
            <div className="pleft">
              <div className="partner-c1">
                <Flipcard
                  heading={flipCardData[0].heading}
                  desc={flipCardData[0].desc}
                  btn_text={flipCardData[0].btn}
                  btn_link={flipCardData[0].btn_link}
                  img={flipCardData[0].img}

                />
              </div>
              <div className="partner-c2">
                <Flipcard
                  heading={flipCardData[1].heading}
                  desc={flipCardData[1].desc}
                  btn_text={flipCardData[1].btn}
                  btn_link={flipCardData[1].btn_link}
                  img={flipCardData[1].img}

                />
              </div>
            </div>
            <div className="pmiddle">
              <div className="partner-c3">
                <Flipcard
                  heading={flipCardData[2].heading}
                  desc={flipCardData[2].desc}
                  btn_text={flipCardData[2].btn}
                  btn_link={flipCardData[2].btn_link}
                  img={flipCardData[2].img}

                />
              </div>
            </div>
            <div className="pright">
              <div className="partner-c4">
                <Flipcard
                  heading={flipCardData[3].heading}
                  desc={flipCardData[3].desc}
                  btn_text={flipCardData[3].btn}
                  btn_link={flipCardData[3].btn_link}
                  img={flipCardData[3].img}

                />
              </div>
              <div className="partner-c5">
                <Flipcard
                  heading={flipCardData[4].heading}
                  desc={flipCardData[4].desc}
                  btn_text={flipCardData[4].btn}
                  btn_link={flipCardData[4].btn_link}
                  img={flipCardData[4].img}

                />
              </div>
            </div>




          </div>


          {/* for mobile and tab device */}
          <Swiper
        cssMode={true}
        navigation={true}

        // mousewheel={true}
        // keyboard={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  <div className="pleft">
              <div className="partner-c1">
                <Flipcard
                  heading={flipCardData[0].heading}
                  desc={flipCardData[0].desc}
                  btn_text={flipCardData[0].btn}
                  btn_link={flipCardData[0].btn_link}
                  img={flipCardData[0].img}

                />
              </div>
              <div className="partner-c2">
                <Flipcard
                  heading={flipCardData[1].heading}
                  desc={flipCardData[1].desc}
                  btn_text={flipCardData[1].btn}
                  btn_link={flipCardData[1].btn_link}
                  img={flipCardData[1].img}

                />
              </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="pmiddle">
              <div className="partner-c3">
                <Flipcard
                  heading={flipCardData[2].heading}
                  desc={flipCardData[2].desc}
                  btn_text={flipCardData[2].btn}
                  btn_link={flipCardData[2].btn_link}
                  img={flipCardData[2].img}

                />
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="pright">
              <div className="partner-c4">
                <Flipcard
                  heading={flipCardData[3].heading}
                  desc={flipCardData[3].desc}
                  btn_text={flipCardData[3].btn}
                  btn_link={flipCardData[3].btn_link}
                  img={flipCardData[3].img}

                />
              </div>
              <div className="partner-c5">
                <Flipcard
                  heading={flipCardData[4].heading}
                  desc={flipCardData[4].desc}
                  btn_text={flipCardData[4].btn}
                  btn_link={flipCardData[4].btn_link}
                  img={flipCardData[4].img}

                />
              </div>
            </div></SwiperSlide>

      </Swiper>



        </div>







      </div>


    </>
  );
}

export default Partners;
