import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
const Hero = () => {
  const { t } = useTranslation();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = 80; // This is 5rem in pixels (1rem is usually 16px)
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Smooth scroll
        });
    }
};
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: { xs: 'auto', md: '90vh' },
        backgroundColor: '#0A1931',
        color: 'white',
        flexDirection: { xs: 'column-reverse', md: 'row' },
      }}
    >
      {/* Left section for text */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 1, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        sx={{
          flex: 1,
          padding: '2rem',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          p: { xs: '3rem', md: '4rem' },
          pt: { xs: '0rem' },
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: 'left' }} gutterBottom>
          {t('hero.title')}
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'left', mt: '1rem' }}>
          {t('hero.description')}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          role="button"
          id="learn-more"
          sx={{
            backgroundColor: '#fff',
            color: '#0A1931',
            fontWeight: 'bold',
            width: '150px',
            marginTop: '2rem',
          }}
          onClick={() => scrollToSection('about')}
        >
          {t('hero.button')}
        </Button>
      </Box>

      {/* Right section for the background image */}
      <Box
      sx={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: { xs: 'auto', md: '100%' },
        width: { xs: '100%', md: '60%' },
        zIndex: 3,
        clipPath: { xs: 'polygon(0% 0%, 100% 0%, 100% 97%, 0% 70%)', md: 'none' },
      }}
    >
      <img
        src="../hero.jpeg" // fallback image for browsers that don't support srcSet
        srcSet="
          ../hero-small.jpeg 800w,
          ../hero.jpeg 1500w
        "
        alt="hero image"
        style={{ height: '100%', width: '100%' }}
      />
    </Box>

    </Box>
  );
};

export default Hero;
