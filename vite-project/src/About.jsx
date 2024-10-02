import React from 'react';
import './About.css';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import i18n hook

const About = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div className='about' id='about'>
      {/* Left section for image */}
      <div className='about-truck'>
        <img src='../logistics-truck.jpg' alt={t('about.altText')} />
      </div>

      {/* Right section for text */}
      <div className='about-text'>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {t('about.title')}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.3rem" }}>
          {t('about.description')}
        </Typography>
      </div>
    </div>
  );
};

export default About;
