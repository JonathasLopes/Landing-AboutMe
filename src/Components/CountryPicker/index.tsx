import { useState } from 'react';
import { CountryFlags } from '../../Utils/CountryFlags';
import './styles.css';

const CountryPicker = () => {
    const [show, setShow] = useState(false);
    const url = window.location.pathname === '/' ? '/br' : window.location.pathname;

    return (
        <div className='select_box'>
            <button className="dropbtn" onClick={() => setShow(!show)} onBlur={() => setTimeout(() => setShow(false), 400)}>
                <img src={CountryFlags[CountryFlags.findIndex(x => x.value === url)].label} alt={CountryFlags[CountryFlags.findIndex(x => x.value === url)].value} className="img-country" />
            </button>

            {show &&
                <div className="select">
                    {CountryFlags.filter(x => x.value !== url).map((country, index) => {
                        return (
                            <a className='option' key={index} href={country.value}>
                                <img src={country.label} alt={country.value} className="img-country" />
                            </a>
                        );
                    })}
                </div>
            }
        </div>
    )
}

export default CountryPicker;