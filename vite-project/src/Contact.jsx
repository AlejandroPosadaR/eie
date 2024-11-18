import React from 'react';
import './About.css';
import { Box, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
  
    return (
      <div className='contact'>
        <div className='services-top'>
          <Typography fontWeight="bold" fontSize="1.4rem">
            {t('contact')}
          </Typography>
        </div>
  
        <div className='contact-img'>
          <img src='../map.png' // fallback image for browsers that don't support srcSet
                  srcSet="
                    ../small-map.png 600w,
                    ../map.png 1500w
                  " alt='Map' />
        </div>
  
        <div className='contact-bottom'>
          <div className='whatsapp'>
            <a href="https://wa.me/96590900303" target="_blank" rel="noopener noreferrer">
              <img src='../what.png' alt='WhatsApp logo' />
            </a>
            <Typography
              fontWeight="400"
              sx={{ maxWidth: "400px", color: "white" }}
              margin={{ xs: "8px", sm: "8px", md: "20px" }}
            >
              Tel: (+965) 22209771 - (+965) 90900303<br />
              business@eliteintercontinentalenterprise.com<br />
              management@eliteintercontinentalenterprise.com
            </Typography>
          </div>
  
          <div className='social'>
            <div className='social-items'>
              <a href="https://www.instagram.com/eie_kw/" target="_blank" rel="noopener noreferrer">
                <img src='../instagram.png' alt='Instagram logo' />
              </a>
              <Typography sx={{ color: "white" }}>Instagram</Typography>
            </div>
  
            <div className='social-items email'>
              <img src='../new-email.png' alt='Email icon' />
              <Typography sx={{ color: "white" }}>Email</Typography>
            </div>
  
            <div className='social-items'>
              <a href="https://wa.me/96590900303" target="_blank" rel="noopener noreferrer">
                <img src='../new-what.png' alt='WhatsApp logo' />
              </a>
              <Typography sx={{ color: "white" }}>WhatsApp</Typography>
            </div>
          </div>
  
          <div className='location'>
            <div className='location-img'>
              <img src='../cropped-loc.png' alt='Map Pin' />
              <Typography sx={{ color: "white" }}>
                Address: Sharq Block 2, Abdalla Al Ahmad Street<br />
                3S Complex, 3rd Floor, Office No. 2, 15302 Al Asimah<br />
                Kuwait
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;
