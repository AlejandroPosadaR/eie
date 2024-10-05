import React from 'react';
import './About.css';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import i18n hook
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div className='about' id='about'>
      {/* Left section for image */}
      <div className='about-truck'
                 initial={{ opacity: 0, scale: 1, x: -100 }}
                 whileInView={{ opacity: 1, scale: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.15 }}>
        <img src='../new-truck.jpeg' alt={t('about.altText')} />
      </div>

      {/* Right section for text */}
      <motion.div className='about-text'
           initial={{ opacity: 0, scale: 1, x: -100 }}
           whileInView={{ opacity: 1, scale: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.15 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {t('about.title')}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.3rem" }}>
          {t('about.description')}
        </Typography>
      </motion.div>
    </div>
  );
};

export default About;
