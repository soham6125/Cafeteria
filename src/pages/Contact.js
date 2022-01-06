import React from 'react'
import { motion } from 'framer-motion';
import '../styles/Contact.css'

function Contact() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className='contact'>
            <h1 className='contactTitle' 
                style={{ display: 'flex', justifyContent: 'center'}}
            > Contact <span style={{ color: '#ed1b76'}}> &nbsp;Us </span> </h1>
            <div className='contactDetails'>
                {/* Working Time Details */}
                <div className='details-item' style={{ display: 'flex', flexDirection: 'column'}}> 
                    <div style={{ display: 'flex', flexDirection: 'row' }}> 
                        <i className="fa fa-clock-o fa-3x logo"></i> 
                        <h2> Working Days </h2> 
                    </div>
                    <p style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className='card-detail'> Monday - Friday: </span> 
                        <span> 10:00 AM - 11:00 PM </span>
                    </p>
                    <p style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className='card-detail'> Saturday - Sunday: </span> 
                        <span> 10:00 AM - 5:00 PM </span>
                    </p>
                </div>
                {/* Address Details  */}
                <div className='details-item' style={{ display: 'flex', flexDirection: 'column'}}> 
                    <div style={{ display: 'flex', flexDirection: 'row' }}> 
                        <i className="fa fa-map-marker fa-3x logo"></i> 
                        <h2 style={{ marginLeft: -5 }}> Shop Location </h2> 
                    </div>
                    <p style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className='card-detail'> Shop Address: </span> 
                        <span> XYZ </span>
                    </p>
                </div>
                {/* Contact Details  */}
                <div className='details-item' style={{ display: 'flex', flexDirection: 'column'}}> 
                    <div style={{ display: 'flex', flexDirection: 'row' }}> 
                        <i className="fa fa-phone fa-3x logo"></i> 
                        <h2> Shop Contact </h2> 
                    </div>
                    <p style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className='card-detail'> Phone Number: </span> 
                        <span> +91 ********** </span>
                    </p>
                    <p style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className='card-detail'> Email Address: </span> 
                        <span> contact@xyz.com </span>
                    </p>
                </div>

            </div>
            <div className='rightSide'>
                <form id='contact-form'>
                    <label htmlFor='name' style={{ text: 'black' }}> Full Name: </label>
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
