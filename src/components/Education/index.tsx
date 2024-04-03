import React from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const AboutMe: React.FC = () => {
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>Education Details</Typography>
        <Box sx={{ width: '70%', marginBottom: '20px' }}>
          <Paper sx={{ padding: '15px', backgroundColor: '#f0f0f0' }}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <SchoolIcon sx={{ marginRight: '10px' }} /> Nandha Engineering College, Erode - B.Tech (Information Technology - III Year)
            </Typography>
            <Typography variant="body2">June 2021 - June 2025</Typography>
            <Typography variant="body2">CGPA: 8.9/10 (till 5th semester)</Typography>
          </Paper>
        </Box>
        <Box sx={{ width: '70%', marginBottom: '20px' }}>
          <Paper sx={{ padding: '15px', backgroundColor: '#f0f0f0' }}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <SchoolIcon sx={{ marginRight: '10px' }} /> KVSala Higher Secondary School, Virudhunagar - 12th Std
            </Typography>
            <Typography variant="body2">May 2021</Typography>
            <Typography variant="body2">Graduated with a GPA of 84%</Typography>
          </Paper>
        </Box>
        <Box sx={{ width: '70%' }}>
          <Paper sx={{ padding: '15px', backgroundColor: '#f0f0f0' }}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
              <SchoolIcon sx={{ marginRight: '10px' }} /> KVSala Higher Secondary School, Virudhunagar - 10th Std
            </Typography>
            <Typography variant="body2">May 2019</Typography>
            <Typography variant="body2">Graduated with a GPA of 73%</Typography>
          </Paper>
        </Box>
        <Divider sx={{ width: '70%', height: '4px', backgroundColor: '#a3b18a', margin: '20px 0' }} />
      </Box>
    </>
  );
}

export default AboutMe;
