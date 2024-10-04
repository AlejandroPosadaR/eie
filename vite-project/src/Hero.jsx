import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height:  { xs:'auto', md: '90vh' },
        backgroundColor: '#0A1931',
        color: 'white',
        flexDirection: { xs:'column-reverse', md: 'row' }, 

      }}
    >
      {/* Left section for text */}
      <Box
        sx={{
          flex: 1,
          padding: '2rem',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          p:  { xs:' 3rem', md: '4rem' },
          pt: {xs:'0rem'},
          justifyContent: 'center',

        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "left" }} gutterBottom>
          {t('hero.title')}
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "left",mt:"1rem" }}>
          {t('hero.description')}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          role='button'
          id='learn-more'
          sx={{
            backgroundColor: '#fff',
            color: '#0A1931',
            fontWeight: 'bold',
            width: '150px',
            marginTop: '2rem',
          }}
        >
          {t('hero.button')}
        </Button>
      </Box>

      {/* Right section for the background image */}
      <Box
        sx={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: { xs:'auto', md: '100%' },
          width: { xs:'100%', md: '60%' },
          zIndex:3,
          clipPath:  { xs:'polygon(0% 0%, 100% 0%, 100% 97%, 0% 70%);', md: 'none' },
        }}
      >
        <img src='../hero.jpeg' alt='hero image' height="100%" width="100%"/>
      </Box>
    </Box>
  );
};

export default Hero;
