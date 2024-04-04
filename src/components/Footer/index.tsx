import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <Typography variant="body2" gutterBottom>
        &copy; 2024 Mathan. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Designed and developed by Mathan
      </Typography>
      </Box>
  );
}

export default Footer;
