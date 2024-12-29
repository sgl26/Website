import React, { useState } from 'react'
import './navbar.css'
import Profile from '../../assets/Profile.png'
import { Link } from 'react-scroll'
import emailSymbol from '../../assets/email.png'
import menu from '../../assets/Hamburger_icon.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={Profile} alt='Profile' className='Profile'/>
            <div className='desktopMenu'>
                <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Skills</Link>
                <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Experience</Link>
                <Link activeClass='active' to ='portfolio' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={emailSymbol} alt='desktopMenuImg' className='desktopMenuImg'/>Contact Me</button>
            <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-60} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-60} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>Experience</Link>
                <Link activeClass='active' to ='portfolio' spy={true} smooth={true} offset={-60} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to ='contact' spy={true} smooth={true} offset={-40} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar