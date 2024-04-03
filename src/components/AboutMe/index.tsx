import React from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';

const AboutMe: React.FC = () => {
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper sx={{ backgroundColor: '#a3b18a', color: 'white', padding: '20px', maxWidth: '800px', textAlign: 'center' }}>
            <Typography >About Me</Typography>
          <p>
            Hello! My name is Mathan, and I recently completed an internship at Health Click India as a ReactJS developer. During my internship, I had the opportunity to work on exciting projects that allowed me to deepen my understanding of front-end development and user interface design. I am proficient in ReactJS, Node.js, HTML, CSS, and JavaScript, and I have a strong foundation in problem-solving skills using Java.
          </p>
        </Paper>
        <Divider sx={{ width: '70%', height: '4px', backgroundColor: '#a3b18a', margin: '20px 0' }} />
      </Box>
    </>
  );
}

export default AboutMe;
