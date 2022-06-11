import React from 'react';
import './styles.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { 
    SiTypescript, 
    SiJavascript, 
    SiReact, 
    SiNodedotjs, 
    SiSwift,
    SiCsharp,
    SiDotnet,
    SiMicrosoftsqlserver,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiJquery
} from 'react-icons/si';

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
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle typescript'>
                            <SiTypescript className='icon' />
                        </div>
                        <span>Typescript</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle javascript'>
                            <SiJavascript className='icon' />
                        </div>
                        <span>Javascript</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle react-dark'>
                            <SiReact className='icon' />
                        </div>
                        <span>React JS</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle react-light'>
                            <SiReact className='icon' />
                        </div>
                        <span>React Native</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle node'>
                            <SiNodedotjs className='icon' />
                        </div>
                        <span>Node Js</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle swift'>
                            <SiSwift className='icon' />
                        </div>
                        <span>Swift</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle csharp'>
                            <SiCsharp className='icon' />
                        </div>
                        <span>C#</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle dotnet'>
                            <SiDotnet className='icon' />
                        </div>
                        <span>.Net Core</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle sqlserver'>
                            <SiMicrosoftsqlserver className='icon' />
                        </div>
                        <span>SQL Server</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle mysql'>
                            <SiMysql className='icon' />
                        </div>
                        <span>MySQL</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle postgresql'>
                            <SiPostgresql className='icon' />
                        </div>
                        <span>PostgreSQL</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle mongodb'>
                            <SiMongodb className='icon' />
                        </div>
                        <span>MongoDB</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle html'>
                            <SiHtml5 className='icon' />
                        </div>
                        <span>HTML</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle css'>
                            <SiCss3 className='icon' />
                        </div>
                        <span>CSS</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle bootstrap'>
                            <SiBootstrap className='icon' />
                        </div>
                        <span>Bootstrap</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='margin-sides'>
                    <div className='container-logo-dev'>
                        <div className='circle jquery'>
                            <SiJquery className='icon' />
                        </div>
                        <span>JQuery</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Technologies;