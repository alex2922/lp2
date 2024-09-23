import React, { useEffect, useState } from "react";
import "./fourcard.scss";
import twentyfourseven from "../../assets/icons/24-7.gif";
import Button from "../button/Button";
import Aos from "aos";
import "aos/dist/aos.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
// icons

const FourCard = (props) => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="card-section-parent parent">
        <div className="heading-container container">
          <h2>What we offer</h2>
        </div>

        <div className="card-section-container container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500000000000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 100,
              },

              750: {
                slidesPerView: 2,
                spaceBetween: 50,
              },

              1100: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            centeredSlides={false}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {props.cardData.map((item, index) => (
              <SwiperSlide className="cardSlide" data-aos={item.animation}   >
                <div className="card" key={index}>
                  <img src={item.icon} alt="" />

                  <h3>{item.heading}</h3>

                  <p>{item.desc}</p>

                  <Button text={item.btn_text} href="/contact" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FourCard;
