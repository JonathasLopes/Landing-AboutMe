import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { TechLanguages } from '../../Utils/TechLanguages';
import "swiper/css";
import "swiper/css/navigation";
import './styles.css';

interface ITechnologiesProps {
    t: (text: string) => any
}

const Technologies = ({ t }: ITechnologiesProps) => {
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