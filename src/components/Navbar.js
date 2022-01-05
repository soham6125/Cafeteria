import React, { useState } from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
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
                <Link to="/" className='logo-image'> <img src={Logo} alt="text"/> </Link>
                <div className='hiddenLinks'>
                    <Link to="/" style={{ fontSize: 15 }}> HOME </Link>
                    <Link to="/menu" style={{ fontSize: 15 }}> MENU </Link> 
                    <Link to="/gallery" style={{ fontSize: 15 }}> GALLERY </Link>
                    <Link to="/about" style={{ fontSize: 15 }}> ABOUT </Link>
                    <Link to="/contact" style={{ fontSize: 15 }}> CONTACT </Link>
                </div>
            </div>
            <div className='rightside'>
                <Link to="/" style={{ fontSize: 15 }}> HOME </Link>
                <Link to="/menu" style={{ fontSize: 15 }}> MENU </Link> 
                <Link to="/gallery" style={{ fontSize: 15 }}> GALLERY </Link>
                <Link to="/about" style={{ fontSize: 15 }}> ABOUT </Link>
                <Link to="/contact" style={{ fontSize: 15 }}> CONTACT </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button> 
            </div>
        </div>
    )
}

export default Navbar
