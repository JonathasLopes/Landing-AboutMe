import React from 'react';
import './styles.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { TechLanguages } from '../../Utils/TechLanguages';

const Technologies = ({ t }) => {
    return (
        <div className='tech-container'>
            <h2>{t("technologies")}</h2>
            <Swiper
                slidesPerView={10}
                spaceBetween={10}
                parallax={true}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {TechLanguages.map((language, index) => {
                    return (
                        <SwiperSlide key={index} className='margin-sides'>
                            <div className='container-logo-dev'>
                                <div className={`circle ${language.class}`}>
                                    {language.logo}
                                </div>
                                <span>{language.title}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Technologies;