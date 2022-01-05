import { motion } from 'framer-motion'
import {React, useState} from 'react'
import Popup from '../components/Popup'
import '../styles/About.css'

function About() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='about'>
                <div className='aboutBottom'>
                    <h1> Our Story </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
                        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
                        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
                        error repudiandae fuga? Ipsa laudantium molestias eos sapiente
                        officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum.
                        Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
                        cumque velit
                    </p>
                    <button className='btn-about from-left' onClick={() => setButtonPopup(true)}> View Full Story </button>
                </div>
                { buttonPopup && <Popup setButtonPopup={setButtonPopup} /> }
            </div>
        </motion.div>
    )
}

export default About
