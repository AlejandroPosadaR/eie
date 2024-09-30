import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '95vh',
        backgroundColor: '#0A1931', // Dark blue background
        color: 'white',
        paddingLeft: '2rem',
        flexDirection:{xs:'column',md:'row'},
        maxHeight:"700px"
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
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{textAlign:"left"}} gutterBottom>
          Explore Excellence in Healthcare Supplies Chain
        </Typography>
        <Typography variant="h5" sx={{alignContent:"left",textAlign:"left"}}>
          Discover a world of possibilities, where our high quality and excellent customer services meet. 
          We prioritize your high standards and unique needs, with the best business experience.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#fff',
            color: '#0A1931',
            fontWeight: 'bold',
            width: '150px',
            marginTop: '1rem',
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Right section for the background image */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url(../public/world-map.jpg)', // Replace with your image path
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100%',
        }}
      ></Box>
    </Box>
  );
};

export default Hero;
