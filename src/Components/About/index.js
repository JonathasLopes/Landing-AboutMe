import React from 'react';
import './styles.css';

const About = ({ t }) => {
    return (
        <div className='about-container'>
            <h2>{t("about-me")}</h2>
            <p>{t("about1")}</p>
            <p>{t("about2")}</p>
            <p>{t("about3")}</p>
            <p>{t("about4")}</p>
            <p>{t("about5")}</p>
        </div>
    );
}

export default About;