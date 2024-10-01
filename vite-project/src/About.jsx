import React from 'react';
import './About.css';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <div className='about' id='about'>
        {/* Left section for image */}
        <div className='about-truck'>
            <img src='../public/logistics-truck.jpg' alt='about image'/>

        </div>

        {/* Right section for text */}
        <div className='about-text'>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
            About Us
            </Typography>
            <Typography variant="body1" sx={{fontSize:"1.3rem"}}>
            We are dedicated to providing exceptional service and products in the healthcare and compression garments industry. 
            Our team is committed to delivering the highest quality and ensuring that our clients' needs are always met with professionalism and care.
            </Typography>
        </div>
    </div>
  );
};

export default About;
