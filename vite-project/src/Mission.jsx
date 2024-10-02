import React from 'react';
import './About.css';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import the i18n hook

const Vision = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div className='vision' id='vision'>
      {/* Left section for image */}
      <div className='vision-colash'>
        <img src='../public/vision.jpeg' alt={t('vision.altText')} />
      </div>

      {/* Right section for text */}
      <div className='about-text'>
        {/* Vision Section */}
        <Typography variant="h4" fontWeight="bold" gutterBottom className="heading-with-line">
          {t('vision.title')}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.15rem" }}>
          {t('vision.description')}
        </Typography>

        {/* Mission Section */}
        <Typography variant="h4" fontWeight="bold" sx={{ marginTop: "20px" }} gutterBottom className="heading-with-line">
          {t('mission.title')}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.15rem" }}>
          {t('mission.description')}
        </Typography>
      </div>
    </div>
  );
};

export default Vision;
