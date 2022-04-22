import React, { useState } from 'react';
import './styles.css';
import imageLogo from '../../Assets/Images/img-1.png';
import CountryPicker from '../CountryPicker';

const Header = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className='main'>
            <div className='container-logo'>
                <img className='image-header' src={imageLogo} alt='img-jonathas' />
                <h2>Jonathas <span className='purple'>Lopes</span></h2>
            </div>

            <ul className='buttons-container'>
                <li className='list-buttons purple'>
                    <button type="button" onClick={() => setSelected(0)} className={selected === 0 ? 'purple' : ''}>
                        Sobre
                    </button>
                </li>
                <li className='list-buttons'>
                    <button type="button" onClick={() => setSelected(1)} className={selected === 1 ? 'purple' : ''}>
                        Formação
                    </button>
                </li>
                <li className='list-buttons'>
                    <button type="button" onClick={() => setSelected(2)} className={selected === 2 ? 'purple' : ''}>
                        Tecnologias
                    </button>
                </li>
                <li className='list-buttons'>
                    <button type="button" onClick={() => setSelected(3)} className={selected === 3 ? 'purple' : ''}>
                        Projetos
                    </button>
                </li>
                <li className='list-buttons'>
                    <button type="button" onClick={() => setSelected(4)} className={selected === 4 ? 'purple' : ''}>
                        Certificações
                    </button>
                </li>
            </ul>

            <div className='country-contact-container'>
                <CountryPicker />
                <button>Contato</button>
            </div>
        </div>
    );
}

export default Header;