import React from 'react';
import './About.css';
import { Box, Typography } from '@mui/material';

const Vision = () => {
  return (
    <div className='vision'>
        {/* Left section for image */}
        <div className='vision-colash'>
            <img src='../public/vision.jpeg' alt='about image'/>

        </div>

        {/* Right section for text */}
        <div className='about-text'>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
            Vision
            </Typography>
            <Typography variant="body1" sx={{fontSize:"1.15rem"}}>
            We are dedicated to providing exceptional service and products in the healthcare and compression garments industry. 
            Our team is committed to delivering the highest quality and ensuring that our clients' needs are always met with professionalism and care.
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{marginTop:"20px"}}gutterBottom>
                Mission
            </Typography>
            <Typography variant="body1" sx={{fontSize:"1.15rem"}}>
            We are dedicated to providing exceptional service and products in the healthcare and compression garments industry. 
            Our team is committed to delivering the highest quality and ensuring that our clients' needs are always met with professionalism and care.
            </Typography>
        </div>
    </div>
  );
};

export default Vision;
