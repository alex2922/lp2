import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import './herosection.scss';

function Herosection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className="herosection-parent parent">

                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="slide slide-img1 bg-img-cover">
                            <div className="overlay"></div>
                            <div className="slide-text-container container">
                                <h1 className='slide-heading'>AI and Tech Revolutionising healthcare Delivery</h1>
                                <button>Know More</button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide slide-img2 bg-img-cover">
                            <div className="overlay"></div>
                            <div className="slide-text-container container">
                                <h1 className='slide-heading'>Anytime, Anywhere, In Any Language</h1>
                                <button>Know More</button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide slide-img3 bg-img-cover">
                            <div className="overlay"></div>
                            <div className="slide-text-container container">
                                <h1 className='slide-heading'>Healthcare Is More Accessible Than Ever With Us</h1>
                                <button>Join AxonCare</button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="custom-nav-buttons">
                    <div ref={prevRef} className="swiper-button-prev">
                    <HiOutlineArrowNarrowLeft />
                    </div>
                    <div ref={nextRef} className="swiper-button-next">
                    <HiOutlineArrowNarrowRight />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Herosection;
