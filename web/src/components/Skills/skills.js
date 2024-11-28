import React from 'react'
import './skills.css'
import Languages from '../../assets/Languages.png'
import UoB from '../../assets/uob-logo.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'> About Me </span>
            <span className='blurbSkills'>An ambitious individual, eager to learn whilst growing into a professional role in Software Engineering. I take leading roles in projects, but also take time to create a positive atmosphere within my team.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={Languages} alt='Languages' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Programming Languages</h2>
                        <p>Strong: C++, Matlab, Python; Basic: C, SQL, VBA</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src={UoB} alt='University?' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Education</h2>
                        <p>First-Class Meng from The University of Bath. 4 A*s at A-Level</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src={Languages} alt='Something Else?' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Experience</h2>
                        <p>Kaggle Competitions, Electrical Engineering Placement, Data Science Placement</p>
                    </div>
                </div>
            </div>
        Things to include:
                1. Languages in boxes
                1. Education (have a hyperlink? maybe can have a flow of each in this as well)
                2. Previous employment
                3. Attach CV
        </section>
    )
}

export default Skills;