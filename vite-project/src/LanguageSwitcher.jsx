import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, MenuItem, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lng) => {
    setAnchorEl(null);
    if (lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div >
<IconButton
  onClick={handleClick}
  sx={{
    borderRadius: '20px',
    color: "#161E33",
    '&:hover': {
      backgroundColor: '#2672b87',
    },
    // Show full IconButton on PC and only icon on mobile
    '@media (max-width: 600px)': {
      padding: '10px',
      minWidth: 'auto',
      '& .MuiButton-startIcon': {
        margin: 0,
      },
      '& .MuiButton-label': {
        display: 'none', // Hide text on mobile
      },
    },
  }}
>
  <LanguageIcon sx={{ color: "#161E33", height: "35px", width: "35px" }} />
</IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'white',
            color: '#161E33',
          },
        }}
      >
        <MenuItem onClick={() => handleClose('en')} sx={{ '&:hover': { backgroundColor: '#2672b8' } }}>
          English
        </MenuItem>
        <MenuItem onClick={() => handleClose('es')} sx={{ '&:hover': { backgroundColor: '#2672b8' } }}>
          Español
        </MenuItem>
        <MenuItem onClick={() => handleClose('ar')} sx={{ '&:hover': { backgroundColor: '#2672b8' } }}>
          Arabic
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;