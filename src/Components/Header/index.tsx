import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './styles.css';
import imageLogo from '../../Assets/Images/img-1.png';
import CountryPicker from '../CountryPicker';
import { useLocation } from 'react-router-dom';
import RemoveHash from '../../Helpers/RemoveHash';

interface IHeaderProps {
    t: (text: string) => any
}

interface NavLinkProps {
    to: string;
    label: string;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    active: number;
    identifier: number;
}

const Header = ({ t }: IHeaderProps) => {
    const [selected, setSelected] = useState(0);
    const nav = useLocation();

    function updateSelect() {
        if (nav.hash?.includes("graduate"))
            setSelected(1);
        else if (nav.hash?.includes("technologies"))
            setSelected(2);
        else if (nav.hash?.includes("certifications"))
            setSelected(4);
        else
            setSelected(0);
    }

    useEffect(() => {
        const onHashChange = () => {
            updateSelect();
        };
    
        window.addEventListener('hashchange', onHashChange);
    
        return () => {
            window.removeEventListener('hashchange', onHashChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='main'>
            <RemoveHash />
            <div className='container-logo'>
                <img className='image-header' src={imageLogo} alt='img-jonathas' />
                <h2>Jonathas <span className='purple'>Lopes</span></h2>
            </div>

            <ul className='buttons-container'>
                <li className='list-buttons purple'>
                    <NavHashLink to="/#about" label={t('about')} setActive={setSelected} active={selected} identifier={0} />
                </li>
                <li className='list-buttons'>
                    <NavHashLink to="/#graduate" label={t('graduate')} setActive={setSelected} active={selected} identifier={1} />
                </li>
                <li className='list-buttons'>
                    <NavHashLink to="/#technologies" label={t('technologies')} setActive={setSelected} active={selected} identifier={2} />
                </li>
                {/* <li className='list-buttons'>
                    <button type="button" onClick={() => setSelected(3)} className={selected === 3 ? 'purple' : ''}>
                        {t('projects')}
                    </button>
                </li> */}
                <li className='list-buttons'>
                    <NavHashLink to="/#certifications" label={t('certifications')} setActive={setSelected} active={selected} identifier={4} />
                </li>
            </ul>

            <div className='country-contact-container'>
                <CountryPicker />
                <div className='nav-button'>
                    <NavHashLink to="/#contact" label={t('contact')} setActive={setSelected} active={selected} identifier={5} />
                </div>
            </div>
        </div>
    );
}


const NavHashLink: React.FC<NavLinkProps> = ({ to, label, setActive, active, identifier }) => {
    const scrollWithOffset = (element: HTMLElement): void => {
        if (element && element instanceof HTMLElement) {
            const offset = 70;
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <HashLink
            smooth
            onClick={() => setActive(identifier)}
            to={to}
            scroll={scrollWithOffset}
            className={`nav-link ${active === identifier && identifier !== 5 ? 'purple' : ''}`}
        >
            {label}
        </HashLink>
    )
}

export default Header;