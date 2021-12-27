import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from '../assets/home_page.jpg'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{backgroundImage: `url(${HomeImage})`}}>
            <div className='headerContainer'>
                <h1> Cafeteria </h1>
                <p> Let us make your day! </p>
                <Link to="/menu" style={{textDecoration: 'none'}}>
                    <button className="primary-button" id="order_btn"><span>Order Now</span></button>
                </Link>
            </div>
        </div>
    )
}

export default Home
