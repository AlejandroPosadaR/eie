import React from 'react';
import './About.css';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import i18n hook

const Services = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div className='services' id='services'>
      <div className='services-top'>
        <Typography fontWeight="bold" fontSize="1.4rem" color='white'>
          {t('services.title')}
        </Typography>
      </div>
      <div className='services-img'>
        <img src='../new-ser.jpg' alt={t('services.altText')} />
      </div>
      <div className='services-bottom'>
        <Typography fontWeight="400" fontSize="1.4rem" color='white' sx={{ maxWidth: "270px" }} margin={{ xs: "8px", sm: "8px", md: "20px" }}>
          {t('services.qualityProducts')}
        </Typography>
        <Typography fontWeight="400" fontSize="1.4rem" color='white' sx={{ maxWidth: "270px" }} margin={{ xs: "8px", sm: "8px", md: "20px" }}>
          {t('services.efficientSupply')}
        </Typography>
        <Typography fontWeight="400" fontSize="1.4rem" color='white' sx={{ maxWidth: "270px" }} margin={{ xs: "8px", sm: "8px", md: "20px" }}>
          {t('services.customSolutions')}
        </Typography>
        <Typography fontWeight="400" fontSize="1.4rem" color='white' sx={{ maxWidth: "270px" }} margin={{ xs: "8px", sm: "8px", md: "20px" }}>
          {t('services.marketResearch')}
        </Typography>
      </div>
    </div>
  );
};

export default Services;
