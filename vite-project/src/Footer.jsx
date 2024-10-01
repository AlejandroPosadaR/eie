import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import './Footer.css';
function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_zn7k42h', // Replace with your EmailJS service ID
      'template_jovzagh', // Replace with your EmailJS template ID
      { email: email },
      'wWi-JIie5vS1LqRER' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setMessage(t('footer.emailSuccess'));
    })
    .catch((error) => {
      console.log('FAILED...', error);
      setMessage(t('footer.emailFailure'));
    });

    setEmail(''); // Clear the input field after submission
  };

  // Define reusable styles
  const commonLinkStyle = {
    color: 'white',
    display: 'block',
    marginBottom: '8px',
  };

  const sectionTitleStyle = {
    variant: 'h5',
    gutterBottom: true,
  };

  const footerContainerStyle = {
    backgroundColor: '#2D3748',
    color: 'white',
    padding: '40px 0',
  };

  return (
    <Box sx={footerContainerStyle}>
      <Grid container justifyContent="center" rowSpacing={4} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid item xs={12} md={3}>
          <img src="../eie.png" alt={t('footer.logoAlt')} style={{ width: 'auto', height: '100px', maxWidth: '200px' }} />

        </Grid>

        <Grid item xs={12} md={2}>
          <Typography {...sectionTitleStyle} >{t('footer.supportTitle')}</Typography>
          <Box>
            <Link component={RouterLink} to="/contact" underline="none" sx={commonLinkStyle}>
              {t('footer.shipping')}
            </Link>
            <Link component={RouterLink} to="/contact" underline="none" sx={commonLinkStyle}>
              {t('footer.returns')}
            </Link>
            <Link component={RouterLink} to="/contact" underline="none" sx={commonLinkStyle}>
              {t('footer.contact')}
            </Link>
            <Link component={RouterLink} to="/pricing" underline="none" sx={commonLinkStyle}>
              Pricing
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography {...sectionTitleStyle}>{t('footer.companyTitle')}</Typography>
          <Box>
            <Link component={RouterLink} to="/contact" underline="none" sx={commonLinkStyle}>
              {t('footer.about')}
            </Link>
            <Link component={RouterLink} to="/contact" underline="none" sx={commonLinkStyle}>
              {t('footer.affiliateProgram')}
            </Link>
          </Box>
        </Grid>

        <Grid container item xs={12} md={4} justifyContent="center" >
          <Box 
            component="form" 
            onSubmit={sendEmail} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '10px', 
              backgroundColor: '#4A5568', 
              padding: '20px', 
              borderRadius: '10px', 
              boxSizing: 'border-box', 
              color: 'white', 
              width: '90%', 
              alignSelf: 'center' 
            }}
          >
            <Typography {...sectionTitleStyle} >{t('footer.signupTitle')}</Typography>
            <TextField 
              variant="filled" 
              label={t('footer.emailLabel')} 
              value={email} 
              onChange={handleInputChange} 
              sx={{ backgroundColor: 'white', borderRadius: '5px' }} 
            />
            <Button 
              variant="contained" 
              type="submit" 
              sx={{ backgroundColor: '#A0AEC0', color: 'white', borderRadius: '5px' }}
            >
              {t('footer.signupButton')}
            </Button>
            {message && <Typography sx={{ marginTop: '10px', color: message.includes(t('footer.emailSuccess')) ? 'lightgreen' : 'red' }}>{message}</Typography>}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;