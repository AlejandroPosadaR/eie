import React from 'react';
import './About.css';
import { Box, Typography,Grid2, Divider} from '@mui/material';

const Services = () => {
  return (
    <div className='services'>
        <div className='services-top'>

            <Typography fontWeight="bold" fontSize="1.4rem">
                OUR SERVICES

            </Typography>
        </div>
        <div className='services-img'>
            <img src='../public/services.jpg'/>

        </div>
        <div className='services-bottom'>
            
            <Typography fontWeight="400" fontSize="1.4rem" sx={{maxWidth:"250px"}} margin={{xs:"8px",sm:"8px",md:"20px"}}>
            Quality Products Sourcing
            </Typography>
            <Typography fontWeight="400" fontSize="1.4rem" sx={{maxWidth:"250px"}} margin={{xs:"8px",sm:"8px",md:"20px"}}>
            Efficient Supply Chain Management
            </Typography>
            <Typography fontWeight="400" fontSize="1.4rem" sx={{maxWidth:"250px"}} margin={{xs:"8px",sm:"8px",md:"20px"}}>
            Customise Business Solutions
            </Typography>
            
            <Typography fontWeight="400" fontSize="1.4rem" sx={{maxWidth:"250px"}} margin={{xs:"8px",sm:"8px",md:"20px"}}>
            Market Research & Analysis
            </Typography>
        </div>
    </div>
  );
};

export default Services;
