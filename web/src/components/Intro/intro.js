import React from 'react'
import './intro.css'
import headshot from '../../assets/Headshot.png'
import { Link } from 'react-scroll'
import HireMe from '../../assets/HireMe.png'

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello</span>
                <span className='introText'>I'm <span className='introName'>Sam Lawton</span><br/> Aspiring Website<br/> Designer</span>
                <p className='introPara'>I am a recent graduate hoping to break into<br/> the field of software development.</p>
                <Link><button className='btn'><img src={HireMe} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={headshot} alt='headshot' className='headshot'/>
        </section>
    )
}

export default Intro;