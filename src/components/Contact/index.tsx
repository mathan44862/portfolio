import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LeetcodeIcon from '@mui/icons-material/Code';
import HackerRankIcon from '@mui/icons-material/Engineering';

const Contact: React.FC = () => {
  const handleIconClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {/* Individual contact icons */}
        <EmailIcon sx={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => handleIconClick('mailto:mathan@gmail..com')} />
        <PhoneIcon sx={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => handleIconClick('tel:+91 9443244862')} />
        <GitHubIcon sx={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => handleIconClick('https://github.com/mathan44862')} />
        <LinkedInIcon sx={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => handleIconClick('https://www.linkedin.com/in/mathan-m-7a9740230/e')} />
        <LeetcodeIcon sx={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => handleIconClick('https://leetcode.com/M__Mathan/ ')} />
        <HackerRankIcon sx={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => handleIconClick('https://www.hackerrank.com/profile/M__MATHAN')} />
      </Box>
    </Box>
  );
}

export default Contact;
