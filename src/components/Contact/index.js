import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_y1u5odn', form.current,'VqveLGVidh8_3wirG')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
    
    return(
        <>
            <div className='contain contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx = {15}
                        />
                    </h1>
                    <p>
                        I am open to new opportunities to have the chance to learn
                        even more. If you have any questions or requests, don't 
                        hesitate to reach out to me using the links provided!
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type="text" 
                                        namme="name" 
                                        placeholder="Name" 
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                        type="text"
                                        name="subject" 
                                        placeholder="Subject" 
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <textarea 
                                        name="message" 
                                        placeholder="Message" 
                                        required>
                                    </textarea>
                                </li>
                                <li className='half'>
                                    <input type="submit" className='flat-button' value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Contact