import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import { TechLanguages } from '../../Utils/TechLanguages';
import "swiper/css";
import './styles.css';

interface ITechnologiesProps {
    t: (text: string) => any
}

const Technologies = ({ t }: ITechnologiesProps) => {
    return (
        <div id="technologies" className='tech-container'>
            <h2>{t("technologies")}</h2>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={1000}
                spaceBetween={30}
                allowTouchMove={true}
                grabCursor={false}
                slidesPerView={'auto'} 
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