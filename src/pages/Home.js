import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from '../assets/home_page.jpg'
import '../styles/Home.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
    return (
        <div className='home' style={{backgroundImage: `url(${HomeImage})`}}>
            <div className='headerContainer'>
                <h1> Cafeteria </h1>
                <p> Let us make your day! </p>
                <Link to="/menu" style={{textDecoration: 'none'}}>
                    <button> <div className='text'> ORDER NOW </div> <span id='arrow'><ArrowForwardIcon/></span> </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
