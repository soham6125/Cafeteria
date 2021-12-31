import React from 'react'
import { motion } from 'framer-motion';
import Image from '../assets/feedback.jpeg'
import '../styles/Contact.css'

function Contact() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className='contact'>
            <div className='leftSide' style={{backgroundImage: `url(${Image})`}}>
                
            </div>
            <div className='rightSide'>
                <h1> Contact Us </h1>
                <form id='contact-form'>
                    <label htmlFor='name'> Full Name: </label>
                    <input name='name' placeholder='Enter Full Name' type='text'></input>
                    <label htmlFor='email'> Email: </label>
                    <input name='email' placeholder='Enter email..' type='email'></input>
                    <label htmlFor='feedback'> Feedback: </label>
                    <textarea rows='6' placeholder='Enter your feedback' name='feedback' required></textarea>
                    <button type='submit'> Submit </button>
                </form>
            </div>
        </div>
        </motion.div>
    )
}

export default Contact
