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
                <img src={Logo} alt="text"/>
                <div className='hiddenLinks'>
                    <Link to="/" className='link-2'> Home </Link>
                    <Link to="/menu"> Menu </Link> 
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className='rightside'>
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link> 
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button> 
            </div>
        </div>
    )
}

export default Navbar
