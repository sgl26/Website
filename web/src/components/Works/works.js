import React from 'react';
import {motion} from 'framer-motion';
import { useState } from 'react';
import './works.css'
//import Languages from '../../assets/Languages.png'
//import UoB from '../../assets/uob-logo.png'
import edu from '../../assets/Education.png'
import babcock from '../../assets/babcock-logo.png'
import innovate from '../../assets/3PInnovation.png'
import swimming from '../../assets/UoB_Swimming.png'
import spaget from '../../assets/Spagetti.png'
import moreP from '../../assets/MoreProjects.png'


const Works = () => {
    return (
        <section id='works'>
            <span className='worksTitle'> Experience </span>
            <span className='worksDesc'>Although I have never been in a full time graduate role, I have significant experience in a wide range of areas.</span>
            <div className='worksImgs'>
                <button className='Expandable'>
                    <img src={edu} alt='Education' className='worksImg'/>
                    <div className='caption'>
                        <span className='ImgRef'>Education</span>
                    </div>
                </button>
                <button className='Expandable'>
                    <img src={babcock} alt='Babcock International' className='worksImg'/>
                    <div className='caption'>
                        <span className='ImgRef'>Data Analytics Internship</span>
                    </div>
                </button>
                <button className='Expandable'>
                    <img src={spaget} alt='Final Year Project icon' className='worksImg'/>
                    <div className='caption'>
                        <span className='ImgRef'>Final Year Project</span>
                    </div>
                </button>
                <button className='Expandable'>
                    <img src={swimming} alt='University of Bath Swimming Club' className='worksImg'/>
                    <div className='caption'>
                        <span className='ImgRef'>Chair of University Society</span>
                    </div>
                </button>
                <button className='Expandable'>
                    <img src={innovate} alt='3P Innovation' className='worksImg'/>
                    <div className='caption'>
                        <span className='ImgRef'>Electrical Engineering Intern</span>
                    </div>
                </button>
                <button className='Expandable'>
                    <img src={moreP} alt='Further Projects' className='worksImg'/>
                    <div className='caption'>
                        <span className='ImgRef'>Further Projects</span>
                    </div>
                </button>
            </div>
            
        </section>
    )
}
/*cound add the see more button at the bottom to take you to the cv <button className='worksBtn'>See More</button>*/
/*I take pride in what I do, and like to do challenging projects that I enjoy. I ensure good coding practices throughout my work and pay close attention to the smallest details.*/

export default Works;