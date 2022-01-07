import React, { useState } from 'react'
import Logo from '../assets/logo.jpg'
// import ReorderIcon from '@mui/icons-material/Reorder'
import '../styles/navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    const [openNavLinks, setopenNavLinks] = useState(false);
    console.log(setopenNavLinks);

    // const toggleNavbar = () => {
    //     setopenNavLinks(!openNavLinks);
    // };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div className='navbar'>
            <div className='leftside' id={openNavLinks ? "open" : "close"}>
                <img src={Logo} alt="text"/>
                {/* <ul className='hiddenNavLinks'>
                    <li><ScrollNavLink to="home" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> HOME </ScrollNavLink></li>
                    <li><ScrollNavLink to="menu" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> MENU </ScrollNavLink> </li>
                    <li><ScrollNavLink to="gallery" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> GALLERY </ScrollNavLink></li>
                    <li><ScrollNavLink to="about" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> ABOUT </ScrollNavLink></li>
                    <li><ScrollNavLink to="contact" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> CONTACT </ScrollNavLink></li>
                </ul> */}
            </div>
            <ul className='rightside'>
                <li><Link to="/" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> HOME </Link></li>
                <li><Link to="/menu" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> MENU </Link> </li>
                <li><Link to="/gallery" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> GALLERY </Link></li>
                <li><Link to="/about" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> ABOUT </Link></li>
                <li><Link to="/contact" activeClass="active" smooth={true} duration={500} style={{ fontSize: 15 }}> CONTACT </Link></li>
            </ul>
            {!localStorage.getItem("token") ? 
            <form className="auth-form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/signup" style={{ fontSize: 15, marginRight: -6 }}> SIGNUP </Link>
                <Link to="/login" style={{ fontSize: 15 }}> LOGIN </Link>
            </form> : 
            <button onClick={handleLogout} className='logout-btn'> LOGOUT </button> }
            {/* <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button> */}
        </div>
    )
}

export default Navbar
