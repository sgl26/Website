import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';
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
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Experience</h1> 
                <p className="experienceDesc">
                    Although I have never been in a full time graduate role, I have significant experience in a wide range of areas. The most valuble of these jobs are
                </p>
                <div className="experienceImgs">
                    <img src='' alt='Babcock' className="expImg"/>
                    <img src='' alt='3P Innovation' className="expImg"/>
                    <img src='' alt='Bath University Swimming Club' className="expImg"/>
                    
                </div>

            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span classname='contactDesc'>Please send me an email using the form below with any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type='text' className="name" placeholder="Your Name or Company" name="your_name"/>
                    <input type='email' className='email' placeholder="Your Email" name="your_email"/>
                    <textarea className='msg' name="message" rows='5' placeholder="Your Message"></textarea>
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src='' alt='LinkedIn' className="link"/>
                        <img src='' alt='GitHub' className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact