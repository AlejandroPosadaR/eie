import React from 'react';
import './About.css';
import { Box, Typography } from '@mui/material';

const Products = () => {
  return (
    <div className='products-sec'>
        {/* Left section for image */}
        <Typography fontWeight="bold" fontSize="1.4rem" margin="30px" color="black">
            PRODUCTS

        </Typography>

        {/* Right section for text */}
        <div className='products'>
            <div className='products-item'>
                <img src='../public/medical.jpg'/>
                <Typography variant="h5" sx={{color:"#1F5D9E",fontWeight:"600",fontSize:"1.4rem",mt:"20px"}}>
                  HEALTHCARE SOLUTIONS
                </Typography>
            </div>
            <div className='products-item'>
                <img src='../public/vision.jpeg'/>
                <Typography variant="h5" sx={{color:"#1F5D9E",fontWeight:"600",fontSize:"1.4rem",mt:"20px"}}>
                    COMPRESSION GARMENTS
                </Typography>
            </div>
            <div className='products-item'>
                <img src='../public/eie-plus.jpg'/>
                <Typography variant="h5" sx={{color:"#1F5D9E",fontWeight:"600",fontSize:"1.4rem",mt:"20px"}}>
                  EIE PLUS
                </Typography>
            </div>
        </div>
    </div>
  );
};

export default Products;