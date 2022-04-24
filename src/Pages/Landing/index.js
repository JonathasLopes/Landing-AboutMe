import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../Components/Header';
import Welcome from '../../Components/Welcome';
import './styles.css';

const Landing = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Header t={t} />
            <Welcome t={t} />
        </div>
    );
}

export default Landing;