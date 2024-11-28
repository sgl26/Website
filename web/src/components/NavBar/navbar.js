import React from 'react'
import './navbar.css'
import Profile from '../../assets/Profile.png'
import { Link } from 'react-scroll'
import emailSymbol from '../../assets/email.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={Profile} alt='Profile' className='Profile'/>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Experience</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={emailSymbol} alt='desktopMenuImg' className='desktopMenuImg'/>Contact Me</button>
        </nav>
    )
}

export default Navbar