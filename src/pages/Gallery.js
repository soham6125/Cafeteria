import React from 'react'
import { motion } from 'framer-motion';
import image1 from '../assets/gallery-1.jpg';
import image2 from '../assets/gallery-2.jpg';
import image3 from '../assets/gallery-3.jpg';
import image4 from '../assets/gallery-4.jpg';
import image5 from '../assets/gallery-5.jpg';
import image6 from '../assets/gallery-6.jpg';
import image7 from '../assets/gallery-7.png';
import image8 from '../assets/gallery-8.png';
import image9 from '../assets/gallery-9.png';
import image10 from '../assets/gallery-10.jpg';
import image11 from '../assets/gallery-11.jpg';
import image12 from '../assets/gallery-12.jpg';
import '../styles/Gallery.css'

function Gallery() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div>
                <div className='gallery-title'>
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}> Our Gallery </h1>
                </div>
                <div class='gallery'>
	                <div class="gallery__column">
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image1 } alt="text" class="gallery__image" />
	                		</div>
	                	</a>
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image2 } alt="text" class="gallery__image"/>
	                		</div>
	                	</a>
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image3 } alt="text" class="gallery__image"/>             		
                            </div>
	                	</a>
	                </div>

	                <div class="gallery__column">
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image4 } alt="text" class="gallery__image"/>               		
                            </div>
	                	</a>
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image5 } alt="text" class="gallery__image"/>               		
                            </div>
	                	</a>
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image6 } alt="text" class="gallery__image"/>              		
                            </div>
	                	</a>
	                </div>

	                <div class="gallery__column">
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image7 } alt="text" class="gallery__image"/>               		
                            </div>
	                	</a>
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image8 } alt="text" class="gallery__image"/>               		
                            </div>
	                	</a>
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image9 } alt="text" class="gallery__image"/>               		
                            </div>
	                	</a>
	                </div>

	                <div class="gallery__column">
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image10 } alt="text" class="gallery__image"/>
	                		</div>
	                	</a>
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image11 } alt="text" class="gallery__image"/>              		
                            </div>
	                	</a>
	                	<a href="/" class="gallery__link">
	                		<div>
	                			<img src={ image12 } alt="text" class="gallery__image"/>	                		
                            </div>
	                	</a>
	                </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Gallery
