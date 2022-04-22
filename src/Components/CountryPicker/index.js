import React from 'react';
import { CountryFlags } from '../../Utils/CountryFlags';
import './styles.css';

const CountryPicker = () => {
    return (
        <div>
            <select>
                {CountryFlags.map(country => {
                    return (
                        <option value={country.value}>{country.label}</option>
                    );
                })}
            </select>
        </div>
    )
}

export default CountryPicker;