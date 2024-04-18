import React from 'react';
import './styles.css';

import LogoGreen from '../../Assets/Images/Anhembi-green.png';
import LogoWhite from '../../Assets/Images/anhembi-white.png';
import LogoFatec from '../../Assets/Images/fatec.png';

const About = ({ t }) => {
    return (
        <div className='about-container'>
            <h2>{t("about-me")}</h2>
            <p>{t("about1")}</p>
            <p>{t("about2")}</p>
            <p>{t("about3")}</p>
            <p>{t("about4")}</p>
            <p>{t("about5")}</p>
            <h2 className='h2-second'>{t('graduate')}</h2>
            <div className='card-container'>
                <div className='card'>
                    <img src={LogoWhite} alt="logo" />
                    <div className='infos-card'>
                        <span className='title-card'>{t("graduate1")}</span>
                        <span className='subtitle-card'>Universidade Anhembi Morumbi</span>
                        <span className='year-card'>2021</span>
                    </div>
                </div>
                <div className='card card-middle'>
                    <img src={LogoFatec} alt="logo" />
                    <div className='infos-card'>
                        <span className='title-card'>{t("graduate2")}</span>
                        <span className='subtitle-card'>Fatec Zona Leste</span>
                        <span className='year-card'>2021</span>
                    </div>
                </div>
                <div className='card'>
                    <img src={LogoGreen} alt="logo" />
                    <div className='infos-card'>
                        <span className='title-card'>{t("graduate3")}</span>
                        <span className='subtitle-card'>Universidade Anhembi Morumbi</span>
                        <span className='year-card'>2023</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;