import React from 'react';
import { useTranslation } from 'react-i18next';
import About from '../../Components/About';
import Header from '../../Components/Header';
import Welcome from '../../Components/Welcome';
import Technologies from '../../Components/Technologies';
import './styles.css';

import Design from '../../Assets/Images/design-1.png';
import Certifications from '../../Components/Certifications';

const Landing = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Header t={t} />
            <Welcome t={t} />
            <div className='container-about-design'>
                <About t={t} />
                <img src={Design} alt="design-1" />
            </div>
            <Technologies t={t} />
            <Certifications t={t} />
        </div>
    );
}

export default Landing;