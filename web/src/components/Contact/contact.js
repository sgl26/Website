import React from "react";
import './contact.css';
// need to think about where to place the clients - which would have experience instead and the contact sections
const Contact = () => {
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
                <form className="contactForm">
                    <input type='text' className="name" placeholder="Your Name or Company"/>
                    <input type='email' className='email' placeholder="Your Email"/>
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