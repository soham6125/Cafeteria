import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div class="social-container">
                <ul class="social-icons">
                    <li><a href="#" className='instagram'><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#" className='twitter'><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" className='linkedin'><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#" className='facebook'><i class="fa fa-facebook"></i></a></li>
                </ul>
            </div>
            <p> &copy; 2021 Cafeteria.com </p>
        </div>
    )
}

export default Footer
