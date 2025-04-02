import linkedin from '../../Assets/Images/linkedin.svg';
import github from '../../Assets/Images/github.svg';
import './styles.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='background-deg'>
                <div className='footer-links'>
                    <a href='https://www.linkedin.com/in/jhowlopes/' rel="noreferrer" target='_blank'>
                        <img src={linkedin} alt='linkedin' />
                    </a>
                    <a href='https://github.com/JonathasLopes' rel="noreferrer" target='_blank'>
                        <img src={github} alt='github' />
                    </a>
                </div>
                <span className='copyright'>Copyright © {new Date(Date.now()).getFullYear()} Jonathas Lopes</span>
            </div>
        </div>
    );
}

export default Footer;