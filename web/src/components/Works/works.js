import React from 'react'
import './works.css'
//import Languages from '../../assets/Languages.png'
//import UoB from '../../assets/uob-logo.png'


const Works = () => {
    return (
        <section id='works'>
            <span className='worksTitle'> My Portfolio </span>
            <span className='worksDesc'>I take pride in what I do, and like to do challenging projects that I enjoy. I ensure good coding practices throughout my work and pay close attention to the smallest details.</span>
            <div className='worksImgs'>
                <img src='' alt='Project 1' className='WorksImg'/>
                <img src='' alt='Project 1' className='WorksImg'/>
                <img src='' alt='Project 2' className='WorksImg'/>
                <img src='' alt='Project 3' className='WorksImg'/>
                <img src='' alt='Project 4' className='WorksImg'/>
                <img src='' alt='Project 5' className='WorksImg'/>
                <img src='' alt='Project 6' className='WorksImg'/>
            </div>
            <button className='worksBtn'>See More</button>
        </section>
    )
}

export default Works;