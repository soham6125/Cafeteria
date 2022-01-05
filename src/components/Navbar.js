import React, { useState } from 'react'
import Logo from '../assets/logo.jpg'
import ReorderIcon from '@mui/icons-material/Reorder'
import '../styles/navbar.css'

function Navbar() {
    const [openLinks, setopenLinks] = useState(false);

    const toggleNavbar = () => {
        setopenLinks(!openLinks);
    };

    return (
        <div className='navbar'>
            <div className='leftside' id={openLinks ? "open" : "close"}>
                <a href="#home" className='logo-image'> <img src={Logo} alt="text"/> </a>
                <div className='hiddenLinks'>
                    <a href="#home" style={{ fontSize: 15 }}> HOME </a>
                    <a href="#menu" style={{ fontSize: 15 }}> MENU </a> 
                    <a href="#gallery" style={{ fontSize: 15 }}> GALLERY </a>
                    <a href="#about" style={{ fontSize: 15 }}> ABOUT </a>
                    <a href="#contact" style={{ fontSize: 15 }}> CONTACT </a>
                </div>
            </div>
            <div className='rightside'>
                <a href="#home" style={{ fontSize: 15 }}> HOME </a>
                <a href="#menu" style={{ fontSize: 15 }}> MENU </a> 
                <a href="#gallery" style={{ fontSize: 15 }}> GALLERY </a>
                <a href="#about" style={{ fontSize: 15 }}> ABOUT </a>
                <a href="#contact" style={{ fontSize: 15 }}> CONTACT </a>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button> 
            </div>
        </div>
    )
}

export default Navbar
