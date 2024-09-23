import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './herosection.scss';
import Button from '../button/Button';
import Heronext from '../heronext/Heronext';
import BelowHero from '../belowhero/BelowHero';

function Herosection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className="herosection-parent parent">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    pauseOnMouseEnter= {true}
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

                                <Button text="Know More"
                                    href="https://axonichealth.com/"
                                    blank=" {ture}"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide-img2 bg-img-cover">
                            <div className="overlay"></div>
                            <div className="slide-text-container container">
                                <h1 className='slide-heading'>Anytime, Anywhere, In Any Language</h1>
                                <Button text=" Consult Now"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide-img3 bg-img-cover">
                            <div className="overlay"></div>
                            <div className="slide-text-container container">
                                <h1 className='slide-heading'>Healthcare Is More Accessible Than Ever With Us</h1>
                                <Button text=" Join AxonCare"

                                />
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

           <BelowHero/>
        </>
    );
}

export default Herosection;
