import LogoGreen from '../../Assets/Images/Anhembi-green.png';
import LogoWhite from '../../Assets/Images/anhembi-white.png';
import LogoFatec from '../../Assets/Images/fatec.png';
import { GetAge } from '../../Helpers/GetAge';
import './styles.css';

interface IAboutProps {
    t: (text: string, variables?: any) => any
}

const About = ({ t }: IAboutProps) => {
    const age = GetAge(2000);

    return (
        <div id="about" className='about-container'>
            <h2>{t("about-me")}</h2>
            <p>{t("about1")}</p>
            <p>{t("about2", { age })}</p>
            <p>{t("about3")}</p>
            <p>{t("about4")}</p>
            <p>{t("about5")}</p>
            <h2 id="graduate" className='h2-second'>{t('graduate')}</h2>
            <div className='card-container'>
                <div className='card'>
                    <img src={LogoWhite} alt="logo" />
                    <div className='infos-card'>
                        <span className='title-card'>{t("graduate1")}</span>
                        <span className='subtitle-card'>Universidade Anhembi Morumbi</span>
                        <span className='year-card'>2021</span>
                    </div>
                </div>
                <div className='card card-middle'>
                    <img src={LogoFatec} alt="logo" />
                    <div className='infos-card'>
                        <span className='title-card'>{t("graduate2")}</span>
                        <span className='subtitle-card'>Fatec Zona Leste</span>
                        <span className='year-card'>2021</span>
                    </div>
                </div>
                <div className='card'>
                    <img src={LogoGreen} alt="logo" />
                    <div className='infos-card'>
                        <span className='title-card'>{t("graduate3")}</span>
                        <span className='subtitle-card'>Universidade Anhembi Morumbi</span>
                        <span className='year-card'>2023</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;