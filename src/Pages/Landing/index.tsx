import { useTranslation } from 'react-i18next';
import About from '../../Components/About';
import Header from '../../Components/Header';
import Welcome from '../../Components/Welcome';
import Technologies from '../../Components/Technologies';
import Design from '../../Assets/Images/design-1.png';
import Certifications from '../../Components/Certifications';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import './styles.css';

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
            <Contact t={t} />
            <Footer />
        </div>
    );
}

export default Landing;