import React, { useContext, useState } from 'react';
import i18n from '../../i18n';
import LocaleContext from '../../LocaleContext';
import { CountryFlags } from '../../Utils/CountryFlags';
import './styles.css';

const CountryPicker = () => {
    const url = window.location.pathname.substring(1);
    const [location, setLocation] = useState(url !== "" ? url : "br");
    const { locale } = useContext(LocaleContext);

    function changeLocale(lang) {
        if (locale !== lang) {
            window.location.href = "/"+lang;
            i18n.changeLanguage(lang);
        }
    }

    return (
        <div className='select_box'>
            <select className='select' value={location} onChange={(e) => {changeLocale(e.target.value); setLocation(e.target.value)}}>
                {CountryFlags.map((country, index) => {
                    return (
                        <option className='option' key={index} value={country.value}>{country.label}</option>
                    );
                })}
            </select>
        </div>
    )
}

export default CountryPicker;