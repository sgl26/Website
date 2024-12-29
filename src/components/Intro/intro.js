import React from 'react'
import './intro.css'
import headshot from '../../assets/Headshot.png'
import { Link } from 'react-scroll'
import HireMe from '../../assets/HireMe.png'

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='introName'>Sam Lawton</span>
                <hr style={{color:'aquamarine', height:2, backgroundColor:'aquamarine', border:'none'}}/>
                <span className='introText'>An ambitious graduate with a passion for software</span>
                <hr style={{color:'aquamarine', height:2, backgroundColor:'aquamarine', border:'none'}}/>
                <p className='introPara'>
                    <ul style={{listStyleType:'disc'}}>
                        <li className='bullet'>Graduated from an engineering degree which had a heavy focus on <span className='highlight'>programming</span> and <span className='highlight'>machine learning</span>, while competing in <span className='highlight'>Kaggle</span> competitions in my spare time.</li>
                        <li className='bullet'>Takes on a <span className='highlight'>leading</span> role in projects, having led the swimming team to 4th in the University Swimming League, and ensures all teams have an inclusive and collaborative culture.</li>
                        <li className='bullet'>Eager to work in a <span className='highlight'>fast-paced environment</span>, bringing skills to the forefront of innovation.</li>
                    </ul>
                </p>
                <Link><button className='btn' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}><img src={HireMe} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={headshot} alt='headshot' className='headshot'/>
        </section>
    )
}

export default Intro;