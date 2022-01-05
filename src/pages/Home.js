import React from 'react'
import '../styles/Home.css'
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='home'>
                <div className='headerContainer'>
                    <h1> Cafeteria </h1>
                    <p> Let us make your day! </p>
                    <a href="#menu" style={{textDecoration: 'none'}}>
                        <button className="primary-button" id="order_btn"><span>Order Now</span></button>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
