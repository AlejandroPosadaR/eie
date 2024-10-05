import React from 'react';
import './About.css';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import the i18n hook
import { motion } from 'framer-motion';

const Vision = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div className='vision' id='vision'>
      {/* Left section for image */}
      <div className='vision-colash'>
        <img src='./vision.jpeg' alt={t('vision.altText')} />
      </div>

      {/* Right section for text */}
      <motion.div className='about-text'
           initial={{ opacity: 0, scale: 1, x: -100 }}
           whileInView={{ opacity: 1, scale: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.15 }}>
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
      </motion.div>
    </div>
  );
};

export default Vision;
