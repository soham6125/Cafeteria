import React from 'react'
import Image from '../assets/feedback.jpeg'
import '../styles/Contact.css'

function Contact() {
    return (
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
    )
}

export default Contact
