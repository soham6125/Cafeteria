import React, { useState } from 'react'
import Logo from '../assets/logo.jpg'
import ReorderIcon from '@mui/icons-material/Reorder'
import '../styles/navbar.css'
import { Link } from "react-scroll";

function Navbar() {
    const [openLinks, setopenLinks] = useState(false);

    const toggleNavbar = () => {
        setopenLinks(!openLinks);
    };

    return (
        <div className='navbar'>
            <div className='leftside' id={openLinks ? "open" : "close"}>
                <a href="#home" className='logo-image'> <img src={Logo} alt="text"/> </a>
                <ul className='hiddenLinks'>
                    <li><Link to="home" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> HOME </Link></li>
                    <li><Link to="menu" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> MENU </Link> </li>
                    <li><Link to="gallery" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> GALLERY </Link></li>
                    <li><Link to="about" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> ABOUT </Link></li>
                    <li><Link to="contact" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> CONTACT </Link></li>
                </ul>
            </div>
            <ul className='rightside'>
                <li><Link to="home" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> HOME </Link></li>
                <li><Link to="menu" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> MENU </Link> </li>
                <li><Link to="gallery" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> GALLERY </Link></li>
                <li><Link to="about" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> ABOUT </Link></li>
                <li><Link to="contact" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> CONTACT </Link></li>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </ul>
        </div>
    )
}

export default Navbar
