import React from 'react';
import './About.css';
import { Box, Typography,Grid2, Divider} from '@mui/material';
import { useTranslation } from 'react-i18next';
const Contact = () => {
    const {t} = useTranslation();
  return (
    <div className='contact'>
        <div className='services-top'>

            <Typography fontWeight="bold" fontSize="1.4rem">
                {t('contact')}

            </Typography>
        </div>
        <div className='contact-img'>
            <img src='../map.png'/>

        </div>
        <div className='contact-bottom'>
            <div className='whatsapp'>
                <img src='../what.png' alt='whatsapp logo'/>
                <Typography fontWeight="400" sx={{maxWidth:"400px", color:"white"}}
                margin={{xs:"8px",sm:"8px",md:"20px"}} >
                    Tel:(+965)22209771 - (+965) 90900303<br/>
                    business@eliteintercontinentalenterprise.com<br/>
                    management@eliteintercontinentalenterprise.com
                </Typography>
            </div>

            <div className='social'>
                <div className='social-items'>
                    <img src='../ig.png' alt='icons'/>
                    <Typography sx={{color:"white"}}>
                        Instagram
                    </Typography>
                </div>
                <div className='social-items'>
                    <img src='../ig.png' alt='icons'/>
                    <Typography sx={{color:"white"}}>
                        Email
                    </Typography>
                </div>
                <div className='social-items'>
                    <img src='../what2.png' alt='icons'/>
                    <Typography sx={{color:"white"}}>
                        Whatsapp
                    </Typography>
                </div>
            </div>
            <div className='location'>
                <div className='location-img'>
                    <img src='../new-location.png' alt='Map Pin'/>
                    <Typography sx={{color:"white"}}>
                        Address: Sharq Block 2, Abdalla Al Ahmad Street<br/>
                        3S Complex, 3 Floor, Office No. 2, 15302 Al Asimah<br/>
                        Kuwait
                    </Typography>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;
