import React from 'react';
import './styles.css';
import imageLogo from '../../Assets/Images/img-1.png';

const Header = () => {
    return(
        <div className='main'>
            <div className='container-logo'>
                <img className='image-header' src={imageLogo} alt='img-jonathas' />
                <h2>Jonathas <span className='purple'>Lopes</span></h2>
            </div>

            <ul className='buttons-container'>
                <li className='list-buttons purple'>Sobre</li>
                <li className='list-buttons'>Formação</li>
                <li className='list-buttons'>Tecnologias</li>
                <li className='list-buttons'>Projetos</li>
                <li className='list-buttons'>Certificações</li>
            </ul>

            <div className='country-contact-container'>
                <button>Contato</button>
            </div>
        </div>
    );
}

export default Header;