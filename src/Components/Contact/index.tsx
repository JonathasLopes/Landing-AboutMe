import triangles from '../../Assets/Images/triangles.svg';
import './styles.css';

interface IContactProps {
    t: (text: string) => any
}

const Contact = ({ t }: IContactProps) => {
    return (
        <div id="contact" className='contact-container'>
            <div className='container-contact-triangles'>
                <img src={triangles} alt="triangles" className='triangles-vertical' />
                <div className='subdiv-container-form'>
                    <h3>{t('inContact')}</h3>
                    <form>
                        <input type="text" placeholder={`${t('name')}:`} />
                        <input type="email" placeholder={`${t('email')}:`} />
                        <textarea rows={10} placeholder={`${t('message')}:`} />
                        <button type='submit' className='btn-send'>{t('send')}</button>
                    </form>
                </div>
                <img src={triangles} alt="triangles" className='triangles-vertical' />
            </div>
        </div>
    );
}

export default Contact;