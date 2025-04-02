import jonathasIMG from '../../Assets/Images/jonathas.svg';
import triangles from '../../Assets/Images/triangles.svg';
import './styles.css';

interface IContactProps {
    t: (text: string) => any
}

const Contact = ({ t }: IContactProps) => {
    return (
        <div className='contact-container'>
            <div className='subdiv'>
                <img src={triangles} alt="triangles" className='triangles-jonathas' />
                <div className='border-img'>
                    <img src={jonathasIMG} alt="foto do jonathas" className='img-jonathas' />
                </div>
            </div>
            <div className='subdiv'>
                <div className='container-contact-triangles'>
                    <div className='subdiv-container-form'>
                        <h3>Entre em Contato!</h3>
                        <form>
                            <input type="text" placeholder='nome:' />
                            <input type="email" placeholder='email:' />
                            <textarea rows={10} placeholder='mensagem:' />
                            <button type='submit' className='btn-send'>Enviar</button>
                        </form>
                    </div>
                    <img src={triangles} alt="triangles" className='triangles-vertical' />
                </div>
            </div>
        </div>
    );
}

export default Contact;