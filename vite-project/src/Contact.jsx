import React from 'react';
import './About.css';
import { Box, Typography,Grid2, Divider} from '@mui/material';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='services-top'>

            <Typography fontWeight="bold" fontSize="1.4rem">
                CONTACT US

            </Typography>
        </div>
        <div className='contact-img'>
            <img src='../public/map.png'/>

        </div>
        <div className='contact-bottom'>
            <div className='whatsapp'>
                <img src='../public/what.png' alt='whatsapp logo'/>
                <Typography fontWeight="400" fontSize="1.4rem" sx={{maxWidth:"400px"}} margin={{xs:"8px",sm:"8px",md:"20px"}}>
                    Tel:(+965)22209771 - (+965) 90900303<br/>
                    business@eliteintercontinentalenterprise.com<br/>
                    management@eliteintercontinentalenterprise.com
                </Typography>
            </div>

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

export default Contact;
