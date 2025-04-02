import LogoJhow from '../../Assets/Images/img-2.png';
import './styles.css';

interface IWelcomeProps {
    t: (text: string) => any
}

const Welcome = ({t}: IWelcomeProps) => {
    return (
        <div className='welcome-container'>
            <div className='logo-jhow-container'>
                <img src={LogoJhow} alt="JhowLogo" className="logo-jhow" />
            </div>
            <div className='text-container'>
                <span className='text-welcome'>{t("welcome")}</span>
            </div>
        </div>
    );
}

export default Welcome;