import React from 'react';
import './styles.css';

const Contact = ({ t }) => {
    return (
        <div className='contact-container'>
            <div className='subdiv'></div>
            <div className='subdiv'>
                <h3>Entre em Contato!</h3>
                <form>
                    <div className='w-100 position-relative'>
                        <input type="text" />
                        <label for="text" class="label-name">
                            <span class="content-name">
                                nome:
                            </span>
                        </label>
                    </div>
                    <input type="email" placeholder='email:' />
                    <textarea rows={10} placeholder='mensagem:' />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;