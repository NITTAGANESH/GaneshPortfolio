import React, { useRef } from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'


function Contacts() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tjdpux7', 'template_lwavtlp', form.current, 'cjPy_6EiT6cJPAJy3')

        e.target.reset()

    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>nittaganeshkumar@gmail.com</h5>
                        <a href='mailto:nittaganeshkumar@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Ganesh Kumar</h5>
                        <a href='https://m.me/nittaganeshkumar' target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+918074800538</h5>
                        <a href='https://api.whatsapp.com/send?phone+918074800538' target="_blank" rel="noreferrer" >Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required />
                    <input type="email" name='email' placeholder="Your Email" required />
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts