import React from 'react'
import './skills.css'
import Cpp from '../../assets/C++.png'
import Python from '../../assets/Python.png'
import MATLAB from '../../assets/Matlab.png'
import C from '../../assets/C.png'
import SQL from '../../assets/SQL.png'
import VBA from '../../assets/VBA.png'
import UoB from '../../assets/uob-logo.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Skills</span>
            <span className='blurbSkills'>As an aspiring software engineer, I have varying experience in a number of different languages and applications.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <div className='skillBarText'>
                        <h2>Strong Programming Languages</h2>
                        <p>C++: 5 years university experience.</p> 
                        <p>Python: 2 years high intensity experience.</p> 
                        <p>MATLAB: 5 years university experience.</p>
                    </div>
                    <img src={Cpp} alt='C++' className='skillBarImg'/>
                    <img src={Python} alt='Python' className='skillBarImg'/>
                    <img src={MATLAB} alt='MATLAB' className='skillBarImg'/>

                </div>
                <div className='skillBar'>
                    <img src={C} alt='C' className='skillBarImg'/>
                    <img src={SQL} alt='SQL' className='skillBarImg'/>
                    <img src={VBA} alt='VBA' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Beginner Programming Languages</h2>
                        <p>C: 5 years limited university experience.</p> 
                        <p>SQL: 3 months placement experience.</p> 
                        <p>VBA: 3 months placement experience.</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <div className='skillBarText'>
                        <h2>Other Skills</h2>
                        <p></p>
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