import React from 'react'
import './skills.css'
import Cpp from '../../assets/C++.png'
import Python from '../../assets/Python.png'
import MATLAB from '../../assets/Matlab.png'
import C from '../../assets/C.png'
import SQL from '../../assets/SQL.png'
import VBA from '../../assets/VBA.png'
import weak from '../../assets/WeakPro.png'
import strong from '../../assets/StrongPro.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Skills</span>
            <span className='blurbSkills'>As an aspiring software engineer, I have varying experience in a number of different languages and applications.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <div className='skillBarText'>
                        <h2>Strong Languages</h2>
                        <p>C++: 5 years university experience.</p> 
                        <p>Python: 2 years high intensity experience.</p> 
                        <p>MATLAB: 5 years university experience.</p>
                    </div>
                    <div className='imgR'>
                        <img src={Cpp} alt='C++' className='skillBarImgR'/>
                        <img src={Python} alt='Python' className='skillBarImgR'/>
                        <img src={MATLAB} alt='MATLAB' className='skillBarImgR'/>
                        <img src={strong} alt='Strong Languages' className='skillBarImgSmall'/>
                    </div>

                </div>
                <div className='skillBar'>
                    <div className='skillBarText'>
                        <h2>Beginner Languages</h2>
                        <p>C: 5 years limited university experience.</p> 
                        <p>SQL: 3 months placement experience.</p> 
                        <p>VBA: 3 months placement experience.</p>
                    </div>
                    <div className='imgR'>
                        <img src={C} alt='C' className='skillBarImgR'/>
                        <img src={SQL} alt='SQL' className='skillBarImgR'/>
                        <img src={VBA} alt='VBA' className='skillBarImgR'/>
                        <img src={weak} alt='Weak Languages' className='skillBarImgSmall'/>
                    </div>
                </div>
                <div className='skillSide'>
                    <div className='skillBox'>
                        <div className='skillBarText'>
                            <h2>Other Skills</h2>
                            <p>
                            <ul style={{listStyleType:'disc'}}>
                                <li className='bullet'>Power BI</li>
                                <li className='bullet'>ReactJS</li>
                                <li className='bullet'>CAD: Inventor, AutoCAD</li>
                            </ul>
                            </p>
                        </div>
                    </div>

                    <div className='skillBox'>
                        <div className='skillBarText'>
                            <h2>Hobbies</h2>
                            <p>
                            <ul style={{listStyleType:'disc'}}>
                                <li className='bullet'>Swimming</li>
                                <li className='bullet'>Hockey</li>
                                <li className='bullet'>Football</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;