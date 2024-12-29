import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';
import github from '../../assets/github.png' 
import LinkedIn from '../../assets/linkedIn.png' 

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};
// need to think about where to place the clients - which would have experience instead and the contact sections
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ig4p5s6', 'template_qlxwbqs', form.current, {
            publicKey: 'G6Fyop7GZv0Uh8A30',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <section id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span classname='contactDesc'>Please send me an email using the form below with any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type='text' className="name" placeholder="Your Name or Company" name="your_name"/>
                    <input type='email' className='email' placeholder="Your Email" name="your_email"/>
                    <textarea className='msg' name="message" rows='5' placeholder="Your Message"></textarea>
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={LinkedIn} alt='LinkedIn' className="linkedin" onClick={() => openInNewTab('https://www.linkedin.com/in/sam-lawton-4987b61b8/')}/>
                        <img src={github} alt='GitHub' className="github" onClick={() => openInNewTab('https://github.com/sgl26')}/>
                    </div>
                </form>
        </section>
    );
}

export default Contact