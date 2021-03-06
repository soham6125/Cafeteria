import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="social-container">
                <ul className="social-icons">
                    <li><a href="/" className='instagram'><i className="fa fa-instagram"></i></a></li>
                    <li><a href="/" className='twitter'><i className="fa fa-twitter"></i></a></li>
                    <li><a href="/" className='linkedin'><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="/" className='facebook'><i className="fa fa-facebook"></i></a></li>
                </ul>
            </div>
            <p> &copy; 2021 Cafeteria.com </p>
        </div>
    )
}

export default Footer
