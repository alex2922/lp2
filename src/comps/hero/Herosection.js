import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './herosection.scss';

function Herosection() {
    return (

        <>
            <div className="herosection-parent parent">

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {/* ----------------------slide1------------- */}
                    <SwiperSlide>
                        <div className=" slide slide-img1 bg-img-cover ">
                            <div className="overlay"></div>
                            <div className="container hero-slide-container">
                                <h1>Revolutionising the way you receive healthcare with AxonCare
                                </h1>

                                <button>Know More</button>
                            </div>
                        </div>

                    </SwiperSlide>

                </Swiper>



            </div>



        </>
    )
}

export default Herosection