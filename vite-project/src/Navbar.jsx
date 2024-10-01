import React from 'react';
import { Typography, Box, IconButton, TextField, Menu, MenuItem, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LanguageSwitcher from './LanguageSwitcher';

import './navbar.css';

function Navbar() {
    // State for dropdown menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Function to scroll to specific section by ID
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
        <div className='nav-bar'>
            {/* Container for Logo and Text */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Logo */}
                <a href="/" className='logo'>
                    <img src="../eie.png" alt='Company Logo' />
                </a>
                
                {/* Text next to logo */}
                <div className='navbar-text'>
                    <Typography color='black' sx={{ marginLeft: "1rem", maxWidth: "400px", whiteSpace: "pre-line",fontWeight:"bold"}}>
                        GENERAL TRADING<br />
                        HEALTHCARE & COMPRESSION GARMENTS
                    </Typography>
                </div>

            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: '1rem' }}>
                <Button onClick={() => scrollToSection('products-sec')} sx={{ color: 'black', fontWeight: 'bold' }}>
                    Products
                </Button>
                <Button onClick={() => scrollToSection('services')} sx={{ color: 'black', fontWeight: 'bold' }}>
                    Services
                </Button>
                <IconButton
                    aria-controls={open ? 'more-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ color: 'black' }}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="more-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'more-button',
                    }}
                >
                    <MenuItem onClick={() => scrollToSection('about')}>About Us</MenuItem>
                    <MenuItem onClick={() => scrollToSection('vision')}>Vision</MenuItem>
                </Menu>
            </Box>

            {/* Search Bar */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search"
                    InputProps={{
                        endAdornment: (
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        ),
                        sx: { borderRadius: '20px', backgroundColor: '#f0f0f0' },
                    }}
                />
            </Box>

            {/* Language Switcher */}
            <LanguageSwitcher />
        </div>
    );
}

export default Navbar;
